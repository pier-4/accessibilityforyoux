import React from "react";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function FullSitemapPage() {
  const groupedArticles = articles.reduce((acc, article) => {
    if (!acc[article.sectionTitle]) {
      acc[article.sectionTitle] = [];
    }
    acc[article.sectionTitle].push(article);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto max-lg:px-6 px-4 py-12 md:py-24 w-full bg-main-bg">
      <h1 className="text-4xl font-bold font-rubik text-primary-foreground tracking-tight mb-4">
        Sitemap
      </h1>
      <p className="text-lg text-secondary-hierarchy mb-12">
        Complete overview of our platform structure and content.
      </p>

      <div className="flex flex-col gap-10">
        {/* Home */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-foreground border-b border-navbar-line pb-2">
            <Link
              href="/"
              className="hover:text-primary hover:underline transition-colors"
            >
              Home
            </Link>
          </h2>
        </section>

        {/* About */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-foreground border-b border-navbar-line pb-2">
            <Link
              href="/about"
              className="hover:text-primary hover:underline transition-colors"
            >
              About
            </Link>
          </h2>
        </section>

        {/* Learning */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-primary-foreground border-b border-navbar-line pb-2">
            <Link
              href="/learning"
              className="hover:text-primary hover:underline transition-colors"
            >
              Learning
            </Link>
          </h2>

          <div className="ml-6 flex flex-col gap-6">
            <h3 className="text-xl font-medium text-primary-foreground flex items-center">
              <span className="w-4 border-b border-l border-navbar-line h-4 rounded-bl-md mr-3 mb-2 inline-block" />
              Articles
            </h3>

            {/* Dynamic Articles List */}
            <div className="ml-10 flex flex-col gap-8">
              {Object.entries(groupedArticles).map(
                ([sectionTitle, sectionArticles], index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <h4 className="text-lg font-medium text-primary-foreground/80">
                      {sectionTitle}
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {sectionArticles.map((article) => (
                        <li
                          key={article.slug}
                          className={`flex items-center ${article.parentId ? "ml-6" : "ml-2"}`}
                        >
                          {article.parentId && (
                            <span className="w-4 border-b border-l border-navbar-line h-4 rounded-bl-md mr-3 mb-4 inline-block" />
                          )}
                          <Link
                            href={`/learning/${article.slug}`}
                            className="text-secondary-hierarchy hover:text-primary hover:underline transition-colors text-base"
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-primary-foreground border-b border-navbar-line pb-2">
            <Link
              href="/tools"
              className="hover:text-primary hover:underline transition-colors"
            >
              Tools
            </Link>
          </h2>
          <ul className="ml-6 flex flex-col gap-3">
            <li className="flex items-center">
              <span className="w-4 border-b border-l border-navbar-line h-4 rounded-bl-md mr-3 mb-4 inline-block" />
              <Link
                href="/tools/screen-readers"
                className="text-secondary-hierarchy hover:text-primary hover:underline transition-colors text-lg"
              >
                Screenreaders
              </Link>
            </li>
          </ul>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-foreground border-b border-navbar-line pb-2">
            <Link
              href="/examples"
              className="hover:text-primary hover:underline transition-colors"
            >
              Practical Examples
            </Link>
          </h2>
        </section>
      </div>
    </div>
  );
}
