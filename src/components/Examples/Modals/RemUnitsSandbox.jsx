"use client";

import React, { useState } from "react";
import { Type, Maximize2 } from "lucide-react";

export default function RemUnitsSandbox() {
  const [rootSize, setRootSize] = useState(16); // Default browser font size

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        REM vs Pixels
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Visually impaired users often increase their browser&apos;s default font
        size. Using <strong>rem</strong> ensures your text scales with their
        settings. <strong>px</strong> ignores these settings.
      </p>

      <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        <div className="flex flex-col md:flex-row bg-zinc-50 dark:bg-zinc-950 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
          {/* PX Example */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center min-h-[250px]">
            <span className="text-sm font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full mb-6">
              Pixel (Rigid)
            </span>
            <p
              style={{ fontSize: "16px" }}
              className="text-zinc-900 dark:text-zinc-100 font-medium text-center transition-none"
            >
              The quick brown fox
            </p>
            <span className="text-xs text-zinc-500 font-mono mt-4">
              font-size: 16px
            </span>
          </div>

          {/* REM Example */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center min-h-[250px]">
            <span className="text-sm font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full mb-6">
              REM (Accessible)
            </span>
            {/* Simulating 1rem by multiplying rootSize * 1 */}
            <p
              style={{ fontSize: `${rootSize}px` }}
              className="text-zinc-900 dark:text-zinc-100 font-medium text-center transition-all duration-200"
            >
              The quick brown fox
            </p>
            <span className="text-xs text-zinc-500 font-mono mt-4">
              font-size: 1rem
            </span>
          </div>
        </div>

        {/* Controls bar */}
        <div className="p-6 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center gap-4">
          <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <Maximize2 size={16} />
            Simulate Browser Default Size: {rootSize}px
          </label>
          <input
            type="range"
            min="12"
            max="32"
            value={rootSize}
            onChange={(e) => setRootSize(Number(e.target.value))}
            className="w-full max-w-md accent-blue-600"
            aria-label="Simulate browser default font size"
          />
        </div>
      </div>
    </div>
  );
}
