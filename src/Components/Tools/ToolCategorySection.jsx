import React from "react";
import ToolCard from "./ToolCard";

export default function ToolCategorySection({
  icon: Icon,
  title,
  count,
  tools,
}) {
  return (
    <section className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 mb-16 md:mb-24">
      {/* Category Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center size-10 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
          <Icon className="size-5" strokeWidth={2} />
        </div>
        <h2 className=" text-xl lg:text-2xl font-bold font-rubik text-primary-foreground flex items-baseline gap-1">
          {title}
          <span className="text-lg text-zinc-500 font-medium ml-1">
            ({count})
          </span>
        </h2>
      </div>

      {/* Responsive Card Grid */}
      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,384px),1fr))] gap-8 items-start"> */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-start">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            section={tool.section}
            title={tool.title}
            paragraph={tool.paragraph}
            imageSrc={tool.imageSrc}
            buttonChildren={tool.buttonChildren}
            buttonhref={tool.buttonhref}
          />
        ))}
      </div>
    </section>
  );
}
