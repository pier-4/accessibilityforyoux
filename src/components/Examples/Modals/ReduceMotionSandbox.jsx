"use client";

import React, { useState } from "react";

export default function ReducedMotionSandbox() {
  const [reduceMotion, setReduceMotion] = useState(false);

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        Reduced Motion
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Animations can trigger nausea or dizziness for users with vestibular
        disorders. Respect the OS-level <code>prefers-reduced-motion</code>{" "}
        setting by replacing heavy animations with subtle crossfades or static
        states.
      </p>

      <div className="relative isolate w-full rounded-[40px] overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        {/* Preview Panel */}
        <div className="p-8 sm:p-24 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center border-b border-zinc-200 dark:border-zinc-800 h-64 overflow-hidden relative">
          <div
            className={`w-24 h-24 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-white ${
              reduceMotion
                ? "transition-opacity duration-500 opacity-90"
                : "animate-[spin_3s_linear_infinite] opacity-100"
            }`}
          >
            <div
              className={`w-12 h-12 bg-white/20 rounded-full ${!reduceMotion && "animate-ping"}`}
            ></div>
          </div>

          <div className="absolute bottom-6 text-sm font-mono text-zinc-500">
            CSS state: {reduceMotion ? "Static / Fade" : "Spinning + Pulsing"}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-8 flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-900">
          <span
            id="motion-label"
            className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300"
          >
            System Preference
          </span>
          <button
            role="switch"
            aria-checked={reduceMotion}
            aria-labelledby="motion-label"
            onClick={() => setReduceMotion(!reduceMotion)}
            className={`group flex items-center gap-3 py-2.5 px-6 rounded-full font-semibold border transition-all min-w-[220px] justify-center ${
              reduceMotion
                ? "btn-brand"
                : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
            }`}
          >
            <div
              className={`relative w-8 h-4 rounded-full transition-colors ${
                reduceMotion ? "bg-indigo-300" : "bg-zinc-300 dark:bg-zinc-600"
              }`}
              aria-hidden="true"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${
                  reduceMotion ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-base font-medium">
              {reduceMotion ? "Reduced Motion" : "Full Animation"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
