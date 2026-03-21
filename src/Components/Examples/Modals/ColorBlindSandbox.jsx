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

      {/* Detail panel */}
      <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        {/* Interactive Preview */}
        <div
          className="p-8 sm:p-16 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center border-b border-zinc-200 dark:border-zinc-800 transition-all duration-500"
          style={{ filter: isColorBlind ? "grayscale(100%)" : "none" }}
        >
          <div className="w-full max-w-sm flex flex-col gap-2">
            <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Email Address
            </label>
            <div className="relative">
              <input
                type="text"
                defaultValue="pier+example1-@gml.som"
                readOnly
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors ${
                  isAccessible
                    ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-950/30 dark:text-red-200"
                    : "border-red-500 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                }`}
              />
              {isAccessible && (
                <AlertCircle
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
                  size={20}
                />
              )}
            </div>
            {isAccessible ? (
              <span className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center gap-1">
                Please enter a valid email address.
              </span>
            ) : (
              <span className="text-sm text-zinc-500 h-5">
                {/* Empty space to maintain height when text is missing */}
              </span>
            )}
          </div>
        </div>

        {/* Controls bar */}
        <div className="p-6 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsColorBlind(!isColorBlind)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
                isColorBlind
                  ? "bg-zinc-800 border-zinc-900 text-white dark:bg-zinc-100 dark:border-zinc-200 dark:text-zinc-900"
                  : "bg-zinc-100 border-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
              }`}
            >
              {isColorBlind ? <EyeOff size={18} /> : <Eye size={18} />}
              {isColorBlind ? "Vision: Achromatopsia" : "Vision: Normal"}
            </button>
          </div>

          <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsAccessible(false)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
                !isAccessible
                  ? "bg-red-100 border-red-200 text-red-800 dark:bg-red-900/40 dark:border-red-800 dark:text-red-400"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              <X size={18} />
              Color Only
            </button>

            <button
              onClick={() => setIsAccessible(true)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
                isAccessible
                  ? "bg-green-100 border-green-200 text-green-800 dark:bg-green-900/40 dark:border-green-800 dark:text-green-400"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              <Check size={18} />
              Color + Icon/Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
