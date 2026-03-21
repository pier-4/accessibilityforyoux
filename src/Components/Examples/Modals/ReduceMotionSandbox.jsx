"use client";

import React, { useState } from "react";
import { Activity, PowerOff } from "lucide-react";

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

      <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        <div className="p-8 sm:p-24 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center border-b border-zinc-200 dark:border-zinc-800 h-64 overflow-hidden relative">
          {/* Animated Object */}
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

        <div className="p-6 bg-white dark:bg-zinc-900 flex justify-center">
          <button
            onClick={() => setReduceMotion(!reduceMotion)}
            className={`flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
              reduceMotion
                ? "bg-green-100 border-green-200 text-green-800 dark:bg-green-900/40 dark:border-green-800 dark:text-green-400"
                : "bg-red-100 border-red-200 text-red-800 dark:bg-red-900/40 dark:border-red-800 dark:text-red-400"
            }`}
          >
            {reduceMotion ? <PowerOff size={18} /> : <Activity size={18} />}
            {reduceMotion ? "Reduced Motion: ON" : "Reduced Motion: OFF"}
          </button>
        </div>
      </div>
    </div>
  );
}
