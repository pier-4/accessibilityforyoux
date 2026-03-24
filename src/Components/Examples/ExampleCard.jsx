"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalContainer from "@/Components/Examples/Modals/ModalContainer";
import PillButton from "../PillButton";

// const getTagStyle = (tag) => {
//   if (tag.includes("WCAG 1")) return "bg-[#ffd6cd] text-[#803713]";
//   if (tag.includes("WCAG 2")) return "bg-[#c8e6dc] text-[#1D5A40]";
//   if (tag.includes("WCAG 3")) return "bg-[#e8ecff] text-[#535bbf]";
//   if (tag.includes("WCAG 4")) return "bg-[#ffe397] text-[#7a5400]";
//   return "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
// };

// swapped to adjacent colors instead, this way there is no confusion between red and green meaning corrent / wrong
const getTagStyle = (tag) => {
  if (tag.includes("WCAG 1")) return "bg-blue-100 text-blue-800";
  if (tag.includes("WCAG 2")) return "bg-purple-100 text-purple-800";
  if (tag.includes("WCAG 3")) return "bg-teal-100 text-teal-800";
  if (tag.includes("WCAG 4")) return "bg-indigo-100 text-indigo-800";
  return "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
};

// const getTagStyle = (tag) => {
//   if (tag.includes("WCAG 1")) return "bg-[#E0E7FF] text-[#3730A3]"; // Indigo
//   if (tag.includes("WCAG 2")) return "bg-[#F3E8FF] text-[#6B21A8]"; // Purple
//   if (tag.includes("WCAG 3")) return "bg-[#CCFBF1] text-[#0F766E]"; // Teal
//   if (tag.includes("WCAG 4")) return "bg-[#FFEDD5] text-[#9A3412]"; // Orange
//   return "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
// };

export default function ExampleCard({
  title,
  paragraph,
  imageSrc,
  tags = [],
  modalContent,
  clickableCard = true,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CardContent = (
    <>
      {/* Decorative image container — plain div, no figure since there's no figcaption */}
      <div className="relative w-full min-h-[225px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#E8ECFF] mb-6 sm:mb-8">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="" // decorative — card label/title already describes the content
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-scale-down p-4 sm:p-8"
          />
        )}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-semibold rounded-full ${getTagStyle(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* span styled as heading — h2 is invalid inside a button */}
        <span className="font-rubik font-bold text-2xl sm:text-[32px] leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4 block">
          {title}
        </span>

        <p
          className={`text-base text-secondary-hierarchy leading-relaxed ${
            clickableCard ? "mb-0" : "mb-8"
          }`}
        >
          {paragraph}
        </p>

        {!clickableCard && (
          <div className="mt-auto w-full">
            <PillButton
              onClick={() => setIsModalOpen(true)}
              variant="secondary"
              className="w-full"
            >
              Try this example
            </PillButton>
          </div>
        )}
      </div>
    </>
  );

  const containerClasses = `flex flex-col lg:max-w-[384px] w-full bg-main-bg cards-border rounded-[2.5rem] p-6 sm:p-8 shadow-sm transition-all duration-200 ${
    clickableCard
      ? "h-fit hover:shadow-lg motion-safe:hover:-translate-y-2 group"
      : "h-full hover:shadow-md"
  }`;

  return (
    <>
      {clickableCard ? (
        // button wraps a div (not article/h2) — valid HTML
        <button
          onClick={() => setIsModalOpen(true)}
          className="block h-fit lg:max-w-[384px] w-full text-left rounded-[2.5rem] focus-visible:rounded-[2.5rem] focus-visible:outline-4 cursor-pointer active:scale-95 transition-transform duration-200"
          aria-label={`Open example: ${title}`}
        >
          <div className={containerClasses}>{CardContent}</div>
        </button>
      ) : (
        // static variant keeps article + heading hierarchy intact
        <article className={containerClasses}>
          <h2 className="font-rubik font-bold text-2xl sm:text-[32px] leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4 sr-only">
            {title}
          </h2>
          {CardContent}
        </article>
      )}

      <ModalContainer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {modalContent}
      </ModalContainer>
    </>
  );
}
