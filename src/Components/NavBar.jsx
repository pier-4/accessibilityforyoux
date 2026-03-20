"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import NavbarThemeToggle from "./NavBarThemeToggle";

const navItems = [
  {
    title: "Learning",
    path: "/learning",
    subItems: [
      { title: "The Basics", path: "/learning/defining-accessibility" },
      {
        title: "Standards and regulations",
        path: "/learning/history-of-accessibility-laws",
      },
      {
        title: "UX Design principles",
        path: "/learning/psychology-ux-principles",
      },
      { title: "Case studies", path: "/learning/business-of-accessibility" },
      { title: "See all", path: "/sitemap", isAction: true },
    ],
  },
  { title: "Practical Examples", path: "/examples" },
  { title: "Tools", path: "/tools" },
  { title: "About", path: "/about" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Handle Body Scroll and Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      setOpenAccordion(null); //eslint-disable-next-line react-hooks/exhaustive-deps
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Focus Trap Logic
  const handleTabTrap = (e) => {
    if (!menuRef.current) return;
    const focusableElements = menuRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = toggleButtonRef.current; // The X button
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };

  const closeMenu = () => setTimeout(() => setIsMenuOpen(false), 200);

  const toggleAccordion = (title) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const getDesktopLinkClass = (path) => {
    return pathname === path
      ? "font-medium text-primary m-1"
      : "text-sm m-1 text-navbar-nav-foreground hover:font-semibold hover:text-primary-hover focus:text-primary-focus";
  };

  return (
    <header className="sticky top-0 w-full bg-navbar border-b border-navbar-line bg-main-bg z-50">
      <nav className="w-full mx-auto px-4 py-3 flex items-center justify-between max-w-7xl relative z-50 bg-main-bg">
        <Link
          className="flex-none text-xl font-semibold text-text-navbar focus:opacity-80"
          href="/"
          aria-label="go to homepage"
          onClick={closeMenu}
        >
          <Logo className="h-8 w-auto" />
        </Link>

        <button
          ref={toggleButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative size-9 flex justify-center items-center rounded-lg text-primary-foreground"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        <div className="hidden md:flex items-center justify-end gap-5 grow">
          <Link className={getDesktopLinkClass("/")} href="/">
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.title}
              className={getDesktopLinkClass(item.path)}
              href={item.path}
            >
              {item.title}
            </Link>
          ))}
          <NavbarThemeToggle />
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        onKeyDown={handleTabTrap}
        className={`md:hidden absolute top-full left-0 w-full h-[calc(100vh-57px)] bg-main-bg overflow-y-auto  transition-no-background  duration-200 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col w-full pb-24">
          {navItems.map((item) => {
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isOpen = openAccordion === item.title;

            return (
              <div
                key={item.title}
                className="border-b border-navbar-line flex flex-col"
              >
                <button
                  className="flex items-center justify-between px-4 py-5 w-full text-left"
                  onClick={() =>
                    hasSubItems
                      ? toggleAccordion(item.title)
                      : (window.location.href = item.path)
                  }
                >
                  <span className="text-[17px] font-medium text-primary-foreground">
                    {item.title}
                  </span>
                  {hasSubItems && (
                    <div
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <ChevronDown className="size-7 text-primary-foreground mx-1" />
                    </div>
                  )}
                </button>

                {hasSubItems && (
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col px-4 pb-5 gap-4">
                        {item.subItems.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.path}
                            onClick={closeMenu}
                            tabIndex={isOpen && isMenuOpen ? 0 : -1} // FIX 1: Tab trap prevention
                            className={`text-[15px] text-primary-foreground ${sub.isAction ? "font-bold underline mt-2" : "hover:underline"}`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="px-4 py-5 max-md:flex max-md:w-full justify-end">
            <NavbarThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
