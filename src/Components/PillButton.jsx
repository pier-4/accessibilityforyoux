"use client";
import React from "react";
import Link from "next/link";

function PillButton({
  children,
  variant = "primary",
  fill = "full",
  href,
  className = "",
  target = "_self",
  ...props
}) {
  const base =
    "py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-full cursor-pointer transition-no-outline    active:scale-95  disabled:opacity-50 disabled:pointer-events-none active:bg-opacity-80 focus:ring-1 focus:outline-4 hover:scale-102 ";

  const styles = {
    primary: {
      full: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active dark:text-zinc-900",
      hollow:
        "bg-transparent text-primary border-[2px] border-primary-line hover:bg-primary/10 active:bg-primary/20",
    },
    secondary: {
      full: " bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active dark:bg-transparent dark:text-primary-foreground dark:hover:bg-secondary/10 dark:active:bg-secondary/20 dark:border-2",
      hollow:
        "bg-transparent text-secondary border-[2px] border-secondary-line hover:bg-secondary/10 active:bg-secondary/20",
    },
  };

  const selectedClass = `${base} ${styles[variant][fill]} ${className}`;

  // If href exists, render as Next.js Link
  if (href) {
    return (
      <Link href={href} target={target} className={selectedClass} {...props}>
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
