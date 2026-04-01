import Image from "next/image";
import React from "react";
import illustration from "@public/tools/tools-illustration.svg";
import AccessibilityToolsHero from "./Accessibilitytoolshero";

export default function ToolsHero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 max-md:-mt-8 -mt-16 md:py-24">
      {/* Parent Container: 
        flex-col-reverse = Mobile (Image on top, text below)
        md:flex-row = Desktop (Text left, image right)
      */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-sm:gap-8 md:gap-8   ">
        {/* Text Container */}
        <div className="flex flex-col flex-3 gap-4 md:gap-6">
          <h1 className="heading-1 text-header-color">Tools & Resources</h1>
          <p className="hero-paragraph w-full max-md:max-w-none">
            A collection of tools and resources to help you check for
            accessibility throughout your design and development process
          </p>
        </div>

        {/* Image Container */}
        <div className="flex flex-2 justify-center w-full max-w-md md:max-w-lg max-md:pt-8">
          <div className="relative w-full aspect-square md:aspect-[4/3]">
            {/* Replace src with your actual illustration */}
            <AccessibilityToolsHero />
          </div>
        </div>
      </div>
    </section>
  );
}
