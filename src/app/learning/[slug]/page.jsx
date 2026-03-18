// CONTROLLER: A dynamic route that catches /learning/[slug] URLs. It fetches the matching article from the database, builds the section-specific Table of Contents, and passes the data to the UI template.

import ArticleTemplate from "@/Components/Learning/ArticleTemplate";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";

// 1. Make the component async
export default async function ArticlePage({ params }) {
  const { slug } = await params;

  // 1. Find the current article and its position
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const article = articles[currentIndex];

  if (!article) return notFound();

  // 2. Calculate dynamic pagination based on array position
  const prevArticle = articles[currentIndex - 1] || null;
  const nextArticle = articles[currentIndex + 1] || null;

  const pagination = {
    prev: prevArticle
      ? { href: `/learning/${prevArticle.slug}`, title: prevArticle.title }
      : null,
    next: nextArticle
      ? { href: `/learning/${nextArticle.slug}`, title: nextArticle.title }
      : null,
  };

  // 3. Build TOC (same as before)
  const tocItems = articles
    .filter((a) => a.sectionTitle === article.sectionTitle)
    .map((a) => ({
      title: a.title,
      href: `/learning/${a.slug}`,
      isActive: a.slug === slug,
      isChild: !!a.parentId,
    }));

  return (
    <ArticleTemplate
      article={article}
      tocItems={tocItems}
      pagination={pagination}
    />
  );
}
