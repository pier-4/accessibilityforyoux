"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

// --- Pure math, no side effects ---

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) }
    : null;
}

function luminance({ r, g, b }) {
  return [r, g, b]
    .map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    })
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
}

function contrastRatio(hex1, hex2) {
  const l1 = luminance(hexToRgb(hex1));
  const l2 = luminance(hexToRgb(hex2));
  const [light, dark] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (light + 0.05) / (dark + 0.05);
}

// --- Curated pairs covering the interesting range ---

const PAIRS = [
  {
    label: "Light grey on white",
    text: "#aaaaaa",
    bg: "#ffffff",
    note: "Decorative only — fails all text levels",
  },
  {
    label: "Yellow on white",
    text: "#e6b800",
    bg: "#ffffff",
    note: "Common mistake on light backgrounds",
  },
  {
    label: "Blue on white",
    text: "#0063cc",
    bg: "#ffffff",
    note: "Typical link colour — passes AA",
  },
  {
    label: "Black on yellow",
    text: "#000000",
    bg: "#ffd600",
    note: "High-vis warning palette — passes AAA",
  },
  {
    label: "White on black",
    text: "#ffffff",
    bg: "#000000",
    note: "Maximum contrast",
  },
  {
    label: "black on white",
    text: "#000000",
    bg: "#ffffff",
    note: "Maximum contrast",
  },
  {
    label: "White on mid-blue",
    text: "#ffffff",
    bg: "#3b7dd8",
    note: "Common UI button — just passes AA",
  },
];

// --- Badge ---

function Badge({ passes, label }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
        passes
          ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
          : "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
      }`}
    >
      {passes ? (
        <Check size={11} strokeWidth={3} />
      ) : (
        <X size={11} strokeWidth={3} />
      )}
      {label}
    </span>
  );
}

// --- Card ---

function PairCard({ pair, active, onClick }) {
  const ratio = contrastRatio(pair.text, pair.bg);
  const passAA = ratio >= 4.5;
  const passAAA = ratio >= 7.0;
  const passLarge = ratio >= 3.0;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl border transition-all duration-200 overflow-hidden   focus-visible:ring-offset-2  ${
        active
          ? "border-zinc-900 dark:border-zinc-100 shadow-md scale-[1.01]"
          : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
      }`}
    >
      {/* Preview strip */}
      <div
        className="px-5 py-6 flex items-end justify-between gap-4"
        style={{ backgroundColor: pair.bg, color: pair.text }}
      >
        <span className="text-2xl font-bold leading-none tracking-tight">
          Aa
        </span>
        <span className="text-xs font-mono opacity-70">
          {ratio.toFixed(1)}:1
        </span>
      </div>

      {/* Meta */}
      <div className="px-4 py-3 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-1 truncate">
          {pair.label}
        </p>
        <div className="flex flex-wrap gap-1">
          <Badge passes={passLarge} label="AA large" />
          <Badge passes={passAA} label="AA" />
          <Badge passes={passAAA} label="AAA" />
        </div>
      </div>
    </button>
  );
}

// --- Detail panel ---

function DetailPanel({ pair }) {
  const ratio = contrastRatio(pair.text, pair.bg);
  const passAA = ratio >= 4.5;
  const passAAA = ratio >= 7.0;
  const passLarge = ratio >= 3.0;

  return (
    <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800">
      {/* Big preview */}
      <div
        className="px-8 pt-10 pb-8"
        style={{ backgroundColor: pair.bg, color: pair.text }}
      >
        <p className="text-4xl font-bold leading-tight mb-3">
          The quick brown fox
        </p>
        <p className="text-base leading-relaxed opacity-90 max-w-md">
          Lorem ipsum dolor sit amet consectetur. Vitae pellentesque vitae
          adipiscing pharetra. Nibh eget eu diam consequat eleifend fringilla.
        </p>
        <p className="text-sm leading-relaxed opacity-70 mt-3 max-w-md">
          Small body text at 14px — the hardest level to pass.
        </p>
      </div>

      {/* Stats bar */}
      <div className="px-8 py-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-4 rounded-b-4xl">
        <span className="font-mono text-xl font-bold text-zinc-900 dark:text-zinc-100">
          {ratio.toFixed(2)}:1
        </span>
        <div className="flex flex-wrap gap-2">
          <Badge passes={passLarge} label="AA large text" />
          <Badge passes={passAA} label="AA normal text" />
          <Badge passes={passAAA} label="AAA" />
        </div>
        <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400 italic max-w-[200px] text-right">
          {pair.note}
        </span>
      </div>
    </div>
  );
}

// --- Root ---

export default function TextContrastSandbox() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        Text contrast
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        WCAG defines three thresholds: <strong>3:1</strong> for large text and
        UI components, <strong>4.5:1</strong> (AA) for normal body text, and{" "}
        <strong>7:1</strong> (AAA) for enhanced readability. Pick a pair below
        to see how real colour choices stack up.
      </p>

      {/* Detail panel */}
      <div className="mb-8">
        <DetailPanel pair={PAIRS[selected]} />
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {PAIRS.map((pair, i) => (
          <PairCard
            key={pair.label}
            pair={pair}
            active={selected === i}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>
    </div>
  );
}
