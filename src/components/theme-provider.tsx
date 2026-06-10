import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "ui-lab-theme";

function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : null;
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: {
  children: ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(
    () => readStoredTheme() ?? defaultTheme,
  );
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(readStoredTheme() ?? defaultTheme),
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
    if (theme !== "system") {
      setResolvedTheme(theme);
      return;
    }
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setResolvedTheme(mq.matches ? "dark" : "light");
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [resolvedTheme]);

  const setTheme = (next: Theme) => setThemeState(next);
  const toggle = () =>
    setThemeState(resolvedTheme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider
      value={{ theme, resolvedTheme, setTheme, toggle }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
