import Image from "next/image";
import lightmodelogo from "@public/About/biglogoLightMode.svg";
import darkmodelogo from "@public/About/biglogoDarkMode.svg";

export default function Logo({ className = "" }) {
  return (
    <>
      {/* Light Mode Logo */}
      <Image
        src={lightmodelogo}
        alt="Accessibility For You X logo"
        width={370}
        height={170}
        className={`dark:hidden block ${className}`}
        priority
      />

      {/* Dark Mode Logo */}
      <Image
        src={darkmodelogo}
        alt="Accessibility For You X logo"
        width={370}
        height={170}
        className={`hidden dark:block ${className}`}
        priority
      />
    </>
  );
}
