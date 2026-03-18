import React from "react";
import Image from "next/image";
import ArticlePagination from "@/Components/ArticlePagination";
import TableOfContents from "@/Components/TableOfContents";

// Accepts the article object from your data file
const ArticleTemplate = ({ article, tocItems, pagination }) => {
  const nav = pagination || {
    prev: null,
    next: null,
  };

  return (
    <div className="bg-main-bg md:pt-6">
      <div className="flex flex-col md:flex-row text-primary-foreground bg-main-bg max-w-7xl mx-auto relative">
        <aside className="w-full md:w-3/12 md:sticky md:top-[72px]  h-fit md:px-4 flex md:justify-center">
          <div className="w-full">
            <TableOfContents
              sectionTitle={article.sectionTitle}
              items={tocItems}
            />
          </div>
        </aside>

        <main className="w-full md:w-7/12 p-4 md:p-8 max-md:max-w-19/20 mx-auto">
          {/* title */}
          <h1 className="heading-1">{article.title}</h1>

          {/* article content */}
          <article className="text-lg mt-16 flex flex-col gap-12 ">
            {article.blocks.map((block, index) => {
              if (block.type === "text") {
                return <div key={index}>{block.content}</div>;
              }

              if (block.type === "image") {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {block.caption && (
                      <p className="italic text-sm text-zinc-500">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </article>

          <ArticlePagination
            prevHref={pagination.prev?.href}
            prevTitle={pagination.prev?.title}
            nextHref={pagination.next?.href}
            nextTitle={pagination.next?.title}
          />
        </main>
      </div>
    </div>
  );
};

export default ArticleTemplate;
