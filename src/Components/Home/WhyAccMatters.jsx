"use client";
import React, { useState } from "react";
import QuestionMarkSvg from "@/components/Home/QuestionMarkSvg.jsx";

export default function WhyAccMatters() {
  const [isAA, setIsAA] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between gap-12">
      <div className="flex-1 flex flex-col gap-6 justify-center max-md:items-center">
        <h2 className="heading-2 text-secondary max-md:pb-4">
          Why accessibility matters
        </h2>
        <div className="space-y-6 text-secondary-hierarchy text-lg max-w-prose-sm">
          <p>
            96% of homepages fail to meet basic WCAG 2.1 compliance standards.
            You are likely building for a default that excludes millions of
            potential users.
          </p>
          <p>
            Inaccessibility is a business liability. Between the rising wave of
            digital litigation and the direct revenue loss caused by poor UX,
            ignoring accessibility is a financial risk.
          </p>
          <p>
            Accessibility is often treated as an afterthought or a "checkbox"
            task rather than a foundational constraint, leading to products that
            look functional but perform poorly for your entire user base.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-between">
        <div
          className={`flex-1 flex flex-col items-center justify-center transition-colors duration-300 w-full ${
            isAA ? "text-primary" : "text-primary/20 dark:text-primary/10"
          }`}
        >
          <QuestionMarkSvg />
        </div>

        <div className="flex flex-col items-center gap-2 mt-8">
          <button
            onClick={() => setIsAA(!isAA)}
            className={`flex items-center gap-3 px-5 py-2 rounded-full transition-colors duration-300 focus-visible:outline-offset-4 ${
              isAA
                ? "bg-primary text-white dark:text-zinc-900"
                : "bg-zinc-200 text-zinc-500 dark:bg-zinc-800"
            }`}
            aria-pressed={isAA}
          >
            <span className="text-2xl font-bold">AA</span>
            <div
              className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${
                isAA ? "bg-white" : "bg-zinc-400"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                  isAA ? "bg-primary translate-x-6" : "bg-white translate-x-0"
                }`}
              />
            </div>
          </button>

          <div className="text-center mt-2 text-sm font-medium flex flex-col gap-1">
            <span className="text-secondary-hierarchy">
              try pressing the button
            </span>
            {isAA ? (
              <span className="text-primary font-bold">
                Contrast: Accessible (AA)
              </span>
            ) : (
              <span className="text-red-500 font-bold">
                Contrast: not Accessible (X)
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
