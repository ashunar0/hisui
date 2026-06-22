import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-context";
import { IconButton } from "@/components/ui/icon-button";

export function ThemeToggle() {
  const { resolvedTheme, toggle } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <IconButton
      onClick={toggle}
      aria-label={isDark ? "ライトモードに切替" : "ダークモードに切替"}
    >
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </IconButton>
  );
}
