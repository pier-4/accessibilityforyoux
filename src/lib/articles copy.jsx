// DATABASE: Acts as the local data store. Contains all article content, routing slugs, and metadata in a single array.

export const articles = [
  //section 1 article 1
  {
    slug: "accessibility-vs-inclusivity",
    title: "Accessibility vs inclusivity vs usability",
    sectionTitle: "The Basics",
    parentId: null, // This is a top-level article, not a child of another
    blocks: [
      {
        type: "text",
        content: (
          <p>
            Accessible design is the practice of creating experiences that can
            be used, understood, and enjoyed by as many people as possible. It
            begins with the awareness that users have different abilities,
            devices, and contexts, and that design should adapt to this
            diversity rather than exclude it.
          </p>
        ),
      },
      {
        type: "image",
        src: "/ArticleIllustrations/test-picture.png",
        alt: "Example of an accessible design",
        caption: "Image: Example of an accessible design",
      },
      {
        type: "text",
        content: (
          <p>
            Inclusive design is a methodology that recognizes human variety and
            intentionally includes people with different perspectives...
          </p>
        ),
      },
    ],
  },
  //section 1 article 2
  {
    slug: "the-case-for-accessibility",
    title: "The Case for Accessibility",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [
      {
        type: "text",
        content: (
          <p>Here is why accessibility matters for business and ethics...</p>
        ),
      },
    ],
  },
  {
    slug: "wcag-guidelines",
    title: "Understanding WCAG Guidelines",
    sectionTitle: "Guidelines", // Notice the different sectionTitle. This creates a new TOC group.
    parentId: null,
    blocks: [
      {
        type: "text",
        content: (
          <p>Here is why accessibility matters for business and ethics...</p>
        ),
      },
    ],
  },
  {
    slug: "wcag-guidelines-2.1",
    title: "Pour WCAG",
    sectionTitle: "Guidelines", // Notice the different sectionTitle. This creates a new TOC group.
    parentId: "wcag-guidelines", // This article is a child of the previous one, creating a nested TOC item
    blocks: [
      {
        type: "text",
        content: (
          <p>Here is why accessibility matters for business and ethics...</p>
        ),
      },
    ],
  },
];
