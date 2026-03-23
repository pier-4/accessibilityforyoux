"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

// Adjust this variable to change the button size (e.g., "size-8", "w-[36px] h-[36px]")
const BUTTON_SIZE = "size-8 max-md:size-12";

/** Resolve the initial theme: use saved value, or fall back to system preference. */
function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function NavbarThemeToggle() {
  const [theme, setTheme] = useState("light"); // safe SSR default
  const [isClient, setIsClient] = useState(false);

  // Hydrate on mount
  useEffect(() => {
    setIsClient(true); //eslint-disable-next-line react-hooks/exhaustive-deps
    setTheme(getInitialTheme());
  }, []);

  // Sync when another toggle on the page changes the theme
  useEffect(() => {
    const syncTheme = () =>
      setTheme(localStorage.getItem("theme") || getInitialTheme());
    window.addEventListener("theme-sync", syncTheme);
    return () => window.removeEventListener("theme-sync", syncTheme);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    if (!isClient) return;
    const root = window.document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme, isClient]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("theme-sync"));
  };

  const btnClasses = `inline-flex justify-center items-center shrink-0 ${BUTTON_SIZE} border border-secondary-outline rounded-full transition-all duration-200 focus:outline-none m-1 focus:ring-2 focus:ring-primary/50 active:scale-90 bg-toggle-inactive-bg text-toggle-inactive-text hover:bg-toggle-hover-bg hover:text-toggle-hover-text`;

  if (!isClient) {
    return <div className={`${btnClasses} invisible`} aria-hidden="true" />;
  }

  // Icon shows what you're switching TO
  const NextIcon = theme === "dark" ? Sun : Moon;
  const nextLabel = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextLabel} mode`}
      onClick={toggleTheme}
      className={btnClasses}
    >
      <NextIcon className="shrink-0 size-4" strokeWidth={2.5} />
    </button>
  );
}
