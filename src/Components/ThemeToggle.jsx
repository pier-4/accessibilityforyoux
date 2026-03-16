"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState("system");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This only runs once on the client
    setIsClient(true); //eslint-disable-next-line react-hooks/exhaustive-deps
    const saved = localStorage.getItem("theme") || "system";
    setTheme(saved);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const root = window.document.documentElement;

    const applyTheme = (target) => {
      const root = window.document.documentElement;

      // Calculate if we SHOULD be in dark mode
      const isDark =
        target === "dark" ||
        (target === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme, isClient]);

  // Render a placeholder with same dimensions to avoid layout shift
  if (!isClient) {
    return (
      <div className="inline-flex bg-zinc-50  border border-zinc-200 dark:border-zinc-800 rounded-full p-1 gap-1 invisible">
        <div className="size-8" />
        <div className="size-8" />
        <div className="size-8" />
      </div>
    );
  }

  const baseBtn =
    "inline-flex cursor-pointer shrink-0 justify-center items-center size-8 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-90";
  const activeStyles =
    theme === "light"
      ? "bg-zinc-300 text-zinc-950 shadow-sm"
      : "bg-primary text-primary-foreground shadow-sm";
  const inactiveStyles =
    theme === "light"
      ? "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-primary"
      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-primary-foreground";

  const options = [
    { id: "light", icon: Sun, label: "Light Mode" },
    { id: "system", icon: Monitor, label: "System Default" },
    { id: "dark", icon: Moon, label: "Dark Mode" },
  ];

  return (
    <div
      className={`inline-flex ${theme === "light" ? "bg-white" : "bg-zinc-900"} border ${theme === "light" ? "border-zinc-400" : "border-zinc-800"} rounded-full p-1 gap-1 transition-colors`}
    >
      {options.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          onClick={() => setTheme(id)}
          className={`${baseBtn} ${theme === id ? activeStyles : inactiveStyles}`}
        >
          <Icon className="shrink-0 size-4" strokeWidth={2.5} />
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;
