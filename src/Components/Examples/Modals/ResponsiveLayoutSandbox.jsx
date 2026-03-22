"use client";

import React, { useState } from "react";
import { Layout, Smartphone, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ResponsiveLayoutSandbox() {
  const [containerWidth, setContainerWidth] = useState(100);

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        Reflow & Flexbox
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Users zoom in up to 400%, which effectively reduces the viewport width.
        Layouts must wrap (reflow) dynamically instead of forcing horizontal
        scrolling.
      </p>

      <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8 bg-zinc-50 dark:bg-zinc-950">
        <div className="p-4 sm:p-12 flex flex-col items-center border-b border-zinc-200 dark:border-zinc-800 overflow-hidden w-full">
          <div
            style={{ width: `${containerWidth}%` }}
            className="min-w-[140px] max-w-full transition-all duration-300 ease-out border-2 border-dashed border-zinc-300 dark:border-zinc-700 p-3 sm:p-4 rounded-2xl mx-auto"
          >
            {/* Bad Layout - Fixed/No Wrap */}
            <div className="mb-6 sm:mb-8 w-full">
              <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400 font-semibold text-xs sm:text-sm">
                <AlertTriangle size={16} className="shrink-0" />{" "}
                <span className="truncate">Fixed Layout (Scrolls)</span>
              </div>
              <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 custom-scrollbar bg-red-50 dark:bg-red-950/20 p-2 rounded-xl w-full">
                {[1, 2, 3].map((i) => (
                  <div
                    key={`bad-${i}`}
                    className="w-[90px] sm:w-[120px] shrink-0 h-16 sm:h-20 bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center justify-center font-mono text-xs sm:text-sm text-zinc-600"
                  >
                    Item {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Good Layout - Flex Wrap / Auto Grid */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-3 text-green-600 dark:text-green-400 font-semibold text-xs sm:text-sm">
                <CheckCircle2 size={16} className="shrink-0" />{" "}
                <span className="truncate">Responsive Layout (Wraps)</span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 bg-green-50 dark:bg-green-950/20 p-2 rounded-xl w-full">
                {[1, 2, 3].map((i) => (
                  <div
                    key={`good-${i}`}
                    className="flex-1 min-w-[70px] sm:min-w-[100px] h-16 sm:h-20 bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center justify-center font-mono text-xs sm:text-sm text-zinc-600"
                  >
                    Item {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls bar */}
        <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 shrink-0">
            <Layout size={16} />
            Width: {containerWidth}%
          </label>
          <div className="flex items-center gap-2 sm:gap-3 w-full max-w-sm">
            <Smartphone size={16} className="text-zinc-400 shrink-0" />
            <input
              type="range"
              min="35"
              max="100"
              value={containerWidth}
              onChange={(e) => setContainerWidth(Number(e.target.value))}
              className="w-full accent-blue-600"
              aria-label="Resize container"
            />
            <Layout size={18} className="text-zinc-400 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
