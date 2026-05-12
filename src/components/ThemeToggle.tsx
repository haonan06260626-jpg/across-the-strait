"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const { t } = useLocale();

  useEffect(() => {
    const stored = window.localStorage.getItem("strait_theme");
    const nextTheme = stored === "light" || stored === "dark" ? stored : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("strait_theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      className={cn(
        "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/70 text-ink-900 backdrop-blur transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-blue-300 dark:hover:text-blue-200",
        className,
      )}
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t("common.switchToLight") : t("common.switchToDark")}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
