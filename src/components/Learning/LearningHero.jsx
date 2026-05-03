import React from "react";

export default function LearningHero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 -mt-8 md:py-16 flex flex-col items-start text-left md:items-center md:text-center gap-4 md:gap-6 max-md:mt-2">
      <h1 className="heading-1-big text-header-color max-w-2xl">
        Learn accessible design,
        <br className="max-md:hidden" /> step by step
      </h1>
      <p className="hero-paragraph max-w-4xl">
        Start learning about digital accessibility. This guide covers the
        foundational concepts, global standards, UX psychology, and real-world
        Case studies you need to build inclusive products.
      </p>
    </section>
  );
}
