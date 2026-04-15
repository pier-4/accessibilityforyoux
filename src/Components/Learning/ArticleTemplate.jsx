import React from "react";
import Image from "@/Components/Image";
import ArticlePagination from "@/Components/ArticlePagination";
import TableOfContents from "@/Components/TableOfContents";

// Accepts the article object from your data file
const ArticleTemplate = ({ article, tocItems, pagination, otherSections }) => {
  //SEO stuff
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    image: article.blocks.find((b) => b.type === "image")?.src,
    author: {
      "@type": "Person",
      name: "Pierluca Bruni",
      url: "https://pierlucadesign.com",
    },
  };

  const nav = pagination || {
    prev: null,
    next: null,
  };

  return (
    <div className="bg-main-bg lg:pt-6">
      {/*  SEO STUFF       */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col lg:flex-row text-primary-foreground bg-main-bg max-w-7xl mx-auto relative">
        <aside className="w-full lg:w-3/12 sticky top-[60.5px] md:top-[64px] lg:top-[90px] z-40 bg-main-bg h-fit lg:px-4 flex lg:justify-center">
          <div className="w-full">
            <TableOfContents
              sectionTitle={article.sectionTitle}
              items={tocItems}
              otherSections={otherSections}
            />
          </div>
        </aside>

        {/* Main Content - consider adding another breakpoint, maybe xl: where its only w-6/12 and maybe changing lg to 8/12 */}
        <main className="w-full md:w-9/12 lg:w-7/12 p-4 md:p-8 max-lg:mt-4 max-md:max-w-16/20 max-sm:max-w-19/20 mx-auto">
          {/* title */}
          <h1 className="heading-1 dark:text-zinc-50">{article.title}</h1>

          {/* article content */}
          <article className="text-lg mt-12 max-md:mt-8 flex flex-col gap-12 max-md:gap-8">
            {article.blocks.map((block, index) => {
              if (block.type === "text") {
                return (
                  <div
                    key={index}
                    className="dark:text-zinc-200 font-rubik-regular-fix "
                  >
                    {block.content}
                  </div>
                );
              }

              if (block.type === "image") {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    {/* Removed fixed h-[400px]. 
        Added aspect-[3/2] to match your 1176x784 design perfectly.
      */}
                    <div className="relative w-full aspect-[3/2] ">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        priority={index === 0} // Load faster if it's the first image
                        className="object-contain rounded-xl" // Use contain so the edges never get cut off
                        //optimized sizes
                        sizes="(max-width: 768px) 95vw, (max-width: 1280px) 58vw, 750px"
                      />
                    </div>
                    {block.caption && (
                      <p className="italic text-sm text-secondary-hierarchy ">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );
              }

              // the spacing between paragraphs is decided by the gap of the article flexbox, so to get the list closer to the previous text block, we can add a negative margin-top to the list
              if (block.type === "list") {
                return (
                  <ul
                    key={index}
                    className="list-disc pl-6 flex flex-col gap-2 max-md:-mt-4 -mt-8 font-rubik-regular-fix "
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <span role="text">{item}</span>
                      </li>
                    ))}
                  </ul>
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
