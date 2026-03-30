import React from "react";
import {
  CustomWYWL1,
  CustomWYWL2,
  CustomWYWL3,
  CustomWYWL4,
} from "@/lib/icons";

const learningModules = [
  {
    title: "Accessibility Basics",
    desc: "Core concepts, assistive technologies, and why designing for everyone matters.",
    icon: <CustomWYWL1 />,
    color: "bg-csm-purple-bg text-csm-purple-text",
  },
  {
    title: "WCAG Simplified",
    desc: "A beginner-friendly breakdown of the latest Web Content Accessibility Guidelines.",
    icon: <CustomWYWL2 />,
    color: "bg-csm-red-bg text-csm-red-text",
  },
  {
    title: "UX Principles",
    desc: "Fundamental ideas for creating intuitive navigation, effective forms, and clear hierarchy.",
    icon: <CustomWYWL3 />,
    color: "bg-csm-yellow-bg text-csm-yellow-text",
  },
  {
    title: "Tools & Resources",
    desc: "Industry-standard plugins and testing tools to audit and verify your work.",
    icon: <CustomWYWL4 />,
    color: "bg-csm-green-bg text-csm-green-text",
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="w-full max-w-6xl mx-auto max-md:px-0 px-4 py-10 max-md:py-4">
      <h2 className=" text-4xl font-bold text-secondary text-left md:text-left mb-12">
        What you will learn
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 2g:grid-cols-4 gap-6">
        {learningModules.map((module, i) => (
          <div
            key={i}
            className="flex flex-col items-start text-start md:items-start md:text-left gap-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50"
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${module.color}`}
            >
              {module.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {module.title}
              </h3>
              <p className="text-md text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {module.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
