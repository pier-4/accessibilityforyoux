"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

// Adjust this variable to change the button size (e.g., "size-8", "w-[36px] h-[36px]")
const BUTTON_SIZE = "size-8 max-md:size-12";

const THEMES = ["light", "system", "dark"];
const ICONS = { light: Sun, system: Monitor, dark: Moon };

export default function NavbarThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "system";
    return localStorage.getItem("theme") || "system";
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); //eslint-disable-next-line react-hooks/exhaustive-deps
    setTheme(localStorage.getItem("theme") || "system");
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const root = window.document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    isDark ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme, isClient]);

  const cycleTheme = () => {
    setTheme(THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]);
  };

  const btnClasses = `inline-flex justify-center items-center shrink-0 ${BUTTON_SIZE} border border-secondary-outline rounded-full transition-all duration-200 focus:outline-none m-1 focus:ring-2 focus:ring-primary/50 active:scale-90 bg-toggle-inactive-bg text-toggle-inactive-text hover:bg-toggle-hover-bg hover:text-toggle-hover-text`;

  if (!isClient) {
    return <div className={`${btnClasses} invisible`} aria-hidden="true" />;
  }

  const CurrentIcon = ICONS[theme] || Monitor;

  return (
    <button
      type="button"
      aria-label={`Current theme is ${theme}. Click to cycle.`}
      onClick={cycleTheme}
      className={btnClasses}
    >
      <CurrentIcon className="shrink-0 size-4" strokeWidth={2.5} />
    </button>
  );
}
