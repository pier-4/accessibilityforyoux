import React from "react";
import PillButton from "@/Components/PillButton";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center gap-8 py-20 md:py-32 mb-12 overflow-hidden">
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6">
        <h1 className="text-[2.75rem] md:text-7xl lg:text-8xl font-extrabold tracking-tight text-secondary dark:text-primary-foreground leading-[1.1]">
          Learn to design for <br className="hidden md:block" />
          <span className="text-primary underline decoration-primary/30 decoration-8 underline-offset-8 relative">
            everyone.
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mt-6">
          A practical introductory guide to accessible UI & UX. Completely free
          and open source.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-10">
          <PillButton
            variant="secondary"
            fill="full"
            href="/learning"
            className="dark:border-white max-sm:h-14 px-10 text-lg"
          >
            Start learning
          </PillButton>
          <PillButton
            variant="secondary"
            fill="hollow"
            href="/examples"
            className="border-transparent text-secondary dark:text-white hover:underline text-lg"
          >
            Practical Examples <ArrowRight className="w-5 h-5 ml-2" />
          </PillButton>
        </div>
      </div>
    </section>
  );
}
