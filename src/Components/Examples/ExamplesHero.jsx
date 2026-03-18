import Image from "next/image";
import React from "react";
import illustration from "@public/examples/examples-hero-illustration.svg";

export default function ToolsHero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 -mt-8 md:py-24">
      {/* Parent Container: 
        flex-col-reverse = Mobile (Image on top, text below)
        md:flex-row = Desktop (Text left, image right)
      */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8   ">
        {/* Text Container */}
        <div className="flex flex-col flex-1 gap-4 md:gap-6">
          <h1 className="hero-title">Practical Examples</h1>
          <p className="hero-paragraph">
            A collection of practical UI examples crafted specifically to let
            you experience the benefits of accessible design firsthand. Explore
            these examples to see how accessibility can enhance usability, and
            overall user experience in real-world scenarios.
          </p>
        </div>

        {/* Image Container */}
        <div className="flex flex-1 justify-center w-full max-w-md md:max-w-xl">
          <div className="relative w-full aspect-square md:aspect-[4/3]">
            {/* Replace src with your actual illustration */}
            <Image
              src={illustration}
              alt="Accessibility tools and code illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
