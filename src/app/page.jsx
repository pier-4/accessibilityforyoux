import React from "react";
import Container from "@/Components/Container";
import HomeHero from "@/Components/Home/HomeHero";
import WhyAccMatters from "@/Components/Home/WhyAccMatters";
import WhatYouWillLearn from "@/Components/Home/WhatYouWillLearn";
import TargetAudience from "@/Components/Home/TargetAudience";
import CallToAction from "@/Components/Home/CallToAction";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-24 md:gap-32 py-12 md:py-8">
        <HomeHero />
        <WhyAccMatters />
        <WhatYouWillLearn />
        <TargetAudience />
        <CallToAction />
      </div>
    </Container>
  );
}
