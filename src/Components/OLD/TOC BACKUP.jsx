"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

export default function TableOfContents({
  sectionTitle = "Section name",
  items = [],
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const pathname = usePathname();

  // Auto-open parent if a sub-item is active
  useEffect(() => {
    const newOpenSections = { ...openSections };
    items.forEach((item, index) => {
      if (item.subItems?.some((sub) => sub.href === pathname)) {
        newOpenSections[index] = true;
      }
    });
    setOpenSections(newOpenSections);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, items]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <nav
      aria-label="Table of Contents"
      className="w-full text-[16px] text-slate-900"
    >
      <div className="md:hidden border-b border-slate-200 bg-white">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="toc-content"
          className="flex w-full items-center justify-between px-4 py-4 text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
        >
          <div className="flex items-center gap-3">
            <List className="size-5" aria-hidden="true" />
            <span>Table of contents</span>
          </div>
          {isMobileOpen && (
            <X className="size-5 text-slate-500" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="toc-content"
        className={`${
          isMobileOpen ? "block" : "hidden"
        } md:block bg-slate-50 md:bg-transparent min-h-screen md:min-h-0 px-4 py-6 md:p-0`}
      >
        <div className="md:hidden mb-6">
          <Link
            href="/learning"
            className="flex items-center gap-2 text-emerald-700 font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            Return to learning home page
          </Link>
        </div>

        <h2 className="text-xl font-bold mb-4 font-rubik tracking-tight text-slate-950 ml-4">
          {sectionTitle}
        </h2>

        <ul className="flex flex-col w-full ml-4">
          {items.map((item, index) => {
            const isActive = pathname === item.href;
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isOpen = openSections[index];

            return (
              <li key={index} className="flex flex-col">
                <div className="flex items-start">
                  {hasSubItems ? (
                    <button
                      onClick={() => toggleSection(index)}
                      aria-expanded={isOpen}
                      aria-label={`Toggle ${item.title}`}
                      className="mt-2.5 mr-2 flex-shrink-0 "
                    >
                      {isOpen ? (
                        <ChevronDown className="size-4" aria-hidden="true" />
                      ) : (
                        <ChevronRight className="size-4" aria-hidden="true" />
                      )}
                    </button>
                  ) : (
                    <div className="w-6 flex-shrink-0" aria-hidden="true" />
                  )}

                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex-1 py-2 pr-4 leading-normal border-l-[3px] ${
                      isActive
                        ? "border-slate-900 bg-[#e0f2fe] font-medium"
                        : "border-transparent hover:bg-slate-100"
                    }`}
                  >
                    {item.title}
                  </Link>
                </div>

                {hasSubItems && isOpen && (
                  <ul className="flex flex-col w-full">
                    {item.subItems.map((subItem, subIndex) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <li key={subIndex} className="flex">
                          <div
                            className="w-6 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <Link
                            href={subItem.href}
                            aria-current={isSubActive ? "page" : undefined}
                            className={`flex-1 py-2.5 pl-4 pr-4 text-[15px] leading-normal border-l-[3px] ${
                              isSubActive
                                ? "border-slate-900 bg-[#dcfce7] text-slate-800"
                                : "border-transparent text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
