import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArticleNav({
  href,
  direction = "next",
  title = "Next Article",
  subtitle = "Next",
}) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ChevronLeft : ChevronRight;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 text-primary hover:opacity-80 transition-all group w-fit max-w-[300px]  ${
        isPrev ? "flex-row text-left" : "flex-row-reverse text-right"
      }`}
    >
      <Icon
        className={`size-6 transition-transform ${
          isPrev ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
        }`}
      />
      <div className={`flex flex-col ${isPrev ? "items-start" : "items-end"}`}>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </span>
        <span className="text-md font-semibold">{title}</span>
      </div>
    </Link>
  );
}
