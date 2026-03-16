"use client";
import React from "react";
import Link from "next/link";

function PillButton({
  children,
  variant = "primary",
  fill = "full",
  href,
  className = "",
  ...props
}) {
  const base =
    "py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-full cursor-pointer transition-all active:scale-95 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none active:bg-opacity-80";

  const styles = {
    primary: {
      full: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active dark:text-zinc-900",
      hollow:
        "bg-transparent text-primary border-[2px] border-primary-line hover:bg-primary/10 active:bg-primary/20",
    },
    secondary: {
      full: "bg-secondary text-primary-foreground hover:bg-secondary-hover active:bg-secondary-active dark:bg-primary dark:text-zinc-900 dark:hover:bg-primary-hover",
      hollow:
        "bg-transparent text-secondary border-[2px] border-secondary-line hover:bg-secondary/10 active:bg-secondary/20",
    },
  };

  const selectedClass = `${base} ${styles[variant][fill]} ${className}`;

  // If href exists, render as Next.js Link
  if (href) {
    return (
      <Link href={href} className={selectedClass} {...props}>
        {children || "Pill Link"}
      </Link>
    );
  }

  // Otherwise, render as standard Button
  return (
    <button type="button" className={selectedClass} {...props}>
      {children || "Pill Button"}
    </button>
  );
}

export default PillButton;
