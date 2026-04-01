import React from "react";
import PillButton from "@/Components/PillButton";

export default function CallToAction() {
  return (
    <section className="flex flex-col items-start text-left sm:items-center sm:text-center gap-6 py-16 md:pb-24  px-4 md:px-0">
      <div className="space-y-4 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-header-color">
          Good design includes everyone.
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-md sm:mx-auto">
          A free, introductory guide to accessibility, written for designers and
          developers who want to build things people can actually use.
        </p>
      </div>
      <PillButton
        variant="primary"
        fill="full"
        href="/learning"
        className="px-8 py-3 mt-4 text-base! text-white self-start sm:self-center"
      >
        Start learning
      </PillButton>
    </section>
  );
}
