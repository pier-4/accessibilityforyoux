"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 bg-navbar border-b border-navbar-line">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        {/* main containter with logo and menu button */}
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold text-text-navbar  focus:opacity-80 h"
            href="/"
            aria-label="go to homepage"
          >
            <Logo className="h-8 w-auto" />
          </Link>
          {/* menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg bg-layer cursor-pointer border border-layer-line text-zinc-500 shadow-2xs hover:bg-zinc-400 hover:text-zinc-950  focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded={isMenuOpen}
              aria-controls="navbar-menu"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              {isMenuOpen ? (
                <X className="shrink-0 size-4" />
              ) : (
                <Menu className="shrink-0 size-4" />
              )}
            </button>
          </div>
        </div>
        <div
          id="navbar-menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          role="region"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              className="font-medium text-primary  "
              href="/"
              aria-current="page"
            >
              Landing
            </Link>
            <Link
              className="text-sm text-navbar-nav-foreground hover:font-semibold hover:text-primary-hover  focus:text-primary-focus"
              href="/account"
            >
              Account
            </Link>
            <Link
              className="text-sm text-navbar-nav-foreground  hover:font-semibold hover:text-primary-hover  focus:text-primary-focus"
              href="/work"
            >
              Work
            </Link>
            <Link
              className="text-sm text-navbar-nav-foreground hover:font-semibold hover:text-primary-hover  focus:text-primary-focus"
              href="/blog"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
