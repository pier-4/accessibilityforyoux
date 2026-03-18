"use client";

import Link from "next/link";
import { Instagram, Github, Globe, ArrowUpCircle } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass =
    "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-1 inline-block";
  const headingClass =
    "font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6 hover:underline inline-block";
  const iconTouchClass =
    "inline-flex items-center justify-center min-w-[44px] min-h-[44px] -m-2 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity";

  return (
    <footer className="w-full bg-main-bg  border-t border-navbar-line">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 flex flex-col gap-12 lg:gap-16">
        {/* Universal Top Logo */}
        <div className="shrink-0 w-48">
          <Logo className="h-8 lg:h-10 w-auto" />
        </div>

        {/* Links Grid */}
        <nav className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 w-full">
          {/* Learning */}
          <div className="flex flex-col order-1 lg:order-1">
            <Link href="/learning" className={headingClass}>
              Learning
            </Link>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className={linkClass}>
                  The Basics
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Standards and regulations
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  UX Design principles
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Case studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="flex flex-col order-3 lg:order-2">
            <Link href="/tools" className={headingClass}>
              Tools
            </Link>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className={linkClass}>
                  Tool 1
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Tool 2
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Tool 3
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Tool 4
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Tool 5
                </Link>
              </li>
            </ul>
          </div>

          {/* Practical Examples */}
          <div className="flex flex-col order-2 lg:order-3">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6">
              Practical Examples
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className={linkClass}>
                  Example 1
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Example 2
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Example 3
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Example 4
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Example 5
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col order-4 lg:order-4">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6">
              About
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className={linkClass}>
                  About us
                </Link>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 mt-8 font-medium text-zinc-900 dark:text-zinc-50 hover:underline min-h-[44px]"
            >
              <ArrowUpCircle size={24} strokeWidth={2} />
              Back to top
            </button>

            {/* Mobile Theme Toggle */}
            <div className="mt-4 lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Universal Bottom Bar: Socials & Desktop Theme Toggle */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 lg:pt-8 lg:border-t border-zinc-200 dark:border-zinc-800">
          {/* Socials & Website Link */}
          <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto">
            <Link href="#" aria-label="Instagram" className={iconTouchClass}>
              <Instagram size={24} strokeWidth={2} />
            </Link>
            <Link
              href="https://github.com/pier-4?tab=overview"
              aria-label="GitHub"
              className={iconTouchClass}
            >
              <Github size={24} strokeWidth={2} />
            </Link>
            <Link href="#" aria-label="Website" className={iconTouchClass}>
              <Globe size={24} strokeWidth={2} />
            </Link>
            <Link
              href="https://pierlucadesign.xyz"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors ml-0 lg:ml-2"
            >
              pierlucadesign.xyz
            </Link>
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden lg:flex justify-end w-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
