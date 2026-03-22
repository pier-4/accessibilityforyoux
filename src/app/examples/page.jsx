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
    tags: ["WCAG 1.4.3 (AA)", "WCAG 1.4.6 (AAA)"],
    modalContent: <TextContrastSandbox />, // Pass the component directly
  },
  {
    title: "Tab order & focus",
    paragraph:
      "Match DOM order to visual layout and keep focus outlines visible for keyboard navigation.",
    imageSrc: imgContrast,
    tags: ["WCAG 2.3.4 (A)", "WCAG 2.4.7 (AA)"],
    modalContent: <TabOrderSandbox />, // Pass the component directly
  },
  {
    title: "Aria Labels",
    paragraph:
      "Hear how screen readers interpret icon-only buttons with and without proper aria-label attributes.",
    imageSrc: imgContrast,
    tags: ["WCAG 1.1.1 (A)", "WCAG 4.1.2 (A)"],
    modalContent: <AriaLabelSandbox />, // Pass the component directly
  },
  {
    title: "Touch Targets",
    paragraph:
      "Compare interactive tap area sizes against WCAG and mobile UI standards.",
    imageSrc: imgContrast,
    tags: ["WCAG 2.5.8 (AA)", "WCAG 2.5.5 (AAA)"],
    modalContent: <TouchAreaSandbox />, // Pass the component directly
  },
  {
    title: "Color-Independence",
    paragraph:
      "See why relying solely on color fails color-blind users, and how icons provide essential context.",
    imageSrc: imgContrast,
    tags: ["WCAG 1.4.1 (A)", "WCAG 3.3.2 (A)"],
    modalContent: <ColorBlindSandbox />, // Pass the component directly
  },
  {
    title: "Semantic HTML",
    paragraph:
      "Compare native buttons versus generic <div> elements for keyboard and screen reader accessibility.",
    imageSrc: imgContrast,
    tags: ["WCAG 1.3.1 (A)", "WCAG 2.1.1 (A)", "WCAG 4.1.2 (A)"],
    modalContent: <SemanticHtmlSandbox />, // Pass the component directly
  },
  {
    title: "Reduced Motion",
    paragraph:
      "Swap heavy animations for subtle transitions to respect OS-level reduced motion preferences",
    imageSrc: imgContrast,
    tags: ["WCAG 2.2.2 (A)", "WCAG 2.3.3 (AAA)"],
    modalContent: <ReducedMotionSandbox />, // Pass the component directly
  },
  {
    title: "REM vs Pixels",
    paragraph:
      "See why rem units properly scale with user browser settings while px values remain rigidly fixed.",
    imageSrc: imgContrast,
    tags: ["WCAG 1.4.4 (A)", "WCAG 1.4.12 (AA)"],
    modalContent: <RemUnitsSandbox />, // Pass the component directly
  },
  {
    title: "Responsive design",
    paragraph:
      "Observe how flexible layouts wrap content smoothly when zoomed in, preventing horizontal scrolling.",
    imageSrc: imgContrast,
    tags: ["WCAG 1.4.10 (AA)"],
    modalContent: <ResponsiveLayoutSandbox />, // Pass the component directly
  },
  {
    title: "Heading structure",
    paragraph:
      "Learn why skipping heading levels breaks document outlines and confuses screen reader navigation",
    imageSrc: imgContrast,
    tags: ["WCAG 1.3.1 (A)", "WCAG 2.4.6 (AA)", "WCAG 2.4.10 (AAA)"],
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
