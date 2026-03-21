"use client";

import React, { useState } from "react";
import { Maximize, Check } from "lucide-react";

const TARGETS = [
  { id: "12", size: 12, label: "12×12", desc: "Too small" },
  { id: "24", size: 24, label: "24×24", desc: "WCAG AA" },
  { id: "44", size: 44, label: "44×44", desc: "iOS / AAA" },
  { id: "48", size: 48, label: "48×48", desc: "Material" },
];

export default function TouchAreaSandbox() {
  const [showTouchArea, setShowTouchArea] = useState(false);
  const [clickedTarget, setClickedTarget] = useState(null);

  const handleClick = (id) => {
    setClickedTarget(id);
    setTimeout(() => setClickedTarget(null), 600);
  };

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        Accessible Touch Targets
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Interactive elements must be large enough to tap easily without hitting
        adjacent items.
      </p>

      <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        {/* Interactive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-zinc-50 dark:bg-zinc-950 divide-x divide-y md:divide-y-0 divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
          {TARGETS.map(({ id, size, label, desc }) => {
            const isClicked = clickedTarget === id;

            return (
              <div
                key={id}
                className="flex flex-col items-center justify-center p-8 h-48 relative"
              >
                <span className="text-xs font-mono text-zinc-500 mb-6 absolute top-4">
                  {label} - {desc}
                </span>

                <button
                  onClick={() => handleClick(id)}
                  style={{ width: `${size}px`, height: `${size}px` }}
                  className={`flex items-center justify-center transition-all ${
                    showTouchArea
                      ? "bg-red-200/50 border border-red-400 border-dashed dark:bg-red-900/30 dark:border-red-500/50"
                      : "bg-transparent"
                  } ${
                    isClicked
                      ? "!bg-green-500 !border-green-600 !text-white scale-110"
                      : "text-zinc-900 dark:text-zinc-100"
                  }`}
                  aria-label={`Test button ${label}`}
                >
                  {isClicked ? (
                    <Check size={Math.min(size * 0.6, 24)} strokeWidth={3} />
                  ) : (
                    <div
                      className={`rounded-full bg-current ${size <= 12 ? "w-1.5 h-1.5" : "w-2 h-2"}`}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Controls bar */}
        <div className="p-6 bg-white dark:bg-zinc-900 flex justify-center">
          <button
            onClick={() => setShowTouchArea(!showTouchArea)}
            className={`flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
              showTouchArea
                ? "bg-zinc-100 border-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
                : "bg-red-100 border-red-200 text-red-800 dark:bg-red-900/40 dark:border-red-800 dark:text-red-400"
            }`}
          >
            <Maximize size={18} />
            {showTouchArea ? "Touch Area: Visible" : "Touch Area: Hidden"}
          </button>
        </div>
      </div>
    </div>
  );
}
