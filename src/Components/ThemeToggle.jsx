"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "system";
    return localStorage.getItem("theme") || "system";
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); //eslint-disable-next-line react-hooks/exhaustive-deps
    const saved = localStorage.getItem("theme") || "system";
    setTheme(saved);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const root = window.document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, isClient]);

  if (!isClient) {
    return (
      <div className="inline-flex bg-main-bg border border-primary-outline rounded-full p-1 gap-1 invisible">
        <div className="size-8" />
        <div className="size-8" />
        <div className="size-8" />
      </div>
    );
  }

  const baseBtn =
    "inline-flex cursor-pointer shrink-0 justify-center items-center size-8 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-90";

  const options = [
    { id: "light", icon: Sun, label: "Light Mode" },
    { id: "system", icon: Monitor, label: "System Default" },
    { id: "dark", icon: Moon, label: "Dark Mode" },
  ];

  return (
    <div className="inline-flex bg-main-bg border border-primary-outline rounded-full p-1 gap-1 transition-colors">
      {options.map(({ id, icon: Icon, label }) => {
        const isActive = theme === id;
        return (
          <button
            key={id}
            type="button"
            aria-label={label}
            onClick={() => setTheme(id)}
            className={`${baseBtn} ${
              isActive
                ? "bg-toggle-active-bg text-toggle-active-text shadow-sm"
                : "bg-toggle-inactive-bg text-toggle-inactive-text hover:bg-toggle-hover-bg hover:text-toggle-hover-text"
            }`}
          >
            <Icon className="shrink-0 size-4" strokeWidth={2.5} />
          </button>
        );
      })}
    </div>
  );
}

export default ThemeToggle;
