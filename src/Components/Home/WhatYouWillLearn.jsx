import React from "react";

const learningModules = [
  {
    icon: "bg-blue-100 text-blue-600", // Update with actual icons/colors
    title: "Accessibility basics",
    desc: "You'll learn about the fundamental concepts of accessibility, important definitions and more.",
  },
  {
    icon: "bg-orange-100 text-orange-600",
    title: "WCAG basics",
    desc: "An introduction to the WCAG guidelines, to help you get started in your journey of discovering the WCAG.",
  },
  {
    icon: "bg-yellow-100 text-yellow-600",
    title: "Important UX Principles",
    desc: "An introduction to the WCAG guidelines, to help you get started in your journey of discovering the WCAG.",
  },
  {
    icon: "bg-green-100 text-green-600",
    title: "Tools and resources",
    desc: "You'll get to know the industry standard tools to help you design and develop accessible products.",
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="flex flex-col gap-12">
      <h2 className="heading-2 text-secondary text-center md:text-left">
        What you will learn
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {learningModules.map((module, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center md:items-start md:text-left gap-4"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${module.icon} font-bold text-xl mb-2`}
            >
              {/* Replace with specific icons */}❖
            </div>
            <div className="max-w-[220px]">
              <h3 className="heading-4 text-secondary">{module.title}</h3>
              <p className="text-secondary-hierarchy text-sm leading-relaxed ">
                {module.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
