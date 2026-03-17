import Image from "next/image";
import lightmodelogo from "@public/Logos/logo_lightmode_long.svg";
import darkmodelogo from "@public/Logos/logo_darkmode_long.svg";

export default function Logo({ className = "" }) {
  return (
    <>
      {/* Light Mode Logo */}
      <Image
        src={lightmodelogo}
        alt="Accessibility For You X logo"
        width={209}
        height={54}
        className={`dark:hidden block ${className}`}
        priority
      />

      {/* Dark Mode Logo */}
      <Image
        src={darkmodelogo}
        alt="Accessibility For You X logo"
        width={209}
        height={54}
        className={`hidden dark:block ${className}`}
        priority
      />
    </>
  );
}
