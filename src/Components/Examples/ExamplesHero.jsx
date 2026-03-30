import React from "react";
import ContrastIllustration from "./ContrastIllustration";

export default function ExamplesHero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 -mt-8 md:py-24">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12 md:gap-12">
        {/* Text Container */}
        <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-6">
          <h1 className="heading-1 text-secondary">Practical Examples</h1>
          <p className="hero-paragraph max-md:w-full max-md:max-w-none">
            A collection of practical UI examples crafted specifically to let
            you experience the benefits of accessible design firsthand.
          </p>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end max-md:pt-8">
          {/* Changed aspect ratio to stop vertical stretching on tablet */}
          <div className="w-full max-w-md aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]">
            <ContrastIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
