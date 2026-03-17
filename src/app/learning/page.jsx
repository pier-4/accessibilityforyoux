import React from "react";
import Container from "@/Components/Container";
import SectionCard from "@/Components/SectionCard";
import PillButton from "@/Components/PillButton";
import img1 from "@public/SectionCards/Section1CardImage.svg";
import img2 from "@public/SectionCards/Section2CardImage.png";
import img3 from "@public/SectionCards/Section3CardImage.png";
import img4 from "@public/SectionCards/section4CardImage.png";

function page() {
  return (
    <Container>
      <section className=" container max-w-3xl flex flex-col gap-6 mb-14">
        <h1 className="heading-1">Learn accessible design, step by step</h1>
        <p>
          Simple explanations and visual examples to understand accessibility
          basics. Nothing too complicated
        </p>
      </section>
      <section className="container flex flex-wrap gap-8 justify-start items-start ">
        <SectionCard
          buttonChildren={"Go to section 1"}
          buttonhref="/learning/section1"
          section="Section 1"
          title="The basics"
          paragraph="Learn the fundamental concepts of accessible design, including key principles, guidelines, and best practices to create inclusive digital experiences."
          imageSrc={img1}
          custombg={"bg-csm-purple-bg"}
        />
        <SectionCard
          buttonChildren={"Go to section 2"}
          buttonhref="/learning/section2"
          section="Section 2"
          title="Advanced Topics"
          paragraph="Dive deeper into accessible design with advanced techniques and real-world applications."
          imageSrc={img2}
          custombg={"bg-csm-red-bg"}
        />
        <SectionCard
          buttonChildren={"Go to section 3"}
          buttonhref="/learning/section3"
          section="Section 3"
          title="Advanced Topics"
          paragraph="Dive deeper into accessible design with advanced techniques and real-world applications."
          imageSrc={img3}
          custombg={"bg-csm-yellow-bg"}
        />
        <SectionCard
          buttonChildren={"Go to section 4"}
          buttonhref="/learning/section4"
          section="Section 4"
          title="Advanced Topics"
          paragraph="Dive deeper into accessible design with advanced techniques and real-world applications."
          imageSrc={img4}
          custombg={"bg-csm-green-bg"}
        />
      </section>
    </Container>
  );
}

export default page;
