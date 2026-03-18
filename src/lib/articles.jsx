export const articles = [
  // --- SECTION 1: THE BASICS ---
  {
    slug: "defining-accessibility",
    title: "1.0 Defining Accessibility",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section1/ill2.png", // Path relative to your public folder
        alt: "Illustration depicting various accessibility concepts",
        caption: "Illustration depicting various accessibility concepts",
      },
      {
        type: "text",
        content: (
          <p>
            Accessibility (abbreviated "a11y") is about making products,
            websites, and experiences usable by as many people as possible,
            including people with disabilities. It’s a way of designing so more
            people can actually use and experience what you make.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            When we talk about accessibility, we’re thinking about users who may
            have vision, hearing, mobility, or cognitive differences. But
            accessibility is bigger than that.{" "}
            <span className="font-medium">
              It also includes temporary situations, like a broken arm or being
              in bright sunlight, and environmental barriers, like poor Wi-Fi or
              noisy spaces.
            </span>
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Accessible design means people can find what they need, understand
            it, and use it without unnecessary struggle. It’s about removing
            friction and barriers so people can complete tasks independently and
            with dignity, instead of needing workarounds or help.
          </p>
        ),
      },
    ],
  },
  {
    slug: "case-for-accessibility",
    title: "1.1 The case for Accessibility",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [{ type: "text", content: <p>Content for 1.1...</p> }],
  },
  {
    slug: "accessibility-inclusivity-usability",
    title: "1.2 Accessibility, Inclusivity, and Usability",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [{ type: "text", content: <p>Content for 1.2...</p> }],
  },
  {
    slug: "how-inclusion-shapes-design",
    title: "1.3 How inclusion shapes design",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [{ type: "text", content: <p>Content for 1.3...</p> }],
  },

  // --- SECTION 2: STANDARDS AND REGULATIONS ---
  {
    slug: "history-of-accessibility-laws",
    title: "2.0 A Brief history of accessibility laws",
    sectionTitle: "Standards and Regulations",
    parentId: null,
    blocks: [{ type: "text", content: <p>Content for 2.0...</p> }],
  },
  {
    slug: "global-standards-landscape",
    title: "2.1 The landscape of global standards",
    sectionTitle: "Standards and Regulations",
    parentId: null,
    blocks: [{ type: "text", content: <p>Content for 2.1...</p> }],
  },
  {
    slug: "european-accessibility-act",
    title: "2.1.1 The European Accessibility Act",
    sectionTitle: "Standards and Regulations",
    parentId: "global-standards-landscape",
    blocks: [{ type: "text", content: <p>Content for 2.1.1...</p> }],
  },
  {
    slug: "introduction-to-wcag",
    title: "2.2 An introduction to WCAG",
    sectionTitle: "Standards and Regulations",
    parentId: null,
    blocks: [{ type: "text", content: <p>Content for 2.2...</p> }],
  },
  {
    slug: "pour-principles-explained",
    title: "2.2.1 The POUR Principles Explained",
    sectionTitle: "Standards and Regulations",
    parentId: "introduction-to-wcag",
    blocks: [{ type: "text", content: <p>Content for 2.2.1...</p> }],
  },
  {
    slug: "pour-principles-for-designers",
    title: "2.2.2 Key POUR Principles for Designers",
    sectionTitle: "Standards and Regulations",
    parentId: "introduction-to-wcag",
    blocks: [{ type: "text", content: <p>Content for 2.2.2...</p> }],
  },
  {
    slug: "how-to-meet-wcag",
    title: "2.2.3 How to meet WCAG",
    sectionTitle: "Standards and Regulations",
    parentId: "introduction-to-wcag",
    blocks: [{ type: "text", content: <p>Content for 2.2.3...</p> }],
  },

  // --- SECTION 3: UX DESIGN PRINCIPLES ---
  {
    slug: "psychology-ux-principles",
    title: "3.0 The psychology of UI/UX principles",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [{ type: "text", content: <p>Content for 3.0...</p> }],
  },
  {
    slug: "fitts-law",
    title: "3.1 Fitt's law",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [],
  },
  {
    slug: "hicks-law",
    title: "3.2 Hick's law",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [],
  },
  {
    slug: "millers-law",
    title: "3.3 Miller's law",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [],
  },
  {
    slug: "jakobs-law",
    title: "3.4 Jakob's law",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [],
  },
  {
    slug: "gestalt-principles",
    title: "3.5 Gestalt principles",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [],
  },
  {
    slug: "aesthetic-usability-effect",
    title: "3.6 Aesthetic-usability effect",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [],
  },
  {
    slug: "doherty-threshold",
    title: "3.7 The Doherty threshold",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [],
  },
  {
    slug: "perceived-performance-techniques",
    title: "3.7.1 Perceived Performance techniques",
    sectionTitle: "UX Design Principles",
    parentId: "doherty-threshold",
    blocks: [],
  },

  // --- SECTION 4: EXAMPLES / CASE STUDIES ---
  {
    slug: "business-of-accessibility",
    title: "4.0 The business of Accessibility",
    sectionTitle: "Examples & References",
    parentId: null,
    blocks: [],
  },
  {
    slug: "dominos-lawsuit",
    title: "4.0.1 The Domino's lawsuit",
    sectionTitle: "Examples & References",
    parentId: "business-of-accessibility",
    blocks: [],
  },
  {
    slug: "tesco-success-story",
    title: "4.0.2 The Tesco success story",
    sectionTitle: "Examples & References",
    parentId: "business-of-accessibility",
    blocks: [],
  },
  {
    slug: "industry-references",
    title: "4.1 The gold standards - Industry references",
    sectionTitle: "Examples & References",
    parentId: null,
    blocks: [],
  },
  {
    slug: "apple-guidelines",
    title: "4.1.1 Apple Human Interface Guidelines",
    sectionTitle: "Examples & References",
    parentId: "industry-references",
    blocks: [],
  },
  {
    slug: "material-design-guidelines",
    title: "4.1.2 Material design Accessibility Guidelines",
    sectionTitle: "Examples & References",
    parentId: "industry-references",
    blocks: [],
  },
  {
    slug: "microsoft-toolkit",
    title: "4.1.3 Microsoft Inclusive Design Toolkit",
    sectionTitle: "Examples & References",
    parentId: "industry-references",
    blocks: [],
  },
  {
    slug: "gov-uk-system",
    title: "4.1.4 Gov.UK design system",
    sectionTitle: "Examples & References",
    parentId: "industry-references",
    blocks: [],
  },
];
