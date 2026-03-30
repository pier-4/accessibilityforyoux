import React from "react";
import Image from "next/image";
import target1 from "@public/Home/target1.svg";

const audiences = [
  {
    title: "UI & UX Design Students",
    description:
      "Learn how to design inclusive interfaces from the start, making your portfolio stand out.",
    icon: (
      <svg
        className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 13.5l3.894 1.894M4.5 10.5L12 14.25l7.5-3.75M4.5 16.5l7.5 3.75 7.5-3.75M12 6.75l-7.5 3.75 7.5 3.75 7.5-3.75-7.5-3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Graphic Design Students",
    description:
      "Understand basic digital rules like color contrast, typography, and visual hierarchy for the web.",
    icon: (
      <svg
        className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Junior Frontend Developers",
    description:
      "Discover how to write semantic HTML and build components that everyone can actually use.",
    icon: (
      <svg
        className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
  },
];

export default function TargetAudience() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10 max-md:py-10 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 w-full space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-secondary">
            Who is this for?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-md">
            Practical, beginner-friendly guidelines for the people learning to
            build the web.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
            >
              <div className="w-12 h-12 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-md text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full max-w-md lg:max-w-full">
        <div className="relative aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-50"></div>
          <Image
            src={target1}
            alt="Target audience illustration"
            className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
