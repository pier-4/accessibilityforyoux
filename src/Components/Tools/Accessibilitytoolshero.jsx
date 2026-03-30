import React from "react";

const audits = [
  { status: "pass", text: "All images have descriptive alt text" },
  { status: "pass", text: "Form elements have associated labels" },
  { status: "warn", text: "3 buttons do not have an accessible name" },
  { status: "fail", text: "Color contrast ratio 2.8:1 — fails WCAG AA" },
];

function ScoreRing({ score, label, color }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const filled = (score / 100) * circ * 0.85;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width="54" height="54" viewBox="0 0 54 54">
        <circle
          cx="27"
          cy="27"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-zinc-200 dark:text-zinc-700"
        />
        <circle
          cx="27"
          cy="27"
          r={r}
          fill="none"
          strokeWidth="4"
          stroke={color}
          strokeLinecap="round"
          strokeDasharray={`${filled} ${circ}`}
          transform="rotate(-90 27 27)"
        />
        <text
          x="27"
          y="27"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="13"
          fontWeight="500"
          fill="currentColor"
          className="fill-zinc-800 dark:fill-zinc-100"
        >
          {score}
        </text>
      </svg>
      <span className="text-sm text-zinc-400 dark:text-zinc-500 text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

export default function LighthouseIllustration() {
  return (
    <div className="w-full max-w-md rounded-xl border dark:border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden flex flex-col">
      {/* Browser Top Bar */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 flex items-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-amber-400 dark:bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500" />
        </div>
        <div className="mx-auto bg-white dark:bg-zinc-800/50 px-12 py-1 rounded-md text-[10px] text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
          www......com
        </div>
        <div className="w-12" /> {/* Spacer to balance dots */}
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <div>
          <p className="text-md font-medium text-zinc-500 dark:text-zinc-400">
            Lighthouse · Accessibility report
          </p>
          <p className="text-[12px] text-zinc-400 dark:text-zinc-600 mt-0.5">
            Generated Mon, 30 Mar 2026
          </p>
        </div>

        {/* Updated Grid Container */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-4 auto-rows-fr place-items-center">
          <ScoreRing score={92} label="Accessibility" color="#27C93F" />
          <ScoreRing score={85} label="Performance" color="#27C93F" />
          <ScoreRing score={67} label="SEO" color="#FFBD2E" />
          <ScoreRing score={100} label="Best practices" color="#27C93F" />
        </div>
      </div>
    </div>
  );
}
