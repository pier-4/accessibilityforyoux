import React from "react";
import PillButton from "@/components/PillButton";

export default function CallToAction() {
  return (
    <section className="flex flex-col items-center text-center gap-8 py-12 md:py-24">
      <h2 className="heading-2 text-secondary">
        So what are you waiting for?
        <br />
        Let&apos;s get started!
      </h2>
      <PillButton
        variant="primary"
        fill="full"
        href="/learning"
        className="px-8 py-4 text-lg"
      >
        Start learning
      </PillButton>
    </section>
  );
}
