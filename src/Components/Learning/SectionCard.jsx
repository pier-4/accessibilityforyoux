import Image from "next/image";
import Link from "next/link";
import PillButton from "../PillButton";

export default function SectionCard({
  section,
  title,
  paragraph,
  imageSrc,
  imageAlt,
  buttonChildren,
  buttonhref,
  custombg,
  clickableCard = false,
}) {
  const CardContent = (
    <>
      {/* figure → div (no figcaption, so figure adds no semantic value) */}
      <div
        className={`relative w-full min-h-[225px] aspect-[4/3] rounded-3xl overflow-hidden ${
          custombg || "bg-csm-red-bg"
        } mb-6 sm:mb-8`}
      >
        <Image
          src={imageSrc}
          alt="" // decorative — Link's aria-label already describes the card
          fill
          priority
          sizes="(max-width: 768px) 100vw, 384px"
          quality={100}
          // placeholder={imageSrc?.blurDataURL ? "blur" : "empty"}
          // blurDataURL={imageSrc?.blurDataURL}
          className="object-scale-down p-4 sm:p-8"
        />
      </div>

      <div className="flex flex-col flex-1">
        <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-1">
          {section}
        </span>

        <h2 className="font-rubik font-semibold text-2xl sm:text-[32px] leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4 group-hover:text-primary ">
          {title}
        </h2>

        <p
          className={`text-base text-secondary-hierarchy leading-relaxed ${
            clickableCard ? "mb-2" : "mb-8"
          }`}
        >
          {paragraph}
        </p>

        {!clickableCard && (
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
        )}
      </div>
    </>
  );

  const containerClasses = `flex flex-col lg:max-w-[384px] w-full card-background cards-border rounded-[2.5rem] p-6 sm:p-8 shadow-sm transition-all duration-200 ${
    clickableCard
      ? "h-full hover:shadow-lg motion-safe:hover:-translate-y-2 cursor-pointer group active:scale-95"
      : "h-full hover:shadow-md"
  }`;

  if (clickableCard) {
    return (
      <Link
        href={buttonhref}
        className="block h-full lg:max-w-[384px] w-full rounded-[2.5rem] focus-visible:rounded-[2.5rem] focus-visible:outline-4"
        aria-label={`${title} - ${section}`}
      >
        <article className={containerClasses}>{CardContent}</article>
      </Link>
    );
  }

  // id="sectionCard" removed — duplicate IDs break validity when multiple cards render
  return <article className={containerClasses}>{CardContent}</article>;
}
