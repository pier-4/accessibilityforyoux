"use client";
import React, { useState } from "react";

export default function WhyAccMatters() {
  const [isAA, setIsAA] = useState(false);

  return (
    <section className="w-full max-w-6xl mx-auto max-sm:px-0 px-4 pb-20 relative z-10">
      {/* Mock Browser Window */}
      <div className="rounded-t-2xl rounded-b-xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg overflow-hidden flex flex-col">
        {/* Browser Top Bar */}
        <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 flex items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400 dark:bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500"></div>
          </div>
          <div className="mx-auto bg-white dark:bg-zinc-800/50 px-24 py-1.5 rounded-md text-xs text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 hidden sm:block">
            accessibilityforyoux.org
          </div>
          <div className="w-12 hidden sm:block"></div>{" "}
          {/* Spacer to center the URL bar */}
        </div>

        {/* Application UI */}
        <div className="flex flex-col lg:flex-row min-h-[500px]">
          {/* Sidebar / Controls */}
          <div className="w-full lg:w-1/3 bg-zinc-50 dark:bg-zinc-900/30 p-8 border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                Why Accessibility Matters
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex flex-col gap-1">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Universal UX
                  </span>
                  <span className="text-md text-zinc-500 dark:text-zinc-400">
                    Designing for the full range of human ability makes products
                    better for all.
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Legal Risk
                  </span>
                  <span className="text-md text-zinc-500 dark:text-zinc-400">
                    WCAG compliance keeps your product aligned with
                    accessibility laws worldwide.
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Better Web
                  </span>
                  <span className="text-md text-zinc-500 dark:text-zinc-400">
                    Alt tags and Semantic HTML improve accessibility and SEO at
                    once.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Experience the difference
              </span>
              <button
                onClick={() => setIsAA(!isAA)}
                className="flex items-center justify-between px-4 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-offset-2"
                aria-pressed={isAA}
              >
                <span className="font-medium text-sm text-zinc-700 dark:text-zinc-300">
                  WCAG AA Legibility
                </span>
                <div
                  className={`w-10 h-5 rounded-full p-1 flex items-center transition-colors duration-300 ${
                    isAA ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-600"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-white transition-transform duration-300 ${
                      isAA ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Main Content Area (Demo) */}
          <div className="w-full lg:w-2/3 p-8 lg:p-12 flex items-center bg-white dark:bg-zinc-950">
            <div
              // if you add mx-auto below, it centers the text at all sizes, but it also makes the animations wonky and jittery whenever you transform the text from non-AA into AA
              className={`motion-safe:transition-all motion-safe:duration-500 w-full max-w-prose max-lg:pb-8 max-lg:-mt-4 ${
                isAA
                  ? "space-y-6 text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed text-left tracking-normal"
                  : "space-y-1 text-zinc-300 dark:text-zinc-800 text-sm leading-none text-justify tracking-tighter"
              }`}
            >
              <p>
                96% of homepages fail to meet basic WCAG 2.1 compliance
                standards. You are likely building for a default that excludes
                millions of potential users from interacting with your product.
              </p>
              <p>
                Inaccessibility is a business liability. Between the rising wave
                of digital litigation and the direct revenue loss caused by poor
                UX, ignoring accessibility is a financial risk that modern
                companies cannot afford.
              </p>
              <p>
                Accessibility is often treated as an afterthought or a
                &quot;checkbox&quot; task rather than a foundational constraint,
                leading to products that look functional but perform poorly for
                your entire user base. Good design is inherently inclusive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
