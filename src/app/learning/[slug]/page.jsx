// CONTROLLER: A dynamic route that catches /learning/[slug] URLs. It fetches the matching article from the database, builds the section-specific Table of Contents, and passes the data to the UI template.

import ArticleTemplate from "@/Components/Learning/ArticleTemplate";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";

// 1. Make the component async
export default async function ArticlePage({ params }) {
  // 2. Await the params
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  const tocItems = articles
    .filter((a) => a.sectionTitle === article.sectionTitle)
    .map((a) => ({
      title: a.title,
      href: `/learning/${a.slug}`,
      isActive: a.slug === slug,
    }));

  return <ArticleTemplate article={article} tocItems={tocItems} />;
}
