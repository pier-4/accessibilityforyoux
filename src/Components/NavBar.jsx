"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //if menu is open, prevent body scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup to restore scrolling if the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 flex flex-wrap md:justify-start md:flex-nowrap w-full py-3 bg-navbar border-b border-navbar-line bg-main-bg z-10 ">
      <nav className="w-full mx-auto px-4 md:flex md:items-center md:justify-between max-w-7xl">
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
          <div className="md:hidden">
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
            isMenuOpen ? "block min-h-screen" : "hidden"
          }  overflow-hidden transition-all duration-300 basis-full grow md:block`}
          role="region"
        >
          <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5">
            <ThemeToggle />
            <Link
              className="font-medium text-primary  "
              href="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="text-sm text-navbar-nav-foreground hover:font-semibold hover:text-primary-hover  focus:text-primary-focus"
              href="/learning"
            >
              Learning
            </Link>
            <Link
              className="text-sm text-navbar-nav-foreground  hover:font-semibold hover:text-primary-hover  focus:text-primary-focus"
              href="/examples"
            >
              Practical Examples
            </Link>
            <Link
              className="text-sm text-navbar-nav-foreground hover:font-semibold hover:text-primary-hover  focus:text-primary-focus"
              href="/tools"
            >
              Tools
            </Link>
            <Link
              className="text-sm text-navbar-nav-foreground hover:font-semibold hover:text-primary-hover  focus:text-primary-focus"
              href="/about"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
