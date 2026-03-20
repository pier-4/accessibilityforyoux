import React from "react";
import Container from "@/Components/Container";
import SectionCard from "@/Components/Learning/SectionCard";
import PillButton from "@/Components/PillButton";
import img1 from "@public/SectionCards/Section1CardImage.svg";
import img2 from "@public/SectionCards/Section2CardImage.png";
import img3 from "@public/SectionCards/Section3CardImage.png";
import img4 from "@public/SectionCards/section4CardImage.png";

function page() {
  return (
    <Container>
      <section className=" container max-w-xl flex flex-col gap-6 mb-14">
        <h1 className="heading-1">Learn accessible design, step by step</h1>
        <p className="hero-paragraph max-w-xl!">
          Simple explanations and visual examples to understand accessibility
          basics. Nothing too complicated
        </p>
      </section>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
        <SectionCard
          buttonChildren={"Go to section 1"}
          buttonhref="/learning/defining-accessibility"
          section="Section 1"
          title="The basics"
          paragraph="Learn the fundamental concepts of accessible design, including key principles, guidelines, and best practices to create inclusive digital experiences."
          imageSrc={img1}
          custombg={"bg-csm-purple-bg"}
        />
        <SectionCard
          buttonChildren={"Go to section 2"}
          buttonhref="/learning/history-of-accessibility-laws"
          section="Section 2"
          title="Standards and Regulations"
          paragraph="You will learn about the brief history of how accessibility regulations came to be, and you will get to know what WCAG is and the EAAs are..."
          imageSrc={img2}
          custombg={"bg-csm-red-bg"}
        />
        <SectionCard
          buttonChildren={"Go to section 3"}
          buttonhref="/learning/psychology-ux-principles"
          section="Section 3"
          title="Universal UX Design principles "
          paragraph="TODO... placeholder text"
          imageSrc={img3}
          custombg={"bg-csm-yellow-bg"}
        />
        <SectionCard
          buttonChildren={"Go to section 4"}
          buttonhref="/learning/business-of-accessibility"
          section="Section 4"
          title="Case Studies"
          paragraph="The best way to learn is to look at and study what other designers have done (good or bad), in this section you will learn about some of the best and worst."
          imageSrc={img4}
          custombg={"bg-csm-green-bg"}
        />
      </section>
    </Container>
  );
}

export default page;
