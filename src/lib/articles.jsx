// DATABASE: Acts as the local data store. Contains all article content, routing slugs, and metadata in a single array.

export const articles = [
  //section 1 article 1
  {
    slug: "accessibility-vs-inclusivity",
    title: "Accessibility vs inclusivity vs usability",
    sectionTitle: "The Basics",
    pagination: {
      prev: null, // No previous article
      next: {
        href: "/learning/the-case-for-accessibility",
        title: "The Case for Accessibility",
      },
    },
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
    pagination: {
      prev: {
        href: "/learning/accessibility-vs-inclusivity",
        title: "Accessibility vs inclusivity",
      },
      next: { href: "/learning/wcag-guidelines", title: "WCAG Guidelines" },
    },
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
    pagination: {
      prev: {
        href: "/learning/the-case-for-accessibility",
        title: "The Case for Accessibility",
      },
      next: null,
    },
    blocks: [
      {
        type: "text",
        content: <p>WCAG 2.2 introduces several new success criteria...</p>,
      },
    ],
  },
  {
    slug: "wcag-perceivable",
    title: "2.1 Perceivable",
    sectionTitle: "Guidelines",
    parentId: "wcag-basics", // This marks it as a child of WCAG Basics
    blocks: [
      /* ... */
    ],
  },
  {
    slug: "wcag-operable",
    title: "2.2 Operable",
    sectionTitle: "Guidelines",
    parentId: "wcag-basics",
    blocks: [
      /* ... */
    ],
  },
];
