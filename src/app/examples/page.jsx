import React from "react";
import Container from "@/Components/Container";
import ExamplesHero from "@/Components/Examples/ExamplesHero";
import ExampleCard from "@/Components/Examples/ExampleCard";
import imgContrast from "@public/examples/contrast.svg"; // Your imported image
import TextContrastSandbox from "@/Components/Examples/Modals/TextContrastSandbox";
import TabOrderSandbox from "@/Components/Examples/Modals/TabOrderSandbox";
import AriaLabelSandbox from "@/Components/Examples/Modals/AriaLabelSandbox";
import TouchAreaSandbox from "@/Components/Examples/Modals/TouchAreaSandbox";
import ColorBlindSandbox from "@/Components/Examples/Modals/ColorBlindSandbox";
import SemanticHtmlSandbox from "@/Components/Examples/Modals/SemanticHtmlSandbox";
import ReducedMotionSandbox from "@/Components/Examples/Modals/ReduceMotionSandbox";
import RemUnitsSandbox from "@/Components/Examples/Modals/RemUnitsSandbox";
import ResponsiveLayoutSandbox from "@/Components/Examples/Modals/ResponsiveLayoutSandbox";
import HeadingStructureSandbox from "@/Components/Examples/Modals/HeadingStructureSandbox";

const examplesData = [
  {
    title: "Good and bad text contrast",
    paragraph: "Examples of Accessible (AA) vs non-Accessible text contrast...",
    imageSrc: imgContrast,
    tags: ["WCAG 1.2.4", "WCAG 2.2.2"],
    modalContent: <TextContrastSandbox />, // Pass the component directly
  },
  {
    title: "Tab focus and tab order",
    paragraph: "Exampl showing how tab order and focus work",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <TabOrderSandbox />, // Pass the component directly
  },
  {
    title: "Aria Label sandbox",
    paragraph: "placehold",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <AriaLabelSandbox />, // Pass the component directly
  },
  {
    title: "Touch-Area sandbox",
    paragraph: "placehold",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <TouchAreaSandbox />, // Pass the component directly
  },
  {
    title: "Color-Independence sandbox",
    paragraph: "placeholder",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <ColorBlindSandbox />, // Pass the component directly
  },
  {
    title: "Semantic-HTML",
    paragraph: "placeholder",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <SemanticHtmlSandbox />, // Pass the component directly
  },
  {
    title: "Reduce-motion",
    paragraph: "placeholder",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <ReducedMotionSandbox />, // Pass the component directly
  },
  {
    title: "Rem-Units",
    paragraph: "placeholder",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <RemUnitsSandbox />, // Pass the component directly
  },
  {
    title: "Responsive-design",
    paragraph: "placeholder",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <ResponsiveLayoutSandbox />, // Pass the component directly
  },
  {
    title: "Heading-structure",
    paragraph: "placeholder",
    imageSrc: imgContrast,
    tags: ["WCAG 3.2.4", "WCAG 4.2.2"],
    modalContent: <HeadingStructureSandbox />, // Pass the component directly
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
