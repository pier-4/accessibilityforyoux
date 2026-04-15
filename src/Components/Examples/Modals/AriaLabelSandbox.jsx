"use client";

import React, { useState } from "react";
import { Volume2, Heart, Check, X } from "lucide-react";

export default function AriaLabelSandbox() {
  const [isAccessible, setIsAccessible] = useState(false);

  const simulateScreenReader = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Stop any currently playing audio
      const text = isAccessible
        ? "Like this post, button"
        : "Button, unlabeled";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for clarity
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        ARIA Labels
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Icon-only buttons are visually clear but invisible to screen readers
        unless labelled. Using <strong>aria-label</strong> provides the missing
        context. Play the audio below to hear the difference.
      </p>

      {/* Detail panel */}
      <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        {/* Interactive Preview */}
        <div className="flex flex-col md:flex-row bg-zinc-50 dark:bg-zinc-950">
          {/* Visual UI */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
            <span className="text-sm font-medium text-zinc-500 mb-6">
              Visual Interface
            </span>
            <button
              className="p-4 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-500 hover:border-red-200 transition-all focus-visible:outline-offset-4 focus-visible:outline-red-600"
              aria-label={isAccessible ? "Like this post" : undefined}
            >
              <Heart size={32} />
            </button>
          </div>

          {/* Screen Reader UI */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center bg-[#070633] text-white">
            <span className="text-sm font-medium text-blue-200/60 mb-6">
              Screen Reader Output
            </span>

            <div className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-2xl font-mono text-lg backdrop-blur-sm">
              <span>
                {isAccessible
                  ? `"Like this post, button"`
                  : `"Button, unlabeled"`}
              </span>
              <button
                onClick={simulateScreenReader}
                className="ml-2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                aria-label="Play screen reader audio"
              >
                <Volume2 size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Controls bar */}
        <div className="p-6 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsAccessible(false)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
                !isAccessible
                  ? "bg-red-100 border-red-200 text-red-800 dark:bg-red-900/40 dark:border-red-800 dark:text-red-400 shadow-sm"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              <X size={18} />
              Without ARIA
            </button>

            <button
              onClick={() => setIsAccessible(true)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
                isAccessible
                  ? "bg-green-100 border-green-200 text-green-800 dark:bg-green-900/40 dark:border-green-800 dark:text-green-400 shadow-sm"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              <Check size={18} />
              With ARIA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
