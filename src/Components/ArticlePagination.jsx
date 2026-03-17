import ArticleNav from "./ArticleNav";

export default function ArticlePagination({
  prevHref,
  prevTitle = "Previous Article",
  prevSubtitle = "Previous",
  nextHref,
  nextTitle = "Next Article",
  nextSubtitle = "Next",
}) {
  return (
    <nav className="flex justify-between items-center w-full mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 max-w-7xl mx-auto pb-10">
      {prevHref ? (
        <ArticleNav
          direction="prev"
          href={prevHref}
          subtitle={prevSubtitle}
          title={prevTitle}
        />
      ) : (
        <div /> /* Keeps flexbox alignment if there is no previous article */
      )}

      {nextHref && (
        <ArticleNav
          direction="next"
          href={nextHref}
          subtitle={nextSubtitle}
          title={nextTitle}
        />
      )}
    </nav>
  );
}
