// VIEW: A dumb UI component. It receives a pre-filtered array of links from the page controller and renders the sidebar navigation, highlighting the currently active page. Collapses on mobile.
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { List, ChevronDown, X } from "lucide-react";

export default function TableOfContents({
  sectionTitle,
  items,
  otherSections,
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav aria-label="Table of Contents" className="w-full">
      {/* Mobile Toggle Button (Hidden on Desktop) */}
      <div className="md:hidden max-md:border-b border-navbar-line mb-6 px-4">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          className="flex w-full items-center justify-between py-4  text-left font-semibold text-primary-foreground focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <List className="size-5" />
            <span>Table of contents</span>
          </div>
          <X
            className={`size-6 transition-all duration-200 mx-1 ${
              isMobileOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75 pointer-events-none"
            }`}
          />
          {/* <ChevronDown
            className={`size-6 transition-transform duration-300 mx-1 ${isMobileOpen ? "rotate-180" : ""}`}
          /> */}
        </button>
      </div>

      {/* TOC Content (Toggled on Mobile, always visible on Desktop) */}
      <div
        // classnames for mobile toggle, max-md: is the breakpoint where it switches to mobile behavior
        className={`${isMobileOpen ? "block" : "hidden"} md:block pb-8 md:py-8 px-6 max-md:border-b border-navbar-line max-md:mb-8`}
      >
        {/* Hide the section title on mobile since the button acts as the header */}
        <h3 className="font-semibold text-lg text-primary-foreground mb-4 block">
          {sectionTitle}
        </h3>

        <ul className="flex flex-col gap-3 border-l-2 border-slate-200 dark:border-zinc-800 ">
          {items.map((item, index) => (
            <li key={index} className="relative">
              <Link
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block text-sm transition-colors hover:text-primary ${
                  item.isChild ? "pl-8" : "pl-4" // Extra padding if it's a sub-article
                } ${
                  item.isActive
                    ? "font-semibold text-primary"
                    : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                {item.title}
              </Link>

              {item.isActive && (
                <div
                  className={`absolute top-0 h-full w-[2px] bg-primary rounded-r-md ${
                    item.isChild ? "left-[14px]" : "left-[-2px]" // Align indicator with the text
                  }`}
                />
              )}
            </li>
          ))}
        </ul>
        {/* Other Sections List */}
        {otherSections && otherSections.length > 0 && (
          <div className="mt-auto pt-6  border-slate-200 dark:border-zinc-800">
            <h4 className="text-sm uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              Other Sections
            </h4>
            <ul className="flex flex-col gap-3">
              {otherSections.map((section, idx) => (
                <li key={idx}>
                  <Link
                    href={section.href}
                    className="block text-sm text-zinc-500 hover:text-primary transition-colors truncate"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
