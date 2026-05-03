"use client";

import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const ORDERED_DOM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MESSY_DOM = [1, 8, 4, 11, 2, 9, 5, 12, 3, 10, 6, 7];

export default function TabOrderSandbox() {
  const [isOrdered, setIsOrdered] = useState(false);
  const [showFocus, setShowFocus] = useState(true);
  const gridRef = useRef(null);
  const lastFocusedIndex = useRef(-1);

  const currentDom = isOrdered ? ORDERED_DOM : MESSY_DOM;

  const simulateTab = () => {
    if (!gridRef.current) return;
    const items = Array.from(gridRef.current.querySelectorAll(".tab-item"));
    if (items.length === 0) return;

    let currentIndex = items.indexOf(document.activeElement);

    if (currentIndex === -1) {
      currentIndex = lastFocusedIndex.current;
    }

    const nextIndex =
      currentIndex === -1 ? 0 : (currentIndex + 1) % items.length;
    items[nextIndex].focus();
  };

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        Tab Order & Focus
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Keyboard users rely on the <strong>Tab</strong> key to navigate. If the
        underlying code (DOM) order doesn&apos;t match the visual layout,
        navigation becomes unpredictable. Additionally, hiding the focus outline
        leaves keyboard users completely blind to their current location.
      </p>

      <div className="relative isolate w-full rounded-[40px] overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        {/* Interactive Grid */}
        <div className="p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-950 flex justify-center border-b border-zinc-200 dark:border-zinc-800">
          <div
            ref={gridRef}
            className={`grid grid-cols-3 sm:grid-cols-4 gap-4 w-full max-w-md ${
              !showFocus ? "[&_.tab-item]:outline-none!" : ""
            }`}
          >
            {currentDom.map((num) => (
              <button
                key={num}
                onFocus={(e) => {
                  if (!gridRef.current) return;
                  const items = Array.from(
                    gridRef.current.querySelectorAll(".tab-item"),
                  );
                  lastFocusedIndex.current = items.indexOf(e.target);
                }}
                className="tab-item flex items-center justify-center aspect-square rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 text-xl font-bold text-zinc-700 dark:text-zinc-300 hover:border-primary focus:outline-offset-4 focus:outline-4 focus:outline-red-600 dark:focus:outline-red-500"
                style={{ order: num }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 bg-white dark:bg-zinc-900">
          {/* Action Button */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300">
              Interaction
            </span>
            <button
              onClick={simulateTab}
              onMouseDown={(e) => e.preventDefault()}
              className="flex items-center gap-2 py-2.5 px-6 rounded-full font-semibold border bg-zinc-800 border-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:border-zinc-200 dark:text-zinc-900 dark:hover:bg-white transition-all h-[46px]"
            >
              Simulate Tab <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>

          <div
            className="hidden lg:block w-px h-10 bg-zinc-200 dark:bg-zinc-800"
            aria-hidden="true"
          />

          {/* DOM Order Segmented */}
          <div className="flex flex-col items-center gap-3">
            <span
              id="order-label"
              className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300"
            >
              DOM Order
            </span>
            <div
              role="group"
              aria-labelledby="order-label"
              className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full border border-zinc-200 dark:border-zinc-700"
            >
              <button
                aria-pressed={!isOrdered}
                onClick={() => {
                  setIsOrdered(false);
                  lastFocusedIndex.current = -1;
                }}
                className={`flex items-center gap-2 py-2 px-6 rounded-full text-base font-medium transition-all ${
                  !isOrdered
                    ? "bg-white dark:bg-zinc-900 text-red-600 dark:text-red-500 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                Messy
              </button>
              <button
                aria-pressed={isOrdered}
                onClick={() => {
                  setIsOrdered(true);
                  lastFocusedIndex.current = -1;
                }}
                className={`flex items-center gap-2 py-2 px-6 rounded-full text-base font-medium transition-all ${
                  isOrdered
                    ? "bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                Fixed
              </button>
            </div>
          </div>

          <div
            className="hidden lg:block w-px h-10 bg-zinc-200 dark:bg-zinc-800"
            aria-hidden="true"
          />

          {/* Focus Outline Toggle */}
          <div className="flex flex-col items-center gap-3">
            <span
              id="focus-label"
              className="text-xs uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300"
            >
              Focus Outline
            </span>
            <button
              role="switch"
              aria-checked={showFocus}
              aria-labelledby="focus-label"
              onClick={() => setShowFocus(!showFocus)}
              className={`group flex items-center gap-3 py-2.5 px-6 rounded-full font-semibold border transition-all min-w-[160px] justify-center ${
                showFocus
                  ? "btn-brand"
                  : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
              }`}
            >
              <div
                className={`relative w-8 h-4 rounded-full transition-colors ${showFocus ? "bg-indigo-300" : "bg-zinc-300 dark:bg-zinc-600"}`}
                aria-hidden="true"
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${showFocus ? "translate-x-4" : "translate-x-0"}`}
                />
              </div>
              <span className="text-base font-medium">
                {showFocus ? "Visible" : "Hidden"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
