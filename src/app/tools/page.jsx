import React from "react";
import ToolCategorySection from "@/Components/Tools/ToolCategorySection";
import { PenTool, Code2 } from "lucide-react";
import ToolCard from "@/Components/Tools/ToolCard";
import Container from "@/Components/Container";
import ToolsHero from "@/Components/Tools/ToolsHero";
import img1 from "@public/tools/1.png";
import whocanuseimg from "@public/tools/whocanuse.png";
import hemingwayimg from "@public/tools/hemingway.jpg";
import screenreaderimg from "@public/tools/screenreader2.png";
import waveimg from "@public/tools/wave.png";
import lighthouseimg from "@public/tools/lighthouse.png";
// import img3 from "@/assets/tools/3.png";
// import img4 from "@/assets/tools/4.png";
// import img5 from "@/assets/tools/5.png";

export const metadata = {
  alternates: {
    canonical: "https://accessibilityforyoux.org/tools", // Sostituisci con l'URL corretto
  },
};

// 1. Define your data arrays here, all the content for the cards should come from these arrays. This keeps your component clean and makes it easy to update content in the future.
const designTools = [
  {
    section: "Contrast & Accessibility checker",
    title: "Stark for Figma",
    paragraph:
      "With tools like Contrast Checker, Focus Order, Alt-Text Annotations, Vision Simulator, and more all in one place.",
    imageSrc: img1,
    buttonChildren: "Visit Stark's website",
    buttonhref:
      "https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker",
  },
  {
    section: "Visual impairments simulator",
    title: "WhoCanUse",
    paragraph:
      "It's a tool that shows how different color combinations look to people with various visual impairments, helping you make more inclusive color choices.",
    imageSrc: whocanuseimg,
    buttonChildren: "Visit WhoCanUse",
    buttonhref: "https://www.whocanuse.com",
  },
  {
    section: "Text readability checker",
    title: "Hemingway App",
    paragraph:
      "Highlights complex sentences, passive voice, and readability issues so your written content stays clear and easy to understand.",
    imageSrc: hemingwayimg,
    buttonChildren: "Visit Hemingway App",
    buttonhref: "https://hemingwayapp.com/",
  },
];

const devTools = [
  // Add your dev tools here
  {
    section: "Screen readers",
    title: "Screen readers",
    paragraph:
      "Allow you to experience your website as someone using assistive technology would.",
    imageSrc: screenreaderimg,
    buttonChildren: "Learn more",
    buttonhref: "/tools/screen-readers",
  },
  {
    section: "Accessibility analyzer",
    title: "Wave - web plugin",
    paragraph:
      "Analyzes web pages for accessibility errors and provides visual feedback on elements that may need improvement.",
    imageSrc: waveimg,
    buttonChildren: "Visit Wave",
    buttonhref: "https://wave.webaim.org/",
  },
  {
    section: "Automated web accessibility audit",
    title: "Chrome Lighthouse",
    paragraph:
      "Audits your web pages for accessibility, performance, and best practices, offering detailed reports with actionable suggestions.",
    imageSrc: lighthouseimg,
    buttonChildren: "Visit Lighthouse",
    buttonhref: "https://developer.chrome.com/docs/lighthouse/overview",
  },
];

function page() {
  return (
    <Container>
      <ToolsHero />
      {/* 2. Implement the sections */}
      <div className="flex flex-col gap-12 max-sm:pt-16 py-12">
        <ToolCategorySection
          icon={PenTool}
          title="Visual design"
          count={3}
          tools={designTools}
        />

        {/* Pass devTools array when you populate it */}
        <ToolCategorySection
          icon={Code2}
          title="Web development"
          count={3}
          tools={devTools}
        />
      </div>
    </Container>
  );
}

export default page;
