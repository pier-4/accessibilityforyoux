"use client";

import Link from "next/link";
import { Instagram, Github, Globe, ArrowUpCircle, Network } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass =
    "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 motion-safe:transition-colors py-1 inline-block";
  const headingClass =
    "font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6 hover:underline inline-block";
  const iconTouchClass =
    "inline-flex items-center justify-center min-w-[44px] min-h-[44px] -m-2 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity";

  return (
    <footer className="w-full bg-main-bg border-t border-navbar-line">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 flex flex-col gap-12 lg:gap-16">
        {/* Top Section: Logo + Links */}
        <div className="flex flex-col lg:flex-row w-full gap-12 justify-between">
          {/* Universal Top Logo */}
          <div className="shrink-0">
            <Logo className="h-8 w-auto" />
          </div>

          {/* Links Grid */}
          <nav className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 w-full lg:w-auto lg:flex-1 lg:max-w-[70%] px-2">
            {/* 1. Learning */}
            <div className="flex flex-col order-1">
              <Link href="/learning" className={headingClass}>
                Learning
              </Link>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/learning/defining-accessibility"
                    className={linkClass}
                  >
                    The Basics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learning/history-of-accessibility-laws"
                    className={linkClass}
                  >
                    Standards and regulations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learning/psychology-ux-principles"
                    className={linkClass}
                  >
                    UX Design principles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learning/business-of-accessibility"
                    className={linkClass}
                  >
                    Case studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Resources */}
            <div className="flex flex-col order-2">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6">
                Resources
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/tools" className={linkClass}>
                    Tools
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className={linkClass}>
                    Practical Examples
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. About & Site Actions */}
            <div className="order-3 col-span-2 lg:col-span-1 grid grid-cols-2 lg:flex lg:flex-col gap-x-4 gap-y-4">
              <div className="flex flex-col">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6">
                  About
                </h3>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link href="/about" className={linkClass}>
                      About us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col lg:mt-4">
                <div
                  className="h-6 mb-4 sm:mb-6 lg:hidden max-lg:h-0 max-lg:-mt-6"
                  aria-hidden="true"
                ></div>
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-50 hover:underline min-h-[44px] lg:min-h-0 lg:py-1"
                >
                  <ArrowUpCircle size={24} strokeWidth={2} />
                  Back to top
                </button>
                <Link
                  href="/sitemap"
                  className="inline-flex items-center gap-3 text-zinc-900 dark:text-zinc-50 transition-colors font-medium hover:underline py-1 pb-2 lg:mt-2"
                >
                  <Network size={20} strokeWidth={2} />
                  Sitemap
                </Link>
                <div className="mt-2 lg:hidden">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Universal Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 lg:pt-8 lg:border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto">
            <Link
              href="https://www.instagram.com/pierluca.design/"
              aria-label="Instagram"
              className={iconTouchClass}
            >
              <Instagram size={24} strokeWidth={2} />
            </Link>
            <Link
              href="https://github.com/pier-4/accessibilityforyoux"
              aria-label="GitHub"
              className={iconTouchClass}
            >
              <Github size={24} strokeWidth={2} />
            </Link>
            <Link
              href="https://pierlucadesign.xyz"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors ml-0 lg:ml-2"
            >
              pierlucadesign.xyz
            </Link>
          </div>

          <div className="hidden lg:flex justify-end w-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
