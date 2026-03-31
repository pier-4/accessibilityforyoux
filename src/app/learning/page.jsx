import React from "react";
import Container from "@/Components/Container";
import SectionCard from "@/Components/Learning/SectionCard";
import PillButton from "@/Components/PillButton";
import img1 from "@public/SectionCards/Section1CardImage.svg";
import img2 from "@public/SectionCards/Section2CardImage.png";
import img3 from "@public/SectionCards/Section3CardImage.png";
import img4 from "@public/SectionCards/section4CardImage.png";
import LearningHero from "@/Components/Learning/LearningHero";

function page() {
  return (
    <Container>
      <LearningHero />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        <SectionCard
          buttonChildren={"Go to section 1"}
          buttonhref="/learning/defining-accessibility"
          section="Section 1"
          title="The Basics"
          paragraph="Learn what accessibility is, why it is important, and how inclusive design benefits everyone."
          imageSrc={img1}
          imageAlt={"Web accessibility icon"}
          custombg={"bg-csm-purple-bg"}
          clickableCard={true}
        />
        <SectionCard
          buttonChildren={"Go to section 2"}
          buttonhref="/learning/history-of-accessibility-laws"
          section="Section 2"
          title="Standards and Regulations"
          paragraph="Explore the evolution of accessibility laws, the European Accessibility Act, and a deep dive into the WCAG POUR principles."
          imageSrc={img2}
          imageAlt={"W3C, European Union, and AA compliance badges"}
          custombg={"bg-csm-red-bg"}
          clickableCard={true}
        />
        <SectionCard
          buttonChildren={"Go to section 3"}
          buttonhref="/learning/psychology-ux-principles"
          section="Section 3"
          title="UX Design principles"
          paragraph="Understand the psychology behind user behavior, including Fitts's Law, Hick's Law, and perceived performance techniques."
          imageSrc={img3}
          imageAlt={
            "Smartphone diagram mapping easy, moderate, and hard touch zones"
          }
          custombg={"bg-csm-yellow-bg"}
          clickableCard={true}
        />
        <SectionCard
          buttonChildren={"Go to section 4"}
          buttonhref="/learning/business-of-accessibility"
          section="Section 4"
          title="Case Studies"
          paragraph="Review the business impact of accessibility through real-world lawsuits, success stories, and industry gold standards."
          imageSrc={img4}
          imageAlt={
            "GOV.UK logo, Domino's Pizza logo, and typography text-contrast tiles"
          }
          custombg={"bg-csm-green-bg"}
          clickableCard={true}
        />
      </section>
    </Container>
  );
}

export default page;
