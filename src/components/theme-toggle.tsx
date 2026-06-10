import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { IconButton } from "@/components/ui/icon-button";

export function ThemeToggle() {
  const { resolvedTheme, toggle } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <IconButton
      onClick={toggle}
      aria-label={isDark ? "ライトモードに切替" : "ダークモードに切替"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </IconButton>
  );
}
