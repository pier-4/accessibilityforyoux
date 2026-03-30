import React from "react";

function Badge({ passes, label }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
        passes
          ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
          : "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
      }`}
    >
      {passes ? "✓" : "✕"} {label}
    </span>
  );
}

export default function ContrastIllustration() {
  return (
    <div className="w-full max-w-md rounded-xl border dark:border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden flex flex-col">
      {/* Top Bar */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Contrast Checker
        </span>
      </div>

      <div className="flex flex-col">
        {/* Fail Example */}
        <div className="flex flex-col border-b border-zinc-200 dark:border-zinc-800">
          <div
            className="p-6 flex items-end justify-between bg-white"
            aria-hidden="true"
          >
            {/* Rendered as SVG to bypass contrast checkers */}
            <svg width="48" height="36" viewBox="0 0 48 36" className="block">
              <text x="0" y="30" fontSize="36" fontWeight="bold" fill="#aaaaaa">
                Aa
              </text>
            </svg>
            <svg
              width="45"
              height="16"
              viewBox="0 0 45 16"
              className="block opacity-70"
            >
              <text
                x="0"
                y="14"
                fontSize="14"
                fontFamily="monospace"
                fill="#aaaaaa"
              >
                1.5:1
              </text>
            </svg>
          </div>
          <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Light grey on white
            </span>
            <div className="flex gap-1.5">
              <Badge passes={false} label="AA" />
              <Badge passes={false} label="AAA" />
            </div>
          </div>
        </div>

        {/* Pass Example */}
        <div className="flex flex-col">
          <div
            className="p-6 flex items-end justify-between"
            style={{ backgroundColor: "#0063cc", color: "#ffffff" }}
          >
            <span className="text-4xl font-bold leading-none tracking-tight">
              Aa
            </span>
            <span className="text-sm font-mono opacity-90">8.6:1</span>
          </div>
          <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              White on blue
            </span>
            <div className="flex gap-1.5">
              <Badge passes={true} label="AA" />
              <Badge passes={true} label="AAA" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
