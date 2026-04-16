"use client";

import React, { useState } from "react";
import { Volume2, Heart, Check, X } from "lucide-react";

export default function AriaLabelSandbox() {
  const [isAccessible, setIsAccessible] = useState(false);

  const simulateScreenReader = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const text = isAccessible
        ? "Like this post, button"
        : "Button, unlabeled";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
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

      <div className="relative isolate w-full rounded-[40px] overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
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

        {/* Controls Bar */}
        <div className="p-8 flex flex-col items-center justify-center gap-3 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <span
            id="aria-label-ctrl"
            className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300"
          >
            Screen Reader Context
          </span>
          <div
            role="group"
            aria-labelledby="aria-label-ctrl"
            className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full border border-zinc-200 dark:border-zinc-700"
          >
            <button
              aria-pressed={!isAccessible}
              onClick={() => setIsAccessible(false)}
              className={`flex items-center gap-2 py-2 px-6 rounded-full text-base font-medium transition-all ${
                !isAccessible
                  ? "bg-white dark:bg-zinc-900 text-red-600 dark:text-red-500 shadow-sm "
                  : "text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              <X size={16} strokeWidth={2.5} aria-hidden="true" /> Without ARIA
            </button>
            <button
              aria-pressed={isAccessible}
              onClick={() => setIsAccessible(true)}
              className={`flex items-center gap-2 py-2 px-6 rounded-full text-base font-medium transition-all ${
                isAccessible
                  ? "bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              <Check size={16} strokeWidth={2.5} aria-hidden="true" /> With ARIA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
