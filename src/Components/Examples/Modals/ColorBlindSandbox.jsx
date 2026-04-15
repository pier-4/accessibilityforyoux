"use client";

import React, { useState } from "react";
import { AlertCircle, Eye, EyeOff, Check, X } from "lucide-react";

export default function ColorBlindSandbox() {
  const [isColorBlind, setIsColorBlind] = useState(false);
  const [isAccessible, setIsAccessible] = useState(false);

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        Color Independence
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Never rely on color alone to convey meaning. Use icons, patterns, or
        text labels to ensure information remains visible to users with color
        vision deficiencies.
      </p>

      <div className="relative isolate w-full rounded-[40px] overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8 bg-white dark:bg-zinc-900">
        {/* Preview Panel */}
        <div
          className="p-8 sm:p-16 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center border-b border-zinc-200 dark:border-zinc-800 transition-all duration-500"
          style={{ filter: isColorBlind ? "grayscale(100%)" : "none" }}
          aria-hidden={isColorBlind ? "true" : "false"}
        >
          <div className="w-full max-w-sm flex flex-col gap-2">
            <label
              htmlFor="demo-email-input"
              className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 ml-1"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                id="demo-email-input"
                type="text"
                defaultValue="pier+example1-@gml.som"
                readOnly
                aria-invalid={isAccessible ? "true" : "false"}
                aria-describedby={isAccessible ? "email-error-msg" : undefined}
                className={`w-full px-5 py-3 rounded-full border-2 outline-none transition-colors ${
                  isAccessible
                    ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-950/30 dark:text-red-200"
                    : "border-red-500 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                }`}
              />
              {isAccessible && (
                <AlertCircle
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500"
                  size={20}
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="h-5 ml-1 flex items-center" aria-live="polite">
              {isAccessible && (
                <span
                  id="email-error-msg"
                  className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center gap-1"
                >
                  Please enter a valid email address.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {/* Simulation Toggle */}
          <div className="flex flex-col items-center gap-3">
            <span
              id="simulation-label"
              className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300"
            >
              Simulation
            </span>
            <button
              role="switch"
              aria-checked={isColorBlind}
              aria-labelledby="simulation-label"
              onClick={() => setIsColorBlind(!isColorBlind)}
              className={`group flex items-center gap-3 py-2.5 px-6 rounded-full font-semibold border transition-all min-w-[220px] justify-center ${
                isColorBlind
                  ? "bg-indigo-600 border-indigo-700 text-white shadow-md shadow-indigo-200 dark:shadow-none"
                  : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
              }`}
            >
              <div
                className={`relative w-8 h-4 rounded-full transition-colors ${
                  isColorBlind
                    ? "bg-indigo-400"
                    : "bg-zinc-300 dark:bg-zinc-600"
                }`}
                aria-hidden="true"
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${
                    isColorBlind ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </div>
              <span className="text-base font-medium">
                {isColorBlind ? "Achromatopsia" : "Normal Vision"}
              </span>
            </button>
          </div>

          <div
            className="hidden sm:block w-px h-10 bg-zinc-200 dark:bg-zinc-800"
            aria-hidden="true"
          />

          {/* Solution Segmented Control */}
          <div className="flex flex-col items-center gap-3">
            <span
              id="solution-label"
              className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300"
            >
              Solution
            </span>
            <div
              role="group"
              aria-labelledby="solution-label"
              className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full border border-zinc-200 dark:border-zinc-700"
            >
              <button
                aria-pressed={!isAccessible}
                onClick={() => setIsAccessible(false)}
                className={`flex items-center gap-2 py-2 px-6 rounded-full text-base font-medium transition-all ${
                  !isAccessible
                    ? "bg-white dark:bg-zinc-700 text-red-600 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                <X size={16} strokeWidth={2.5} aria-hidden="true" /> Color Only
              </button>
              <button
                aria-pressed={isAccessible}
                onClick={() => setIsAccessible(true)}
                className={`flex items-center gap-2 py-2 px-6 rounded-full text-base font-medium transition-all ${
                  isAccessible
                    ? "bg-white dark:bg-zinc-700 text-emerald-600 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                <Check size={16} strokeWidth={2.5} aria-hidden="true" /> Color +
                Icon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
