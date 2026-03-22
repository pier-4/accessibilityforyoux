import Image from "next/image";
import Link from "next/link";
import PillButton from "../PillButton";

export default function ToolCard({
  section,
  title,
  paragraph,
  imageSrc,
  buttonChildren,
  buttonhref,
  clickableCard = true,
}) {
  const CardContent = (
    <>
      {/* figure → div (no figcaption, so figure adds no semantic value) */}
      <div className="relative size-20 rounded-full overflow-hidden mb-6 shrink-0 shadow-sm bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={imageSrc}
          alt={`${title} logo`} // kept — logo image is identity-carrying, not decorative
          fill
          sizes="(max-width: 768px) 80px, 96px"
          quality={100}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1">
        <span className="font-rubik font-semibold text-sm text-zinc-600 dark:text-zinc-400 mb-1">
          {section}
        </span>

        <h2 className="font-rubik font-bold text-2xl sm:text-3xl leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4">
          {title}
        </h2>

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
              href={buttonhref}
              variant="secondary"
              fill="full"
              target="_blank"
              className="w-full"
            >
              {buttonChildren}
            </PillButton>
          </div>
        )}
      </div>
    </>
  );

  const containerClasses = `flex flex-col lg:max-w-[384px] w-full bg-main-bg cards-border rounded-[2.5rem] p-6 sm:p-8 shadow-sm transition-all duration-200 ${
    clickableCard
      ? "h-fit hover:shadow-lg hover:-translate-y-2 cursor-pointer group active:scale-95"
      : "h-full hover:shadow-md"
  }`;

  if (clickableCard) {
    return (
      <Link
        href={buttonhref}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-fit lg:max-w-[384px] w-full rounded-[2.5rem] focus-visible:rounded-[2.5rem] focus-visible:outline-4"
        aria-label={`${title} - ${section}`}
      >
        <article className={containerClasses}>{CardContent}</article>
      </Link>
    );
  }

  return <article className={containerClasses}>{CardContent}</article>;
}
