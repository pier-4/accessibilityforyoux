import React from "react";
import PillButton from "@/Components/PillButton";

export default function CallToAction() {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-16 md:py-24">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary ">
          Good design includes everyone.
        </h2>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
          A free, introductory guide to accessibility, written for designers and
          developers who want to build things people can actually use.
        </p>
      </div>
      <PillButton
        variant="primary"
        fill="full"
        href="/learning"
        className="px-8 py-3 mt-4 text-lg font-medium text-white"
      >
        Start learning
      </PillButton>
    </section>
  );
}
