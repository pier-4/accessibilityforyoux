"use client";

import React, { useState, useEffect } from "react";
import {
  ListTree,
  AlertTriangle,
  CheckCircle2,
  Volume2,
  Square,
} from "lucide-react";

export default function HeadingStructureSandbox() {
  const [isSemantic, setIsSemantic] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Stop reading when the modal closes (component unmounts)
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleReading = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    const text = isSemantic
      ? "Heading level 1: Space Exploration. Heading level 2: The Apollo Missions. Heading level 3: Apollo 11. Heading level 2: Mars Rovers."
      : "Heading level 1: Space Exploration. Heading level 4: The Apollo Missions. Heading level 6: Apollo 11. Heading level 3: Mars Rovers.";

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleModeSwitch = (semantic) => {
    setIsSemantic(semantic);
    setIsPlaying(false);
    if (typeof window !== "undefined") window.speechSynthesis.cancel();
  };

  return (
    <div className="flex flex-col w-full mt-4">
      <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-2 block">
        Practical examples
      </span>
      <h2 className="font-rubik font-bold text-4xl text-primary-foreground mb-4">
        Heading Structure
      </h2>
      <p className="text-secondary-hierarchy mb-8 max-w-2xl leading-relaxed">
        Screen reader users often navigate by heading levels. Skipping levels
        (e.g., jumping from H1 to H4) breaks the document outline and confuses
        users.
      </p>

      <div className="relative isolate w-full rounded-4xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
        <div className="flex flex-col md:flex-row bg-zinc-50 dark:bg-zinc-950 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
          {/* Visual UI */}
          <div className="flex-1 p-6 sm:p-12">
            <span className="text-sm font-medium text-zinc-500 mb-6 block">
              Visual Presentation
            </span>

            <article className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
              <div className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                Space Exploration
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                A brief history of our journey into the cosmos.
              </p>

              <div className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
                The Apollo Missions
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                NASA&apos;s program that resulted in 11 spaceflights.
              </p>

              <div className="text-lg font-medium mb-2 text-zinc-800 dark:text-zinc-200">
                Apollo 11
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                The first mission to land humans on the Moon.
              </p>

              <div className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
                Mars Rovers
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Robotic vehicles exploring the Martian surface.
              </p>
            </article>
          </div>

          {/* Screen Reader Document Outline */}
          <div className="flex-1 p-6 sm:p-12 bg-[#070633] text-white flex flex-col">
            <span className="text-sm font-medium text-blue-200/60 flex items-center gap-2 mb-6">
              <ListTree size={16} /> Document Outline View
            </span>

            <div className="font-mono text-sm flex flex-col gap-3">
              {isSemantic ? (
                <>
                  <div className="flex items-center gap-2 text-green-400">
                    <span className="opacity-50 text-xs w-6">H1</span> Space
                    Exploration
                  </div>
                  <div className="flex items-center gap-2 text-green-400 ml-4">
                    <span className="opacity-50 text-xs w-6">H2</span> The
                    Apollo Missions
                  </div>
                  <div className="flex items-center gap-2 text-green-400 ml-8">
                    <span className="opacity-50 text-xs w-6">H3</span> Apollo 11
                  </div>
                  <div className="flex items-center gap-2 text-green-400 ml-4">
                    <span className="opacity-50 text-xs w-6">H2</span> Mars
                    Rovers
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-green-400">
                    <span className="opacity-50 text-xs w-6">H1</span> Space
                    Exploration
                  </div>
                  <div className="flex items-center gap-2 text-red-400 ml-12 relative">
                    <span className="opacity-50 text-xs w-6">H4</span> The
                    Apollo Missions
                    <span className="absolute -left-5 text-red-500">
                      <AlertTriangle size={14} />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-red-400 ml-16 relative">
                    <span className="opacity-50 text-xs w-6">H6</span> Apollo 11
                    <span className="absolute -left-5 text-red-500">
                      <AlertTriangle size={14} />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-red-400 ml-8 relative">
                    <span className="opacity-50 text-xs w-6">H3</span> Mars
                    Rovers
                    <span className="absolute -left-5 text-red-500">
                      <AlertTriangle size={14} />
                    </span>
                  </div>
                  <div className="mt-4 text-xs text-red-300/80 border-t border-red-500/30 pt-4">
                    ⚠️ Errors detected: Skipped heading levels (H2, H3, H5
                    missing). Screen reader users cannot reliably navigate this
                    content.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Controls bar */}
        <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col xl:flex-row items-center justify-center gap-4 w-full">
          <button
            onClick={toggleReading}
            className={`flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold transition-all w-full xl:w-auto ${
              isPlaying
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-primary dark:bg-[#29815b]! text-secondary-foreground hover:bg-secondary-hover"
            }`}
          >
            {isPlaying ? (
              <Square size={18} fill="currentColor" />
            ) : (
              <Volume2 size={18} />
            )}
            {isPlaying ? "Stop Reading" : "Read Aloud"}
          </button>

          <div className="flex items-center gap-2 sm:gap-3 w-full xl:w-auto">
            <button
              onClick={() => handleModeSwitch(false)}
              className={`flex-1 xl:flex-none flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
                !isSemantic
                  ? "bg-red-100 border-red-200 text-red-800 dark:bg-red-900/40 dark:border-red-800 dark:text-red-400"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              <AlertTriangle size={18} />
              Skipped Levels
            </button>

            <button
              onClick={() => handleModeSwitch(true)}
              className={`flex-1 xl:flex-none flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium border transition-all ${
                isSemantic
                  ? "bg-green-100 border-green-200 text-green-800 dark:bg-green-900/40 dark:border-green-800 dark:text-green-400"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              <CheckCircle2 size={18} />
              Logical Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
