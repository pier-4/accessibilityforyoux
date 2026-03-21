import Image from "next/image";
import PillButton from "../PillButton";

export default function SectionCard({
  section,
  title,
  paragraph,
  imageSrc,
  buttonChildren,
  buttonhref,
  custombg,
}) {
  return (
    <article className="flex flex-col lg:max-w-[384px] w-full h-full bg-main-bg cards-border rounded-[2.5rem] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Responsive Image Container */}
      <figure
        className={`relative w-full min-h-[225px] aspect-[4/3] rounded-3xl overflow-hidden ${custombg || "bg-csm-red-bg"}  mb-6 sm:mb-8`}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          quality={100}
          placeholder={imageSrc?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imageSrc?.blurDataURL}
          className=" object-scale-down p-4 sm:p-8"
        />
      </figure>

      {/* Text Content */}
      <div className="flex flex-col flex-1">
        <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-500 mb-1">
          {section}
        </span>

        <h2 className="font-rubik font-semibold text-2xl sm:text-[32px] leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4">
          {title}
        </h2>

        <p className=" text-base text-secondary-hierarchy  leading-relaxed mb-8">
          {paragraph}
        </p>

        {/* Button Container - mt-auto pushes it to the bottom if cards are different heights */}
        {/* <div className="mt-auto w-full">{buttonChildren}</div> */}
        <div className="mt-auto w-full">
          <PillButton
            href={buttonhref}
            className="w-full"
            variant="secondary"
            fill="full"
          >
            {buttonChildren}
          </PillButton>
        </div>
      </div>
    </article>
  );
}
