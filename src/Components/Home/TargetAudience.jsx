import React from "react";
import target1 from "@public/Home/target1.svg";
import Image from "next/image";

const audiences = [
  "Graphic design students",
  "UI / UX design students",
  "Developers new to accessibility",
];

export default function TargetAudience() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex-1 flex flex-col gap-8 w-full max-md:items-center ">
        <h2 className="heading-2 text-secondary">Who is this for?</h2>
        <ul className="flex flex-col gap-6">
          {audiences.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-4 text-lg md:text-xl font-medium text-secondary-hierarchy"
            >
              <div className="w-4 h-4 rounded-full bg-primary/50"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 w-full max-w-sm md:max-w-lg">
        {/* Replace with actual Target Audience Icons Illustration */}
        <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
          <Image src={target1} alt="Target audience illustration" />
        </div>
      </div>
    </section>
  );
}
