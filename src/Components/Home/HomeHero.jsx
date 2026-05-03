import React from "react";
import PillButton from "@/components/PillButton";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center short:min-h-[58vh] min-h-[65vh] overflow-hidden -mb-20 max-sm:-mt-8">
      {/* had to make min-h-[70dvh] so that on mac screens it is also centered */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6 my-auto">
        <h1 className="text-[3.5rem] sm:text-7xl  lg:text-8xl font-extrabold tracking-tight text-secondary dark:text-primary-foreground leading-[1.1] md:leading-[0.95]">
          Learn to design for <br className="hidden md:block" />
          <span className="text-primary underline decoration-primary/30 decoration-8 underline-offset-8 relative">
            everyone.
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mt-6">
          A practical introductory guide to accessible UI & UX. Completely free
          and open source.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-4">
          <PillButton
            variant="primary"
            fill="full"
            href="/learning"
            className="dark:border-white max-sm:h-14 px-10 text-base! py-2"
          >
            Start learning
          </PillButton>
          <PillButton
            variant="secondary"
            fill="hollow"
            href="/examples"
            className="border-transparent text-secondary dark:text-white hover:underline text-base! py-2"
          >
            Practical Examples <ArrowRight className="w-5 h-5 ml-0" />
          </PillButton>
        </div>
      </div>
    </section>
  );
}
