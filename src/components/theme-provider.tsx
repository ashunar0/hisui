import { type ReactNode, useEffect, useState } from "react";
import {
  type ResolvedTheme,
  type Theme,
  ThemeContext,
} from "./theme-context";

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
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  // OS の prefers-color-scheme を購読 (system 選択時のみ resolvedTheme に効く)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemTheme(mq.matches ? "dark" : "light");
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const resolvedTheme: ResolvedTheme =
    theme === "system" ? systemTheme : theme;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    root.classList.toggle("dark", resolvedTheme === "dark");
    // 強制 reflow: transition 無効のまま新しい色を確定させてから再有効化する
    window.getComputedStyle(root).getPropertyValue("opacity");
    root.classList.remove("theme-switching");
  }, [resolvedTheme]);

  const setTheme = (next: Theme) => setThemeState(next);
  const toggle = () =>
    setThemeState(resolvedTheme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
