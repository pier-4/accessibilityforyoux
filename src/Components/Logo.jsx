"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo({ className }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });

    // set initial value
    setIsDark(document.documentElement.classList.contains("dark")); //eslint-disable-next-line react-hooks/exhaustive-deps

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={isDark ? "/Logos/logo_darkmode.svg" : "/Logos/logo_lightmode.svg"}
      alt="Accessibility for YouX logo"
      width={209}
      height={54}
      className={className}
    />
  );
}
