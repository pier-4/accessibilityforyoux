"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavbarThemeToggle from "./NavBarThemeToggle";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Scroll to top on route change, since this is a single-page app and the scroll position would otherwise be preserved (nextjs bug)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return isActive
      ? "font-medium text-primary m-1"
      : "text-sm m-1 text-navbar-nav-foreground hover:font-semibold hover:text-primary-hover focus:text-primary-focus";
  };

  // close menu with a setTimeout to allow the link's onClick to register first (for better accessibility)
  const closeMenu = () => setTimeout(() => setIsMenuOpen(false), 200);

  return (
    <header className="sticky top-0 flex flex-wrap md:justify-start md:flex-nowrap w-full py-3 bg-navbar border-b border-navbar-line bg-main-bg z-10 ">
      <nav className="w-full mx-auto px-4 md:flex md:items-center md:justify-between max-w-7xl">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold text-text-navbar focus:opacity-80"
            href="/"
            aria-label="go to homepage"
            onClick={closeMenu} // also close if logo is clicked on mobile
          >
            <Logo className="h-8 w-auto" />
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg bg-layer cursor-pointer border border-layer-line text-zinc-500 shadow-2xs hover:bg-zinc-400 hover:text-zinc-950 focus:bg-layer-focus"
            >
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
          className={`${isMenuOpen ? "block min-h-screen" : "hidden"} overflow-hidden transition-all duration-300 basis-full grow md:block`}
        >
          <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5">
            <Link className={getLinkClass("/")} href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link
              className={getLinkClass("/learning")}
              href="/learning"
              onClick={closeMenu}
            >
              Learning
            </Link>
            <Link
              className={getLinkClass("/examples")}
              href="/examples"
              onClick={closeMenu}
            >
              Practical Examples
            </Link>
            <Link
              className={getLinkClass("/tools")}
              href="/tools"
              onClick={closeMenu}
            >
              Tools
            </Link>
            <Link
              className={getLinkClass("/about")}
              href="/about"
              onClick={closeMenu}
            >
              About
            </Link>

            <NavbarThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
