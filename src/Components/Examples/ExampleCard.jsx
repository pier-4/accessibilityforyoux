"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PillButton from "../PillButton";

const getTagStyle = (tag) => {
  if (tag.includes("WCAG 1")) return "bg-blue-100 text-blue-800";
  if (tag.includes("WCAG 2")) return "bg-purple-100 text-purple-800";
  if (tag.includes("WCAG 3")) return "bg-teal-100 text-teal-800";
  if (tag.includes("WCAG 4")) return "bg-indigo-100 text-indigo-800";
  return "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
};

export default function ExampleCard({
  id,
  title,
  paragraph,
  imageSrc,
  tags = [],
  clickableCard = true,
}) {
  const router = useRouter();

  const CardContent = (
    <>
      <div className="relative w-full min-h-[225px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#E8ECFF] mb-6 sm:mb-8">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
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

        <span className="font-rubik font-bold text-2xl sm:text-[32px] leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4 block group-hover:text-primary-hover">
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
              onClick={() => router.push(`?modal=${id}`, { scroll: false })}
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

  const containerClasses = `flex flex-col lg:max-w-[384px] w-full card-background cards-border rounded-[2.5rem] p-6 sm:p-8 shadow-sm transition-all duration-200 ${
    clickableCard
      ? "h-full hover:shadow-lg motion-safe:hover:-translate-y-2 group"
      : "h-full hover:shadow-md"
  }`;

  return (
    <>
      {clickableCard ? (
        <button
          onClick={() => router.push(`?modal=${id}`, { scroll: false })}
          className="block h-full lg:max-w-[384px] w-full text-left rounded-[2.5rem] focus-visible:rounded-[2.5rem] focus-visible:outline-4 cursor-pointer active:scale-95 transition-transform duration-200"
          aria-label={`Open example: ${title}`}
        >
          <div className={containerClasses}>{CardContent}</div>
        </button>
      ) : (
        <article className={containerClasses}>
          <h2 className="font-rubik font-bold text-2xl sm:text-[32px] leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4 sr-only ">
            {title}
          </h2>
          {CardContent}
        </article>
      )}
    </>
  );
}
