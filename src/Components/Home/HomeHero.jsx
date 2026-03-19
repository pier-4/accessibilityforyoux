import React from "react";
import PillButton from "@/components/PillButton";
import heroIllustration from "@public/Home/HomeHeroIllustration.svg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 gap-6">
        <h1 className="heading-1-big text-secondary">
          Learn to design
          <br />
          for <span className="text-primary">everyone.</span>
        </h1>
        <p className="hero-paragraph">
          A practical introductory guide to accessible UI & UX. Completely free
          and open source.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start max-md:mt-4">
          <PillButton
            variant="secondary"
            fill="full"
            href="/learning"
            // className="dark:border-primary dark:text-primary!"
            className="dark:border-white"
          >
            Start learning
          </PillButton>
          <PillButton
            variant="secondary"
            fill="hollow"
            href="/practical-examples"
            className="border-transparent text-secondary dark:text-white hover:underline"
          >
            Practical Examples <ArrowRight className="w-4 h-4 ml-1" />
          </PillButton>
        </div>
      </div>
      <div className="flex-1 w-full max-w-md md:max-w-full">
        {/* Replace with actual Hero Illustration Image */}
        {/* <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
          [Hero Illustration Placeholder]
        </div> */}
        <Image src={heroIllustration} alt="Hero Illustration" />
      </div>
    </section>
  );
}
