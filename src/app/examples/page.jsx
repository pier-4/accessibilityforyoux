import React from "react";
import Container from "@/Components/Container";
import ExamplesHero from "@/Components/Examples/ExamplesHero";
import ExampleCard from "@/Components/Examples/ExampleCard";
import imgContrast from "@public/examples/contrast.svg"; // Your imported image
import TextContrastSandbox from "@/Components/Examples/Modals/TextContrastSandbox";

const examplesData = [
  {
    title: "Good and bad text contrast",
    paragraph: "Examples of Accessible (AA) vs non-Accessible text contrast...",
    imageSrc: imgContrast,
    tags: ["WCAG 1.2.4", "WCAG 2.2.2"],
    modalContent: <TextContrastSandbox />, // Pass the component directly
  },
  // { ...next card }
];

export default function Page() {
  return (
    <Container>
      <ExamplesHero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {examplesData.map((data, index) => (
          <ExampleCard
            key={index}
            title={data.title}
            paragraph={data.paragraph}
            imageSrc={data.imageSrc}
            tags={data.tags}
            modalContent={data.modalContent}
          />
        ))}
      </div>
    </Container>
  );
}
