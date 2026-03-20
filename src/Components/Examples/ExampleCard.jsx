"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalContainer from "@/Components/Examples/Modals/ModalContainer";

const getTagStyle = (tag) => {
  if (tag.includes("WCAG 1")) return "bg-[#ffd6cd] text-[#803713]";
  if (tag.includes("WCAG 2")) return "bg-[#c8e6dc] text-[#29815b]";
  if (tag.includes("WCAG 3")) return "bg-[#e8ecff] text-[#535bbf]";
  if (tag.includes("WCAG 4")) return "bg-[#ffe397] text-[#7a5400]";
  return "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
};

export default function ExampleCard({
  title,
  paragraph,
  imageSrc,
  tags = [],
  modalContent,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="flex flex-col lg:max-w-[384px] w-full h-full bg-main-bg border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
        <figure className="relative w-full min-h-[225px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#E8ECFF] mb-6 sm:mb-8">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-scale-down p-4 sm:p-8"
            />
          )}
        </figure>
        <div className="flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-semibold rounded-full ${getTagStyle(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-rubik font-bold text-2xl sm:text-[32px] leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-base text-secondary-hierarchy leading-relaxed mb-8">
            {paragraph}
          </p>
          <div className="mt-auto w-full">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-hover py-4 px-6 rounded-full font-semibold transition-all"
            >
              Try this example
            </button>
          </div>
        </div>
      </article>

      <ModalContainer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {modalContent}
      </ModalContainer>
    </>
  );
}
