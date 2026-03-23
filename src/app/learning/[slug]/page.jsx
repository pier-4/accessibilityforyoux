// CONTROLLER: A dynamic route that catches /learning/[slug] URLs. It fetches the matching article from the database, builds the section-specific Table of Contents, and passes the data to the UI template.

import ArticleTemplate from "@/Components/Learning/ArticleTemplate";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";

//SEO Stuff
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return {};

  return {
    title: `${article.title} | Accessibility for Youx`,
    description: article.description || `Learn about ${article.title}`, // Fallback description
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://accessibilityforyoux.com/learning/${slug}`,
      images: [
        {
          url:
            article.blocks.find((b) => b.type === "image")?.src ||
            "/default-og.png",
        },
      ],
    },
  };
}

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

  // Calculate other sections and find their first article's link
  const uniqueSections = [...new Set(articles.map((a) => a.sectionTitle))];
  const otherSections = uniqueSections
    .filter((title) => title !== article.sectionTitle)
    .map((title) => ({
      title,
      href: `/learning/${articles.find((a) => a.sectionTitle === title).slug}`,
    }));

  return (
    <ArticleTemplate
      article={article}
      tocItems={tocItems}
      pagination={pagination}
      otherSections={otherSections}
    />
  );
}
