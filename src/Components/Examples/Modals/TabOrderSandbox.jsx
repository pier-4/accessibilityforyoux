"use client";

import React, { useState, useRef } from "react";
import { ListOrdered, Eye, EyeOff, ArrowRight } from "lucide-react";
import PillButton from "@/Components/PillButton";

const ORDERED_DOM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MESSY_DOM = [1, 8, 4, 11, 2, 9, 5, 12, 3, 10, 6, 7]; // Jumps around erratically

export default function TabOrderSandbox() {
  const [isOrdered, setIsOrdered] = useState(false);
  const [showFocus, setShowFocus] = useState(true);
  const gridRef = useRef(null);
  const lastFocusedIndex = useRef(-1);

  const currentDom = isOrdered ? ORDERED_DOM : MESSY_DOM;

  // Simulates pressing the "Tab" key for mobile users
  const simulateTab = () => {
    if (!gridRef.current) return;
    const items = Array.from(gridRef.current.querySelectorAll(".tab-item"));
    if (items.length === 0) return;

    let currentIndex = items.indexOf(document.activeElement);

    // If focus was lost (e.g. mobile user tapped the button, stealing focus)
    // fallback to our secure ref so it doesn't reset to the start
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

      {/* Detail panel */}
      <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        {/* Interactive Grid */}
        <div className="p-8 sm:p-12 bg-zinc-50 dark:bg-zinc-950 flex justify-center">
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
                className="tab-item flex items-center justify-center aspect-square rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 text-xl font-bold text-zinc-700 dark:text-zinc-300 hover:border-primary transition-colors focus:outline-offset-4 focus:outline-4 focus:outline-red-600 dark:focus:outline-red-500"
                style={{ order: num }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Controls bar */}
        <div className="p-6 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col w-full sm:w-auto">
            <PillButton
              onClick={simulateTab}
              onMouseDown={(e) => e.preventDefault()}
              variant="secondary"
            >
              Simulate Tab <ArrowRight size={18} />
            </PillButton>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 text-center sm:text-left">
              Press Tab on keyboard, or click here on mobile.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                setIsOrdered(!isOrdered);
                lastFocusedIndex.current = -1; // Reset progression when switching order mode
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-5 rounded-full font-medium border transition-all ${
                isOrdered
                  ? "bg-green-100 border-green-200 text-green-800 dark:bg-green-900/40 dark:border-green-800 dark:text-green-400"
                  : "bg-red-100 border-red-200 text-red-800 dark:bg-red-900/40 dark:border-red-800 dark:text-red-400"
              }`}
            >
              <ListOrdered size={18} />
              {isOrdered ? "Order: Fixed" : "Order: Messy"}
            </button>

            <button
              onClick={() => setShowFocus(!showFocus)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-5 rounded-full font-medium border transition-all ${
                showFocus
                  ? "bg-zinc-100 border-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
                  : "bg-red-100 border-red-200 text-red-800 dark:bg-red-900/40 dark:border-red-800 dark:text-red-400"
              }`}
            >
              {showFocus ? <Eye size={18} /> : <EyeOff size={18} />}
              {showFocus ? "Focus: Visible" : "Focus: Hidden"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
