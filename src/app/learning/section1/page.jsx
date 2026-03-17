import React from "react";
import Image from "next/image";
import ArticlePagination from "@/Components/ArticlePagination";

const articleTemplate = () => {
  return (
    <div className="bg-main-bg pt-6">
      <div className="flex text-primary-foreground bg-main-bg gap-6 max-w-7xl mx-auto relative">
        {/* ------- WOULD NEED TO TURN THIS TABLE OF CONTENTS INTO A COMPONENT ------- */}
        <aside
          id="TOC"
          className="bg-amber-0 w-4/12 sticky top-24 h-fit px-12 max-md:hidden"
        >
          <nav>
            <h3 className="p-2 text-lg text-brand-base font-bold">
              Section Name
            </h3>
            <ul className="flex flex-col gap-4 p-2 font-medium">
              <li>
                <a
                  href="#section-1"
                  className="block text-brand-base bg-brand-lavender-bg p-2 border-l-4 border-brand-base font-semibold"
                >
                  Article 1 - currently open
                </a>
              </li>
              <li>
                <a href="#section-2" className="text-brand-base p-2">
                  Article 2
                </a>
              </li>
              <li>
                <a href="#section-3" className="text-brand-base p-2">
                  Article 3
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <section className=" w-6/12 min-h-screen p-4 max-md:w-full">
          <h1 className="heading-1">
            Accessibility vs inclusivity vs usability
          </h1>

          <article className="text-lg mt-16 font-inter">
            <div className="flex flex-col gap-12">
              <p>
                Accessible design is the practice of creating experiences that
                can be used, understood, and enjoyed by as many people as
                possible. It begins with the awareness that users have different
                abilities, devices, and contexts, and that design should adapt
                to this <a href="/link">diversity</a> rather than exclude
                it.{" "}
              </p>
              <p>
                Inclusive design is a methodology that recognizes human variety
                and intentionally includes people with different perspectives
                and needs from the very start of the design process. By doing
                so, it transforms insights about real human experiences into
                concrete design decisions, in language, interfaces, materials,
                and services. It is not about designing for the “average”
                person, but about creating flexible systems that work for
                everyone.
              </p>
            </div>
            <div id="article-image" className="mt-12 relative w-full h-[400px]">
              <Image
                src="/Images/test-picture.png"
                alt="Example of a picture inside of the article"
                fill
                className="object-cover"
              />
            </div>
            <p className="italic text-sm text-zinc-500">
              Image: Example of an accessible design
            </p>
            <div className="mt-12">
              <p>
                In digital design, accessibility takes a more structured and
                measurable form. It is defined by specific criteria: the Web
                Content Accessibility Guidelines (WCAG 2.2), which describe how
                to make websites and apps perceivable, operable, understandable,
                and robust. These four principles, often summarized as POUR,
                guide designers and developers in making their work usable for
                people who rely on assistive technologies such as screen
                readers, magnifiers, or keyboard navigation.
              </p>
            </div>
          </article>
          <ArticlePagination
            prevHref="/learning/section1"
            prevTitle="The Basics"
            nextHref="/learning/section3"
            nextTitle="UX Design Principles"
          />
        </section>
      </div>
    </div>
  );
};

export default articleTemplate;
