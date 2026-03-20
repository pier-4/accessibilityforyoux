import React from "react";
import PillButton from "@/components/PillButton";

export default function CallToAction() {
  return (
    <section className="flex flex-col items-center text-center gap-8 py-12 md:py-24 max-lg:-mb-10">
      <h2 className="heading-3  text-secondary dark:text-primary-foreground">
        So what are you waiting for?
        <br />
        Let&apos;s get started!
      </h2>
      <PillButton
        variant="primary"
        fill="full"
        href="/learning"
        className="px-8 py-4 text-xl text-white"
      >
        Start learning
      </PillButton>
    </section>
  );
}
