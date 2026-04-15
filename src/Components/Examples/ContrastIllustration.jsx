import React from "react";

export default function ContrastIllustration() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden group">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-10 bg-[radial-gradient(circle_at_center,_#71717a_1px,_transparent_1px)] bg-[size:24px_24px]" />

      {/* Abstract floating UI elements for depth */}
      <div className="absolute top-10 right-10 w-24 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />
      <div className="absolute bottom-12 left-10 w-32 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />

      {/* Fail Card (Back) - Pushed further up-left, slightly smaller on mobile */}
      <div className="absolute top-1/2 left-1/2 w-40 sm:w-48 bg-white dark:bg-zinc-950 rounded-[2rem] border-[3px] border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 rotate-[-12deg] -translate-x-[75%] -translate-y-[75%] transition-transform duration-500 ease-out group-hover:rotate-[-16deg] group-hover:-translate-x-[90%] group-hover:-translate-y-[90%]">
        <div className="flex flex-col gap-3">
          <span className="text-4xl sm:text-6xl font-bold font-rubik text-zinc-300 dark:text-zinc-800">
            Aa
          </span>
          <div className="flex justify-between items-end mt-2">
            <span className="text-[10px] sm:text-sm font-mono font-medium text-zinc-400 dark:text-zinc-600">
              1.35:1
            </span>
            <span className="bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              ✕ Fail
            </span>
          </div>
        </div>
      </div>

      {/* Pass Card (Front) - Pushed further down-right, slightly smaller on mobile */}
      <div className="absolute top-1/2 left-1/2 w-40 sm:w-48 bg-[#0063cc] rounded-[2rem] border-[3px] border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 rotate-[8deg] -translate-x-[25%] -translate-y-[25%] transition-transform duration-500 ease-out group-hover:rotate-[12deg] group-hover:-translate-x-[5%] group-hover:-translate-y-[5%]">
        <div className="flex flex-col gap-3">
          <span className="text-4xl sm:text-6xl font-bold font-rubik text-white">
            Aa
          </span>
          <div className="flex justify-between items-end mt-2">
            <span className="text-[10px] sm:text-sm font-mono font-medium text-white/90">
              8.6:1
            </span>
            <span className="bg-green-300 text-green-900 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              ✓ Pass
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
