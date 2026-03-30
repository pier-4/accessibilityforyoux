import Image from "next/image";
import React from "react";
import ContrastIllustration from "./ContrastIllustration";

export default function ToolsHero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 -mt-8 md:py-24">
      {/* Parent Container: 
        flex-col-reverse = Mobile (Image on top, text below)
        md:flex-row = Desktop (Text left, image right)
      */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-8   ">
        {/* Text Container */}
        <div className="flex flex-col flex-3 gap-4 md:gap-6">
          <h1 className="heading-1 text-secondary">Practical Examples</h1>
          <p className="hero-paragraph">
            A collection of practical UI examples crafted specifically to let
            you experience the benefits of accessible design firsthand.{" "}
          </p>
        </div>

        {/* Image Container */}
        <div className="flex flex-2 justify-center w-full max-w-md md:max-w-xl max-md:pt-8  ">
          <div className="relative w-full aspect-square md:aspect-[4/3]">
            {/* Replace src with your actual illustration */}
            <ContrastIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
