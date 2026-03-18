import React from "react";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function LearningHubPage() {
  // 1. Group articles by their Section Title
  const groupedArticles = articles.reduce((acc, article) => {
    if (!acc[article.sectionTitle]) {
      acc[article.sectionTitle] = [];
    }
    acc[article.sectionTitle].push(article);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 w-full">
      <h1 className="text-4xl font-bold font-rubik text-primary-foreground tracking-tight mb-4">
        Sitemap
      </h1>
      <p className="text-lg text-secondary-hierarchy mb-12">
        Explore our comprehensive guide to accessibility, standards, and UX
        principles.
      </p>

      <div className="flex flex-col gap-12">
        {Object.entries(groupedArticles).map(
          ([sectionTitle, sectionArticles], index) => (
            <section key={index} className="flex flex-col gap-4">
              {/* Section Header */}
              <h2 className="text-2xl font-semibold text-primary-foreground border-b border-navbar-line pb-2">
                {sectionTitle}
              </h2>

              {/* Article Links */}
              <ul className="flex flex-col gap-3">
                {sectionArticles.map((article) => (
                  <li
                    key={article.slug}
                    className={`flex items-center ${article.parentId ? "ml-6" : ""}`}
                  >
                    {/* Visual indicator for sub-articles */}
                    {article.parentId && (
                      <span className="w-4 border-b border-l border-navbar-line h-4 rounded-bl-md mr-3 mb-4 inline-block" />
                    )}

                    <Link
                      href={`/learning/${article.slug}`}
                      className="text-primary-foreground hover:text-primary hover:underline transition-colors text-lg"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ),
        )}
      </div>
    </div>
  );
}
