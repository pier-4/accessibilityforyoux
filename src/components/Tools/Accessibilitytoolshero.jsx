// import React from "react";

// export default function LighthouseIllustration() {
//   const r = 44;
//   const circ = 2 * Math.PI * r;
//   const score = 100;
//   const filled = (score / 100) * circ;

//   return (
//     <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden group">
//       {/* Decorative background grid */}
//       <div className="absolute inset-0 opacity-[0.15] dark:opacity-10 bg-[radial-gradient(circle_at_center,_#71717a_1px,_transparent_1px)] bg-[size:24px_24px]" />

//       {/* Abstract floating UI elements for depth */}
//       <div className="absolute top-12 left-10 w-20 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />
//       <div className="absolute top-20 left-10 w-32 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />
//       <div className="absolute bottom-12 right-10 w-24 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />

//       {/* Main Badge Container - Matched w-40 sm:w-48 sizing */}
//       <div className="relative z-10 flex flex-col items-center justify-center w-40 sm:w-48 aspect-square bg-white dark:bg-zinc-950 p-4 sm:p-6 rounded-[2rem] border-[3px] border-zinc-200 dark:border-zinc-800 transition-transform duration-500 ease-out group-hover:-translate-y-2">
//         <svg
//           className="w-20 h-20 sm:w-[100px] sm:h-[100px]"
//           viewBox="0 0 140 140"
//         >
//           <circle
//             cx="70"
//             cy="70"
//             r={r}
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="10"
//             className="text-zinc-100 dark:text-zinc-800/50"
//           />
//           <circle
//             cx="70"
//             cy="70"
//             r={r}
//             fill="none"
//             strokeWidth="10"
//             stroke="#27C93F"
//             strokeLinecap="round"
//             strokeDasharray={`${filled} ${circ}`}
//             transform="rotate(-90 70 70)"
//           />
//           <text
//             x="70"
//             y="67"
//             textAnchor="middle"
//             dominantBaseline="central"
//             fontSize="34"
//             fontWeight="650"
//             dy=".1em"
//             className="fill-zinc-800 dark:fill-zinc-100 font-rubik"
//           >
//             {score}
//           </text>
//         </svg>

//         {/* Scaled text label */}
//         <div className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
//           <span className="font-rubik text-sm font-bold tracking-wide text-zinc-600 dark:text-zinc-400">
//             Accessibility
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function ToolsIllustration() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden group">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-10 bg-[radial-gradient(circle_at_center,_#71717a_1px,_transparent_1px)] bg-[size:24px_24px]" />

      {/* Abstract floating UI elements for depth */}
      <div className="absolute top-12 left-10 w-20 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />
      <div className="absolute top-20 left-10 w-32 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />
      <div className="absolute bottom-12 right-10 w-24 h-3 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80" />

      {/* Main Badge Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-40 sm:w-48 aspect-square bg-white dark:bg-zinc-950 p-4 sm:p-6 rounded-[2rem] border-[3px] border-zinc-200 dark:border-zinc-800 transition-transform duration-500 ease-out group-hover:-translate-y-2">
        {/* Inspector/Tools SVG */}
        <svg
          className="w-20 h-20 sm:w-[100px] sm:h-[100px]"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* App Window Frame */}
          <rect
            x="10"
            y="20"
            width="100"
            height="80"
            rx="12"
            stroke="currentColor"
            strokeWidth="8"
            className="text-zinc-300 dark:text-zinc-700"
          />

          {/* Window Header Line */}
          <line
            x1="10"
            y1="44"
            x2="110"
            y2="44"
            stroke="currentColor"
            strokeWidth="8"
            className="text-zinc-300 dark:text-zinc-700"
          />

          {/* Window Controls */}
          <circle
            cx="26"
            cy="32"
            r="4"
            fill="currentColor"
            className="text-zinc-400 dark:text-zinc-600"
          />
          <circle
            cx="40"
            cy="32"
            r="4"
            fill="currentColor"
            className="text-zinc-400 dark:text-zinc-600"
          />

          {/* Abstract Code Lines */}
          <rect
            x="24"
            y="60"
            width="40"
            height="8"
            rx="4"
            fill="currentColor"
            className="text-zinc-300 dark:text-zinc-700"
          />
          <rect
            x="24"
            y="76"
            width="24"
            height="8"
            rx="4"
            fill="currentColor"
            className="text-zinc-300 dark:text-zinc-700"
          />

          {/* Magnifying Glass (Auditing Tool) */}
          <g className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 origin-bottom-right">
            {/* White/Dark background to hide lines behind the glass */}
            <circle
              cx="76"
              cy="76"
              r="20"
              fill="currentColor"
              className="text-white dark:text-zinc-950"
            />

            <circle cx="76" cy="76" r="20" stroke="#0063cc" strokeWidth="8" />
            <line
              x1="90"
              y1="90"
              x2="108"
              y2="108"
              stroke="#0063cc"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Inner crosshair */}
            <circle cx="76" cy="76" r="4" fill="#0063cc" />
          </g>
        </svg>

        {/* Text Label */}
        <div className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
          <span className="font-rubik  text-sm font-bold tracking-wide text-zinc-600 dark:text-zinc-400">
            Tools
          </span>
        </div>
      </div>
    </div>
  );
}
