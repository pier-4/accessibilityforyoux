import React from "react";
import Container from "@/components/Container";
import HomeHero from "@/components/Home/HomeHero";
import WhyAccMatters from "@/components/Home/WhyAccMatters";
import WhatYouWillLearn from "@/components/Home/WhatYouWillLearn";
import TargetAudience from "@/components/Home/TargetAudience";
import CallToAction from "@/components/Home/CallToAction";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-24 md:gap-32 py-12">
        <HomeHero />
        <WhyAccMatters />
        <WhatYouWillLearn />
        <TargetAudience />
        <CallToAction />
      </div>
    </Container>
  );
}
