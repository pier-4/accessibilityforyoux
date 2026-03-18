import React from "react";
import ToolCategorySection from "@/components/Tools/ToolCategorySection";
import { PenTool, Code2 } from "lucide-react";
import ToolCard from "@/Components/Tools/ToolCard";
import Container from "@/Components/Container";
import ToolsHero from "@/Components/Tools/ToolsHero";
import img1 from "@public/tools/1.png";
// import img2 from "@/assets/tools/2.png";
// import img3 from "@/assets/tools/3.png";
// import img4 from "@/assets/tools/4.png";
// import img5 from "@/assets/tools/5.png";

// 1. Define your data arrays here, all the content for the cards should come from these arrays. This keeps your component clean and makes it easy to update content in the future.
const designTools = [
  {
    section: "Contrast & Accessibility checker",
    title: "Stark - Figma Plugin",
    paragraph:
      "With tools like Contrast Checker, Focus Order, Alt-Text Annotations, Vision Simulator, and more all in one place.",
    imageSrc: img1,
    buttonChildren: "Check out Stark's website",
    buttonhref: "#",
  },
];

const devTools = [
  // Add your dev tools here
  {
    section: "Contrast & Accessibility checker",
    title: "Stark - Figma Plugin",
    paragraph:
      "With tools like Contrast Checker, Focus Order, Alt-Text Annotations, Vision Simulator, and more all in one place.",
    imageSrc: img1,
    buttonChildren: "Check out Stark's website",
    buttonhref: "#",
  },
];

function page() {
  return (
    <Container>
      <ToolsHero />
      {/* 2. Implement the sections */}
      <div className="flex flex-col gap-12 py-12">
        <ToolCategorySection
          icon={PenTool}
          title="Visual design"
          count={6}
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
