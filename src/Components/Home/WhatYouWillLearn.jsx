import React from "react";
import {
  CustomWYWL1,
  CustomWYWL2,
  CustomWYWL3,
  CustomWYWL4,
} from "@/lib/icons";

const learningModules = [
  {
    icon: "bg-csm-purple-bg text-csm-purple-text", // Update with actual icons/colors
    title: "Accessibility basics",
    desc: "You'll learn about the fundamental concepts of accessibility, important definitions and more.",
    illustration: <CustomWYWL1 />, // Replace with actual icon
  },
  {
    icon: "bg-csm-red-bg text-csm-red-text",
    title: "WCAG basics",
    desc: "An introduction to the WCAG guidelines, to help you get started in your journey of discovering the WCAG.",
    illustration: <CustomWYWL2 />, // Replace with actual icon
  },
  {
    icon: "bg-csm-yellow-bg text-csm-yellow-text",
    title: "Important UX Principles",
    desc: "An introduction to the WCAG guidelines, to help you get started in your journey of discovering the WCAG.",
    illustration: <CustomWYWL3 />, // Replace with actual icon
  },
  {
    icon: "bg-csm-green-bg text-csm-green-text",
    title: "Tools and resources",
    desc: "You'll get to know the industry standard tools to help you design and develop accessible products.",
    illustration: <CustomWYWL4 />, // Replace with actual icon
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="flex flex-col gap-12 lg:gap-22 mb-22 max-lg:mt-10">
      <h2 className="heading-2 text-secondary text-center md:text-left max-md:pb-4">
        What you will learn
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  max-lg:gap-16 ">
        {learningModules.map((module, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center md:items-start md:text-left gap-4"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${module.icon} font-bold text-xl mb-2`}
            >
              {/* Replace with specific icons */}
              {module.illustration}
            </div>
            <div className="lg:max-w-[240px] max-md:max-w-7/10 max-sm:max-w-9/10">
              <h3 className="heading-4 text-secondary dark:text-primary-foreground pb-2">
                {module.title}
              </h3>
              <p className="text-secondary-hierarchy text-md leading-relaxed ">
                {module.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
