"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ModalContainer from "@/components/Examples/Modals/ModalContainer";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/Container";
import ExamplesHero from "@/components/Examples/ExamplesHero";
import ExampleCard from "@/components/Examples/ExampleCard";
import imgContrast from "@public/examples/contrast.svg";
import imgAria from "@public/examples/aria-label.svg";
import imgColorIndependence from "@public/examples/color-independence.svg";
import imgHeadStructure from "@public/examples/heading-structure.svg";
import imgPxVsRem from "@public/examples/px-vs-rem.svg";
import imgReduceMotion from "@public/examples/reduce-motion.svg";
import imgResponsive from "@public/examples/responsive.svg";
import imgSemanticHtml from "@public/examples/semantic-html.svg";
import imgTabOrder from "@public/examples/tab-order.svg";
import imgTouchTargets from "@public/examples/touch-targets.svg";
import TextContrastSandbox from "@/components/Examples/Modals/TextContrastSandbox";
import TabOrderSandbox from "@/components/Examples/Modals/TabOrderSandbox";
import AriaLabelSandbox from "@/components/Examples/Modals/AriaLabelSandbox";
import TouchAreaSandbox from "@/components/Examples/Modals/TouchAreaSandbox";
import ColorBlindSandbox from "@/components/Examples/Modals/ColorBlindSandbox";
import SemanticHtmlSandbox from "@/components/Examples/Modals/SemanticHtmlSandbox";
import ReducedMotionSandbox from "@/components/Examples/Modals/ReduceMotionSandbox";
import RemUnitsSandbox from "@/components/Examples/Modals/RemUnitsSandbox";
import ResponsiveLayoutSandbox from "@/components/Examples/Modals/ResponsiveLayoutSandbox";
import HeadingStructureSandbox from "@/components/Examples/Modals/HeadingStructureSandbox";

const examplesData = [
  {
    id: "text-contrast",
    title: "Good and bad text contrast",
    paragraph: "Examples of Accessible vs non-Accessible text contrast",
    imageSrc: imgContrast,
    tags: ["WCAG 1.4.3 (AA)", "WCAG 1.4.6 (AAA)"],
    modalContent: <TextContrastSandbox />, // Pass the component directly
  },
  {
    id: "tab-order",
    title: "Tab order & focus",
    paragraph:
      "Match DOM order to visual layout and keep focus outlines visible for keyboard navigation.",
    imageSrc: imgTabOrder,
    tags: ["WCAG 2.3.4 (A)", "WCAG 2.4.7 (AA)"],
    modalContent: <TabOrderSandbox />, // Pass the component directly
  },
  {
    id: "aria-labels",
    title: "Aria Labels",
    paragraph:
      "Hear how screen readers interpret icon-only buttons with and without proper aria-label attributes.",
    imageSrc: imgAria,
    tags: ["WCAG 1.1.1 (A)", "WCAG 4.1.2 (A)"],
    modalContent: <AriaLabelSandbox />, // Pass the component directly
  },
  {
    id: "touch-targets",
    title: "Touch Targets",
    paragraph:
      "Small tap targets are a real barrier for users with motor impairments. See how size affects usability.",
    imageSrc: imgTouchTargets,
    tags: ["WCAG 2.5.8 (AA)", "WCAG 2.5.5 (AAA)"],
    modalContent: <TouchAreaSandbox />, // Pass the component directly
  },
  {
    id: "color-independence",
    title: "Color-Independence",
    paragraph:
      "See why relying solely on color fails color-blind users, and how icons provide essential context.",
    imageSrc: imgColorIndependence,
    tags: ["WCAG 1.4.1 (A)", "WCAG 3.3.2 (A)"],
    modalContent: <ColorBlindSandbox />, // Pass the component directly
  },
  {
    id: "semantic-html",
    title: "Semantic HTML",
    paragraph:
      "Compare native buttons versus generic <div> elements for keyboard and screen reader accessibility.",
    imageSrc: imgSemanticHtml,
    tags: ["WCAG 1.3.1 (A)", "WCAG 2.1.1 (A)", "WCAG 4.1.2 (A)"],
    modalContent: <SemanticHtmlSandbox />, // Pass the component directly
  },
  {
    id: "reduce-motion",
    title: "Reduced Motion",
    paragraph:
      "Swap heavy animations for subtle transitions to respect OS-level reduced motion preferences",
    imageSrc: imgReduceMotion,
    tags: ["WCAG 2.2.2 (A)", "WCAG 2.3.3 (AAA)"],
    modalContent: <ReducedMotionSandbox />, // Pass the component directly
  },
  {
    id: "px-vs-rem",
    title: "REM vs Pixels",
    paragraph:
      "See why rem units properly scale with user browser settings while px values remain rigidly fixed.",
    imageSrc: imgPxVsRem,
    tags: ["WCAG 1.4.4 (A)", "WCAG 1.4.12 (AA)"],
    modalContent: <RemUnitsSandbox />, // Pass the component directly
  },
  {
    id: "responsive-layout",
    title: "Responsive Design",
    paragraph:
      "Observe how flexible layouts wrap content smoothly when zoomed in, preventing horizontal scrolling.",
    imageSrc: imgResponsive,
    tags: ["WCAG 1.4.10 (AA)"],
    modalContent: <ResponsiveLayoutSandbox />, // Pass the component directly
  },
  {
    id: "heading-structure",
    title: "Heading Structure",
    paragraph:
      "Learn why skipping heading levels breaks document outlines and confuses screen reader navigation",
    imageSrc: imgHeadStructure,
    tags: ["WCAG 1.3.1 (A)", "WCAG 2.4.6 (AA)", "WCAG 2.4.10 (AAA)"],
    modalContent: <HeadingStructureSandbox />, // Pass the component directly
  },
  // { ...next card }
];

function ModalHandler({ data }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeModalId = searchParams.get("modal");

  const activeIndex = data.findIndex((ex) => ex.id === activeModalId);
  const activeData = activeIndex !== -1 ? data[activeIndex] : null;

  if (!activeData) return null;

  const navigate = (direction) => {
    const newIndex = (activeIndex + direction + data.length) % data.length;
    router.push(`?modal=${data[newIndex].id}`, { scroll: false });
  };

  const closeModal = () => {
    router.push(window.location.pathname, { scroll: false });
  };

  return (
    <ModalContainer isOpen={true} onClose={closeModal}>
      <div className="flex flex-col w-full">
        {/* Modal Content */}
        <div className="w-full">{activeData.modalContent}</div>

        {/* Navigation Arrows Below */}
        <div className="flex justify-between items-center w-full mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-0 md:gap-1 px-3 md:px-4 py-2 text-sm font-medium rounded-full border bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
          >
            <ChevronLeft size={16} />
            Previous example
          </button>

          <button
            onClick={() => navigate(1)}
            className="flex items-center gap-0 md:gap-1 px-3 md:px-4 py-2 text-sm font-medium rounded-full border bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
          >
            Next example
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default function Page() {
  return (
    <Container>
      <ExamplesHero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {examplesData.map((data) => (
          <ExampleCard
            key={data.id}
            id={data.id} // Pass ID to the card
            title={data.title}
            paragraph={data.paragraph}
            imageSrc={data.imageSrc}
            tags={data.tags}
            clickableCard={true}
            // Remove modalContent from being passed here
          />
        ))}
      </div>

      <Suspense fallback={null}>
        <ModalHandler data={examplesData} />
      </Suspense>
    </Container>
  );
}
