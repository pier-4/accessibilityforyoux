import Image from "next/image";
import PillButton from "../PillButton";

export default function ToolCard({
  section,
  title,
  paragraph,
  imageSrc,
  buttonChildren,
  buttonhref,
}) {
  return (
    <article className="flex flex-col lg:max-w-[384px] w-full h-full bg-main-bg cards-border rounded-[2.5rem] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Icon Container (Fixed size instead of full width) */}
      <figure className="relative size-20  rounded-3xl overflow-hidden mb-6 shrink-0 shadow-sm border bg-zinc-100 border-zinc-100 dark:border-zinc-800">
        <Image
          src={imageSrc}
          alt={`${title} logo`}
          fill
          sizes="(max-width: 768px) 80px, 96px"
          quality={100}
          className="object-cover"
        />
      </figure>

      {/* Text Content */}
      <div className="flex flex-col flex-1">
        <span className="font-rubik font-semibold text-sm text-zinc-600 dark:text-zinc-400 mb-1">
          {section}
        </span>

        <h2 className="font-rubik font-bold text-2xl sm:text-3xl leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4">
          {title}
        </h2>

        <p className="text-base text-secondary-hierarchy leading-relaxed mb-8">
          {paragraph}
        </p>

        {/* Button Container - Pushed to bottom */}
        {/* Note: I used variant="outline" to match Figma. Change to "secondary" if needed. */}
        <div className="mt-auto w-full">
          <PillButton
            href={buttonhref}
            variant="secondary"
            fill="full"
            target="_blank"
            className="w-full"
          >
            {buttonChildren}
          </PillButton>
        </div>
      </div>
    </article>
  );
}
