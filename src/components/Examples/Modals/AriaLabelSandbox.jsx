"use client";

import React, { useState } from "react";
import { Volume2, Heart, Check, X } from "lucide-react";

export default function AriaLabelSandbox() {
  const [isAccessible, setIsAccessible] = useState(false);
  const [showCode, setShowCode] = useState(false);

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
        ARIA attributes provide essential missing context to assistive
        technologies. Icon-only buttons are visually clear but invisible to
        screen readers unless labelled. Using <strong>aria-label</strong>{" "}
        translates the visual UI into readable context. Play the audio below to
        hear the difference.
      </p>

      <div className="relative isolate w-full rounded-[40px] overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        {/* Interactive Preview */}
        <div className="flex flex-col md:flex-row bg-zinc-50 dark:bg-zinc-950">
          {/* Visual UI */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 min-h-[300px]">
            <span className="text-sm font-medium text-zinc-500 mb-6">
              Visual Interface
            </span>
            <button
              className="p-4 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-500 hover:border-red-200 transition-all focus-visible:outline-offset-4 focus-visible:outline-red-600"
              aria-label={isAccessible ? "Like this post" : undefined}
            >
              <Heart size={32} />
            </button>

            {showCode && (
              <pre className="mt-8 p-4 bg-zinc-900 text-zinc-100 rounded-2xl text-xs overflow-x-auto w-full max-w-sm border border-zinc-800">
                {`<button${isAccessible ? '\n  aria-label="Like this post"' : ""}>\n  <Heart size={32} />\n</button>`}
              </pre>
            )}
          </div>

          {/* Screen Reader UI */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center bg-[#070633] text-white min-h-[300px]">
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

            {showCode && (
              <div className="mt-8 h-[74px] flex items-center text-sm font-mono text-blue-200/50">
                {/* Placeholder block to keep layout balanced with the code block on the left */}
                {"// Screen reader interprets DOM"}
              </div>
            )}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          {/* ARIA Context Control */}
          <div className="flex flex-col items-center gap-3">
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
                <X size={16} strokeWidth={2.5} aria-hidden="true" /> Without
                ARIA
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
                <Check size={16} strokeWidth={2.5} aria-hidden="true" /> With
                ARIA
              </button>
            </div>
          </div>

          <div
            className="hidden md:block w-px h-10 bg-zinc-200 dark:bg-zinc-800"
            aria-hidden="true"
          />

          {/* Source Code Toggle */}
          <div className="flex flex-col items-center gap-3">
            <span
              id="code-label"
              className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300"
            >
              Source Code
            </span>
            <button
              role="switch"
              aria-checked={showCode}
              aria-labelledby="code-label"
              onClick={() => setShowCode(!showCode)}
              className={`group flex items-center gap-3 py-2.5 px-6 rounded-full font-semibold border transition-all min-w-[220px] justify-center ${
                showCode
                  ? "btn-brand"
                  : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
              }`}
            >
              <div
                className={`relative w-8 h-4 rounded-full transition-colors ${
                  showCode ? "bg-indigo-300" : "bg-zinc-300 dark:bg-zinc-600"
                }`}
                aria-hidden="true"
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${
                    showCode ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </div>
              <span className="text-base font-medium">
                {showCode ? "HTML Visible" : "HTML Hidden"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
