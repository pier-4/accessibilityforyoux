import Image from "next/image";
import Link from "next/link";

export default function SectionCard({
  section,
  title,
  paragraph,
  imageSrc,
  buttonhref,
  custombg,
}) {
  return (
    <article className="relative flex flex-col h-full w-full lg:max-w-[384px] card-background cards-border rounded-[2.5rem] p-6 sm:p-8 shadow-sm transition-all duration-200 hover:shadow-lg motion-safe:hover:-translate-y-2 cursor-pointer group active:scale-95 focus-within:ring-4 focus-within:ring-red-700 dark:focus-within:ring-red-500">
      <div
        className={`relative w-full min-h-[225px] aspect-[4/3] rounded-3xl overflow-hidden ${
          custombg || "bg-csm-red-bg"
        } mb-6 sm:mb-8`}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 384px"
          quality={100}
          className="object-scale-down p-4 sm:p-8"
        />
      </div>

      <div className="flex flex-col flex-1">
        <span className="font-rubik font-medium text-sm text-zinc-600 dark:text-zinc-400 mb-1">
          {section}
        </span>

        <h2 className="font-rubik font-semibold text-2xl sm:text-[32px] leading-tight tracking-tight text-primary-foreground mb-3 sm:mb-4 card-text-hover">
          <Link
            href={buttonhref}
            className="focus:outline-none after:absolute after:inset-0 rounded-[2.5rem]"
          >
            {title}
          </Link>
        </h2>

        <p className="text-base text-secondary-hierarchy leading-relaxed mb-2">
          {paragraph}
        </p>
      </div>
    </article>
  );
}
