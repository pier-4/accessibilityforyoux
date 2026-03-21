"use client";

import NextImage from "next/image";
import { useState } from "react";

export default function Image({ className, sizes, ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-zinc-400 dark:text-zinc-500"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="8.5"
              cy="8.5"
              r="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M3 15l5-5 4 4 3-3 6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      <NextImage
        {...props}
        onLoad={() => setLoaded(true)}
        sizes={
          sizes ?? "(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 58vw"
        }
        className={className}
      />
    </div>
  );
}
