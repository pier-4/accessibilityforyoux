"use client";

import React, { useState } from "react";
import { MousePointerClick, Keyboard } from "lucide-react";

export default function SemanticHtmlSandbox() {
  const [showCode, setShowCode] = useState(false);
  const [divCount, setDivCount] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        Semantic HTML
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Using a <code>&lt;div&gt;</code> as a button breaks keyboard navigation
        and screen reader support. Always use semantic tags like{" "}
        <code>&lt;button&gt;</code> for interactive elements. Try navigating to
        these with your keyboard (Tab).
      </p>

      <div className="relative isolate w-full rounded-[40px] overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        <div className="flex flex-col md:flex-row bg-zinc-50 dark:bg-zinc-950 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
          {/* Div Button */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center gap-6">
            <span className="text-sm font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full">
              Non-Semantic
            </span>
            <div
              onClick={() => setDivCount((c) => c + 1)}
              className="bg-blue-600 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Click me (Div)
            </div>
            <span className="text-sm text-zinc-500 font-mono">
              Clicked: {divCount}
            </span>
            {showCode && (
              <pre className="mt-4 p-4 bg-zinc-900 text-zinc-100 rounded-2xl text-xs overflow-x-auto w-full">
                {`<div onClick={handleClick}>\n  Click me\n</div>`}
              </pre>
            )}
            <div className="flex gap-4 text-xs text-zinc-500 mt-auto pt-4">
              <span className="flex items-center gap-1 text-green-600">
                <MousePointerClick size={14} /> Works
              </span>
              <span className="flex items-center gap-1 text-red-600">
                <Keyboard size={14} /> Fails
              </span>
            </div>
          </div>

          {/* Real Button */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col items-center justify-center gap-6">
            <span className="text-sm font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
              Semantic
            </span>
            <button
              onClick={() => setButtonCount((c) => c + 1)}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 transition-all"
            >
              Click me (Button)
            </button>
            <span className="text-sm text-zinc-500 font-mono">
              Clicked: {buttonCount}
            </span>
            {showCode && (
              <pre className="mt-4 p-4 bg-zinc-900 text-zinc-100 rounded-2xl text-xs overflow-x-auto w-full">
                {`<button onClick={handleClick}>\n  Click me\n</button>`}
              </pre>
            )}
            <div className="flex gap-4 text-xs text-zinc-500 mt-auto pt-4">
              <span className="flex items-center gap-1 text-green-600">
                <MousePointerClick size={14} /> Works
              </span>
              <span className="flex items-center gap-1 text-green-600">
                <Keyboard size={14} /> Works
              </span>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-8 flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-900">
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
  );
}
