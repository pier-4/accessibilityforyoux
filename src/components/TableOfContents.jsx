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
    <nav aria-label="Table of Contents" className="w-full relative">
      {/* Mobile Toggle Button (Hidden on Desktop) */}
      <div className="lg:hidden max-lg:border-b border-navbar-line  py-2 px-4">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          className="motion-safe:active:scale-98 hover:scale-100! hover:opacity-65 flex w-full items-center justify-between py-2 text-left font-semibold text-primary-foreground "
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
        className={`${isMobileOpen ? "block" : "hidden"} lg:block pt-4 max-lg:pt-8 pb-12 lg:py-8 px-6 max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:bg-main-bg max-lg:shadow-lg max-lg:border-b border-navbar-line max-lg:z-50`}
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
                className={`block text-sm motion-safe:transition-colors hover:text-primary ${
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
          <div className="  mt-8 max-lg:mt-4 pt-6  border-slate-200 dark:border-zinc-800">
            <h4 className="text-sm uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              Other Sections
            </h4>
            <ul className="flex flex-col gap-3">
              {otherSections.map((section, idx) => (
                <li key={idx}>
                  <Link
                    href={section.href}
                    className="block text-sm text-zinc-500 dark:text-zinc-400 hover:text-primary motion-safe:transition-colors truncate"
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
