//todo ADD IMAGES WITH DESCRIPTIONS AND ALT TEXTS

export const articles = [
  // --- 1.0 DEFINING ACCESSIBILITY ---
  {
    slug: "defining-accessibility",
    title: "1.0 Defining Accessibility",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section1/ill1.png",
        alt: "Diagram showing six accessibility categories — vision, audio, motor, speech, hearing, and communication — surrounding a central accessibility icon.",
        caption: "Diagram showing six accessibility categories",
      },
      {
        type: "text",
        content: (
          <p>
            Accessibility (abbreviated &quot;a11y&quot;) is about making
            products, websites, and experiences usable by as many people as
            possible, including people with disabilities. It’s a way of
            designing so more people can actually use and experience what you
            make.
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
              <strong>
                It also includes temporary situations, like a broken arm or
                being in bright sunlight, and environmental barriers, like poor
                Wi-Fi or noisy spaces.
              </strong>
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

  // --- 1.1 THE CASE FOR ACCESSIBILITY ---
  {
    slug: "case-for-accessibility",
    title: "1.1 The case for Accessibility",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section1/ill2.png",
        alt: "Collage juxtaposing a historical photo of a child holding a 'CBS: We Want Captions' protest sign, attributed to the National Association of the Deaf, with modern social media video thumbnails featuring bold captions.",
        caption:
          "The demand for captions predates the internet — deaf advocates fought for them decades before social media made them standard.",
      },
      {
        type: "text",
        content: (
          <p>
            Designing for accessibility helps people with disabilities and makes
            experiences better for everyone.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            This idea has a name: the <strong>curb-cut effect</strong>. Curb
            cuts at street corners were originally built for wheelchair users,
            but they ended up helping parents with strollers, travelers with
            luggage, and skateboarders too. When you solve for a constraint, you
            often remove friction for people who never knew they needed it.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>The same pattern plays out constantly in digital products:</p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Captions</strong> were fought for by Deaf activists, but
            today TikTok and Instagram generate them automatically, and millions
            of users rely on them in noisy cafés or on silent commutes.
          </span>,
          <span key="2">
            <strong>High-contrast text</strong> helps people with low vision,
            and also anyone reading their phone in bright sunlight.
          </span>,
          <span key="3">
            <strong>Voice input</strong> helps people with motor impairments,
            and also someone cooking with messy hands or driving a car.
          </span>,
        ],
      },

      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            Microsoft&apos;s Persona Spectrum
          </h2>
        ),
      },
      {
        type: "image",
        src: "/ArticleIllustrations/section1/persona-spectrum.png",
        alt: "Diagram titled 'The Persona Spectrum' showing how permanent, temporary, and situational impairments affect the same four abilities: Touch, See, Hear, and Speak — with illustrated persona examples for each.",
        caption:
          "Designing for permanent disabilities benefits everyone — including people with temporary or situational limitations.",
      },
      {
        type: "text",
        content: (
          <p>
            Microsoft&apos;s Inclusive Design toolkit formalizes this thinking
            with the <strong>Persona Spectrum</strong>: the idea that
            constraints exist on a scale rather than as a binary:
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Permanent:</strong> someone with one arm.
          </span>,
          <span key="2">
            <strong>Temporary:</strong> someone with an arm injury.
          </span>,
          <span key="3">
            <strong>Situational:</strong> someone holding a baby.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            If your design works for someone with a permanent limitation, it
            will almost always work for people experiencing the temporary or
            situational version of the same constraint. That makes your product
            more flexible, more resilient, and more future-proof.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Good accessibility is simply good design. The wider the range of
            people you design for, the stronger and more durable your work
            becomes.
          </p>
        ),
      },
    ],
  },

  // --- 1.2 ACCESSIBILITY, INCLUSIVITY, AND USABILITY ---
  {
    slug: "accessibility-inclusivity-usability",
    title: "1.2 Accessibility, Inclusivity, and Usability",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section1/ill3.svg",
        alt: "Diagram showing three UI design principles: Accessibility (low-contrast text marked wrong, high-contrast text marked correct), Usability (a grey unlabeled button marked wrong, a blue 'Save changes' button marked correct), and Inclusivity (a toggle offering light, system, and dark mode options, marked correct).",
        caption:
          "Good design is readable, clearly labeled, and adapts to user preferences",
      },
      {
        type: "text",
        content: (
          <p>
            Accessibility, usability, and inclusivity often get mixed up, but
            they don’t mean exactly the same thing, and understanding their
            differences is very important:
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Accessibility</strong> means to removes barriers so people
            with disabilities can use a product. It ensures core functions work
            with tools like screen readers or keyboards.
          </span>,
          <span key="2">
            <strong>Inclusivity</strong> means designing for a wide range of
            human abilities, needs, and contexts from the start, not as an
            afterthought. It asks, “Who might this exclude?” and builds broader
            solutions.{" "}
            <em>
              (This can include culture, language, age, gender, economic
              background, and more.)
            </em>
          </span>,
          <span key="3">
            <strong>Usability</strong> means to makes things easy and intuitive
            for everyone. Even an accessible button can confuse users if the
            flow feels clunky or unclear.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <h2 className="text-lg font-bold mt-6">
            These principles are not mutually exclusive; they overlap to create
            better designs. Without balancing all three, a product suffers:
          </h2>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Accessible but not usable:</strong> A
            screen-reader-compatible interface where the navigation logic is
            confusing and finding the &quot;Submit&quot; button takes 10 clicks.
          </span>,
          <span key="2">
            <strong>Usable but not accessible:</strong> A smooth checkout flow
            with beautiful animations that lacks keyboard support and uses
            buttons screen readers can’t detect.
          </span>,
          <span key="3">
            <strong>Usable but not inclusive:</strong> A clean, intuitive app
            that assumes every user has a high-speed connection or speaks the
            primary language, effective for many, but exclusionary to others.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            When all three align, products become functional, respectful, and
            open to everyone.
          </p>
        ),
      },
    ],
  },

  // --- 1.3 HOW INCLUSION SHAPES DESIGN ---
  {
    slug: "how-inclusion-shapes-design",
    title: "1.3 How inclusion shapes design",
    sectionTitle: "The Basics",
    parentId: null,
    blocks: [
      // {
      //   type: "image",
      //   src: "/ArticleIllustrations/section1/ill1.png",
      //   alt: "Illustration for how inclusion shapes design",
      //   caption: "Placeholder: How Inclusion Shapes Design",
      // },
      {
        type: "text",
        content: (
          <p>
            Inclusion shapes design by shifting designers from guessing what
            works to asking better questions about real people and real users.
            It’s a mindset that treats every friction point as a clue to improve
            usability for more users.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Inclusion starts with a simple question:{" "}
            <strong>Who can’t use this right now, and why?</strong> Instead of
            assuming your design works for everyone, you spot the mismatches,
            places where the interface, flow, or content doesn’t fit how people
            actually operate.
          </p>
        ),
      },
      {
        type: "text",
        content: <p>You should ask yourself:</p>,
      },
      {
        type: "list",
        items: [
          <span key="1">
            Does this button work for someone using only a keyboard?
          </span>,
          <span key="2">
            Can someone skim this page if they’re color blind or in bright
            sunlight?
          </span>,
          <span key="3">
            Will this form frustrate someone on a slow connection or small
            screen?
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            By questioning those hidden assumptions early, you design around
            real constraints. What starts as a fix for one user often makes the
            whole experience smoother and more flexible for others.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Inclusion shapes design by making “Does this work for <em>me</em>?”
            into “Does this work for someone who isn’t me?” It’s about building
            the habit of spotting usability gaps before they become user
            complaints. Over time, this leads to products that feel intuitive
            across devices, contexts, and abilities.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            If you want to learn more about this topic, i recommend checking out
            Kat Holmes’s book{" "}
            <a
              href="https://www.amazon.com/Mismatch-Inclusion-Simplicity-Technology-Business/dp/0262038889"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              <em>Mismatch: How Inclusion Shapes Design</em>
            </a>
            .
          </p>
        ),
      },
    ],
  },

  // --- SECTION 2: STANDARDS AND REGULATIONS ---
  // --- 2.0 A BRIEF HISTORY OF ACCESSIBILITY LAWS ---
  {
    slug: "history-of-accessibility-laws",
    title: "2.0 A Brief History of Accessibility Laws",
    sectionTitle: "Standards and Regulations",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section2/2-1-timeline.svg",
        alt: "Timeline of key accessibility legislation and standards from 1969 to 2025: Architectural Barriers Act (1969), Section 504 (1973), ADA and DDA (1990s), WCAG 1.0 (1999), and EAA (2025).",
        caption:
          "Accessibility law has evolved steadily from physical spaces to the web.",
      },
      {
        type: "text",
        content: (
          <p>
            Accessibility did not start with websites. It began with a simple
            question:{" "}
            <strong>how do we make everyday life usable for everyone?</strong>{" "}
            Early accessibility rules focused on the{" "}
            <strong>built environment</strong>: buildings, streets, and public
            spaces.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            1960s–1970s: Physical Barriers Addressed
          </h2>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            In the U.S., the <strong>Architectural Barriers Act of 1968</strong>{" "}
            required federally funded buildings to include ramps, elevators, and
            signage. In Europe, the{" "}
            <strong>
              Council of the European Communities Resolution of 1974
            </strong>{" "}
            launched joint programs for social and vocational inclusion of
            disabled people, promoting barrier-free public spaces across member
            states. These efforts led to standards like{" "}
            <strong>ANSI A117.1</strong> in the U.S. and similar technical
            guidelines in Europe for accessible design.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            The <strong>Rehabilitation Act of 1973</strong> (Also known as U.S.
            Section 504) banned discrimination in federal programs, while
            European countries like Spain passed the <strong>LISMI Law</strong>{" "}
            (1982) to install ramps and elevators nationwide.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            1980s–1990s: Civil Rights and Broader Protections
          </h2>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            The 1990s marked accessibility as a <strong>civil right</strong>.
            The <strong>Americans with Disabilities Act (ADA)</strong> of 1990
            covered workplaces, transport, and services in the U.S., influencing
            global change. In Europe, the{" "}
            <strong>UK Disability Discrimination Act (DDA) of 1995</strong>{" "}
            prohibited discrimination in employment, goods, services, and
            transport, leading to the EU Employment Equality Directive (2000)
            for disabled workers across the EU.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            2000s: Digital Accessibility Emerges
          </h2>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            As the internet grew, laws expanded to digital spaces. U.S.{" "}
            <strong>Section 508</strong> (1998 update) required accessible
            federal tech, and courts applied ADA to websites. In Europe, the{" "}
            <strong>Web Accessibility Directive (WAD)</strong> (2016) mandated
            accessible public-sector websites.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            The <strong>WCAG 1.0</strong> (1999) by W3C provided the first
            global web guidelines, evolving to WCAG 2.x standards today.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            2010s–Now: Unified Global Standards
          </h2>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Newer laws like Canada’s <strong>AODA (2005)</strong>, Australia’s
            updates, and the{" "}
            <strong>
              European Accessibility Act (EAA, 2019, effective 2025)
            </strong>{" "}
            extend accessibility to e-commerce, apps, banking, and devices
            across the EU, all referencing WCAG 2.1 AA.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            For designers, this history, from ramps to responsive websites,
            shows one truth:{" "}
            <strong>
              accessibility is a right, and good design makes it happen
              everywhere
            </strong>
            .
          </p>
        ),
      },
    ],
  },

  // --- 2.1 THE LANDSCAPE OF GLOBAL STANDARDS ---
  {
    slug: "global-standards-landscape",
    title: "2.1 The Landscape of Global Standards",
    sectionTitle: "Standards and Regulations",
    parentId: null,
    blocks: [
      // {
      //   type: "image",
      //   src: "/ArticleIllustrations/section1/ill1.png",
      //   alt: "Illustration for The Landscape of Global Standards",
      //   caption: "Placeholder: The Landscape of Global Standards",
      // },
      {
        type: "text",
        content: (
          <p>
            Digital accessibility isn’t the same everywhere, each country has
            its own rules, but they often connect back to WCAG.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>United States:</strong> The <em>ADA</em> and{" "}
            <em>Section 508</em> of the Rehabilitation Act require accessible
            digital tools, especially for federal websites and contractors.
          </span>,
          <span key="2">
            <strong>European Union:</strong> The{" "}
            <em>European Accessibility Act (EAA)</em> entered into effect on{" "}
            <strong>June 28, 2025</strong> (now enforced across EU states),
            covering websites, apps, banking, e-commerce, transport, and more.
            New digital content must comply now, with legacy content by 2030.
          </span>,
          <span key="3">
            <strong>Canada and Australia:</strong> Their national accessibility
            acts follow WCAG and require accessible design for public-facing
            organizations.
          </span>,
          <span key="4">
            <strong>Japan and South Korea:</strong> Both have accessibility
            standards inspired by WCAG, aiming for inclusivity across digital
            platforms.
          </span>,
          <span key="5">
            <strong>Global organizations:</strong> The UN’s{" "}
            <em>
              Convention on the Rights of Persons with Disabilities (CRPD)
            </em>{" "}
            encourages countries to treat digital access as a human right.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            The specifics can change from place to place, but the core idea
            doesn&apos;t: build things everyone can use.
          </p>
        ),
      },
    ],
  },

  // --- 2.1.1 THE EUROPEAN ACCESSIBILITY ACT ---
  {
    slug: "european-accessibility-act",
    title: "2.1.1 The European Accessibility Act",
    sectionTitle: "Standards and Regulations",
    parentId: "global-standards-landscape",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section2/2-2-1-EAA.svg",
        alt: "Illustration combining the EU flag's circle of yellow stars with the international accessibility icon — a human figure with arms outstretched — at the center, on a navy blue background.",
        caption:
          "The European Accessibility Act applies across all EU member states.",
      },
      {
        type: "text",
        content: (
          <p>
            The <strong>European Accessibility Act (EAA)</strong> is the
            European Union&apos;s big step toward making products and digital
            services accessible for everyone. Adopted in 2019, the Act became
            fully enforceable across all EU member states in{" "}
            <strong>June 2025</strong>
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">What the EAA Covers</h2>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            The Act applies to many everyday digital experiences across Europe,
            including:
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>E-commerce</strong> (online shops and payment systems)
          </span>,
          <span key="2">
            <strong>Banking services</strong> (apps, ATMs, and online portals)
          </span>,
          <span key="3">
            <strong>Transport services</strong> (ticket machines and travel
            apps)
          </span>,
          <span key="4">
            <strong>E-books and reading platforms</strong>
          </span>,
          <span key="5">
            <strong>Smartphones, computers, and TVs</strong>
          </span>,
          <span key="6">
            <strong>Public sector websites and mobile apps</strong>
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            Basically, if it&apos;s a digital product or service used by the
            public, it needs to meet accessibility standards.
          </p>
        ),
      },
      {
        type: "text",
        content: <h2 className="text-2xl font-bold mt-8">The Goal</h2>,
      },
      {
        type: "text",
        content: (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            &quot;The EAA is a directive that aims to improve the functioning of
            the internal market for accessible products and services, by
            removing barriers created by divergent rules in Member States&quot;
            - <em>official mission statement from the EU</em>
          </blockquote>
        ),
      },
      {
        type: "text",
        content: <p>Resulting in:</p>,
      },
      {
        type: "list",
        items: [
          <span key="1">
            common rules on accessibility in the EU leading to costs reduction
          </span>,
          <span key="2">
            more market opportunities for business&apos;s accessible products
            and services
          </span>,
          <span key="3">
            more accessible products and services in the market
          </span>,
          <span key="4">
            accessible products and services at more competitive prices
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            and for Designers in particular:{" "}
            <strong>
              more jobs available where accessibility expertise is needed
            </strong>
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">Connection to WCAG</h2>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            The Act uses the{" "}
            <em>Web Content Accessibility Guidelines (WCAG)</em> as its digital
            foundation, specifically WCAG 2.1 Level AA via the EN 301 549
            standard. That means if your website or app meets{" "}
            <strong>WCAG 2.1 AA</strong>, you&apos;re EAA-compliant.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            To read more details about the EAA, you can check out the{" "}
            <a
              href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en"
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              European Commissio&apos;s official article
            </a>
            , and{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882"
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              the official directive
            </a>
          </p>
        ),
      },
    ],
  },

  // --- 2.2 AN INTRODUCTION TO WCAG ---
  {
    slug: "introduction-to-wcag",
    title: "2.2 An Introduction to WCAG",
    sectionTitle: "Standards and Regulations",
    parentId: null,
    blocks: [
      // {
      //   type: "image",
      //   src: "/ArticleIllustrations/section1/ill1.png",
      //   alt: "Illustration for An Introduction to WCAG",
      //   caption: "Placeholder: An Introduction to WCAG",
      // },
      {
        type: "text",
        content: (
          <p>
            The <em>Web Content Accessibility Guidelines (WCAG)</em> are the
            international guidelines for making websites and apps accessible.
            Created by the <em>W3C Web Accessibility Initiative (WAI)</em>, it
            gives designers and developers a shared checklist for accessibility
            best practices.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-xl font-bold mt-6">
            WCAG uses three levels of compliance:
          </h2>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Level A (Essential):</strong> The basic foundation. Without
            this, many users cannot access your content.
          </span>,
          <span key="2">
            <strong>Level AA (Standard):</strong> The most common goal for
            professional websites. It balances practical effort with equal
            access.
          </span>,
          <span key="3">
            <strong>Level AAA (Exceptional):</strong> The gold standard.
            Achieving this means your site is accessible to almost everyone, but
            it’s not always realistic for every project.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            To meet these standards, WCAG organizes its specific rules under
            four guiding principles:{" "}
            <strong>Perceivable, Operable, Understandable, and Robust</strong>.
            Known as the <strong>POUR</strong> principles, they provide the
            functional framework for building truly accessible digital
            experiences.
          </p>
        ),
      },
    ],
  },

  // --- 2.2.1 THE POUR PRINCIPLES EXPLAINED ---
  {
    slug: "pour-principles-explained",
    title: "2.2.1 The POUR Principles Explained",
    sectionTitle: "Standards and Regulations",
    parentId: "introduction-to-wcag",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section2/2-3-POUR.svg",
        alt: "Diagram of the four WCAG principles spelled out as POUR: Perceivable (eye icon), Operable (touch/hand icon), Understandable (brain icon), and Robust (multi-device icon).",
        caption:
          "The four WCAG principles every accessible digital product must meet.",
      },
      {
        type: "text",
        content: (
          <p>
            The POUR framework breaks accessibility into four easy questions
            every designer can ask when reviewing their work.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Perceivable:</strong> Can they see or hear it? Ensure text
            has high contrast, videos have captions, and images include
            alt-text.
          </span>,
          <span key="2">
            <strong>Operable:</strong> Can they use it? Users should be able to
            navigate with a keyboard, click with large enough buttons, and not
            face flickering content.
          </span>,
          <span key="3">
            <strong>Understandable:</strong> Can they read it? Use clear
            language, consistent icons, and predictable layouts so users know
            what to expect.
          </span>,
          <span key="4">
            <strong>Robust:</strong> Does it work on all tech? Code should
            follow standards and function across browsers, devices, or assistive
            tools like screen readers.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            These four principles are the Foundation of accessibility design. If
            your design is{" "}
            <strong>Perceivable, Operable, Understandable,</strong> and{" "}
            <strong>Robust</strong>, you are already on the right path toward
            WCAG compliance.
          </p>
        ),
      },
    ],
  },

  // --- 2.2.2 KEY POUR PRINCIPLES FOR DESIGNERS ---
  // FIX IMAGE
  {
    slug: "pour-principles-for-designers",
    title: "2.2.2 Key POUR Principles for Designers",
    sectionTitle: "Standards and Regulations",
    parentId: "introduction-to-wcag",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section2/2-3-1-pourExamples.png",
        alt: "Four-panel illustration of WCAG requirements: low vs. high contrast text comparison, minimum touch target sizes (24×24px vs. 48×48px), a button with a visible keyboard focus ring, and an apple image with alt text code example.",
        caption:
          "Key WCAG criteria: contrast, touch target size, focus visibility, and alt text.",
      },
      {
        type: "text",
        content: (
          <p>
            POUR breaks accessibility into four questions. Here are{" "}
            <strong>two most actionable principles</strong> from each, ones
            you&apos;ll check first in Figma or during handoff.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            Perceivable: Can they see/hear it?
          </h2>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>1. Color Contrast (WCAG 1.4.3 AA)</strong>: Text needs 4.5:1
            contrast ratio against backgrounds. Test your designs with tools
            like Stark or WebAIM checker, dark text on light backgrounds fails
            most often.
          </span>,
          <span key="2">
            <strong>2. Image Alt Text (WCAG 1.1.1 A)</strong>: Every meaningful
            image needs descriptive alt text (e.g., &quot;Designer reviewing
            wireframes on laptop&quot; vs. &quot;image.jpg&quot; Decorative
            images get empty alt&quot;&quot;
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            Operable: Can they use it?
          </h2>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>1. Keyboard Navigation (WCAG 2.1.1 A)</strong>: Every
            interactive element (buttons, links, forms) must be reachable and
            usable via Tab key alone, no mouse needed. Test by using the website
            with only your keyboard.
          </span>,
          <span key="2">
            <strong>2. Target Size (WCAG 2.5.5 AA)</strong>: Buttons/links need
            24x24 CSS pixels minimum. Small icons kill mobile accessibility.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            Understandable: Can they read it?
          </h2>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>1. Readable Text (WCAG 3.1.5 AA)</strong>: Use common words
            at 8th-grade reading level. Avoid jargon overload, tools like
            Hemingway App flag complex sentences.
          </span>,
          <span key="2">
            <strong>2. Predictable Navigation (WCAG 3.2.3 AA)</strong>:
            Consistent layouts (logo top-left, menu top-right) help users with
            cognitive disabilities. Don&apos;t surprise them with random button
            placements.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            Robust: Does it work everywhere?
          </h2>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>1. Semantic Headings (WCAG 1.3.1 A)</strong>: Use proper H1,
            H2, H3 tags for structure, not just styling. Screen readers jump
            between headings, styled divs break this flow.
          </span>,
          <span key="2">
            <strong>2. ARIA Labels (WCAG 4.1.2 A)</strong>: Custom interactive
            elements (e.g., sliders, accordions) need aria-label or
            aria-labelledby for screen readers.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            <strong>Tip:</strong> Master these 8 first: they cover 80% of WCAG
            issues.
          </blockquote>
        ),
      },
    ],
  },

  // --- 2.2.3 HOW TO MEET WCAG ---
  {
    slug: "how-to-meet-wcag",
    title: "2.2.3 How to Meet WCAG",
    sectionTitle: "Standards and Regulations",
    parentId: "introduction-to-wcag",
    blocks: [
      // {
      //   type: "image",
      //   src: "/ArticleIllustrations/section1/ill1.png",
      //   alt: "Illustration for How to Meet WCAG",
      //   caption: "Placeholder: How to Meet WCAG",
      // },
      {
        type: "text",
        content: (
          <p>
            <strong>First of all:</strong> Don&apos;t see WCAG as a checklist of
            annoyances. Think of it as{" "}
            <strong>design constraints needed for better work</strong>. And for
            creativity to flourish, constraints are needed. Good accessibility
            forces cleaner layouts, smarter typography, and intuitive flows,
            skills that make you a better designer overall.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            If you&apos;re ready to deep-dive into WCAG, here&apos;s all you
            need: <br />
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              <strong>WCAG 2.2 Guidelines</strong>
            </a>{" "}
            <br />
            <a
              href="https://www.w3.org/WAI/WCAG22/quickref/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              <strong>WCAG 2.2 Quick Reference / checklist</strong>
            </a>
            .
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            These are the official W3C guidelines and checklist, every success
            criterion organized by POUR, with levels A/AA/AAA clearly marked.
            It&apos;s a bit of work to read through, but everything you need is
            there.
          </p>
        ),
      },
    ],
  },

  // --- SECTION 3: UX DESIGN PRINCIPLES ---
  // --- 3.0 THE PSYCHOLOGY OF UI/UX PRINCIPLES ---
  {
    slug: "psychology-ux-principles",
    title: "3.0 The psychology of UI/UX principles",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [
      // {
      //   type: "image",
      //   src: "/ArticleIllustrations/section1/ill1.png",
      //   alt: "Illustration for The psychology of UI/UX principles",
      //   caption: "Placeholder: The psychology of UI/UX principles",
      // },
      {
        type: "text",
        content: (
          <p>
            Good design isn’t just about aesthetics; it’s about{" "}
            <strong>predicting human behavior</strong>. Because the human brain
            is wired to seek patterns and minimize effort, users approach your
            interface with deep-seated psychological expectations.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            The &quot;Laws of UX&quot; are a collection of best practices
            derived from psychology that help designers create intuitive,
            friction-free experiences. By understanding how people perceive,
            process, and react to digital stimuli, you can build interfaces that
            feel &quot;natural&quot; rather than manual.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            In the following sections, we will break down the essential
            principles—from how we move our hands to how we store
            information—that define modern product design:
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Fitts’s Law:</strong> Optimizing movement and target
            acquisition.
          </span>,
          <span key="2">
            <strong>Hick’s Law:</strong> Reducing decision fatigue.
          </span>,
          <span key="3">
            <strong>Miller’s Law:</strong> Managing memory and cognitive load.
          </span>,
          <span key="4">
            <strong>Jakob’s Law:</strong> Leveraging familiarity and mental
            models.
          </span>,
          <span key="5">
            <strong>Gestalt Principles:</strong> Organizing visual
            relationships.
          </span>,
          <span key="6">
            <strong>Aesthetic-Usability Effect:</strong> Understanding the
            effect of Aesthetics on usability
          </span>,
          <span key="7">
            <strong>Doherty Threshold:</strong> Maintaining speed and
            responsiveness to sustain focus.
          </span>,
          <span key="8">
            <strong>Perceived Performance:</strong> Making interfaces feel
            faster through smart design cues.
          </span>,
        ],
      },
    ],
  },

  // --- 3.1 FITT'S LAW ---
  {
    slug: "fitts-law",
    title: "3.1 Fitt's law",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section3/3-1-fittsLaw.png",
        alt: "Illustration of a smartphone screen divided into three color-coded reach zones: red (Hard, top), yellow (Moderate, middle), and green (Easy, bottom), representing thumb reach difficulty on a mobile device.",
        caption: "Place key actions in the easy-to-reach zone of the screen.",
      },
      {
        type: "text",
        content: (
          <p>
            <strong>The Principle</strong> Established by Paul Fitts in 1954,
            this law states that the time required to move to a target is
            determined by the <strong>distance</strong> to the object and its{" "}
            <strong>size</strong>. In simple terms: larger and closer targets
            are easier to hit.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">Core Design Strategies</h2>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Size Matters:</strong> Critical actions (like &quot;Sign
            Up&quot; or &quot;Pay Now&quot; should be large enough to be clicked
            or tapped without extreme precision. Small targets increase error
            rates and user frustration.
          </span>,
          <span key="2">
            <strong>Proximity to Action:</strong> Place related elements near
            each other. For example, a &quot;Submit&quot; button should be close
            to the final form field to minimize the &quot;travel time&quot; of
            the cursor or thumb.
          </span>,
          <span key="3">
            <strong>The Power of Edges:</strong> Screen edges and corners are
            &quot;infinitely large&quot; because the cursor cannot move past
            them. This makes the Windows Start menu or the macOS Apple menu
            extremely easy to acquire.
          </span>,
          <span key="4">
            <strong>The Thumb Zone:</strong> On mobile, place primary
            interactive elements within the natural reach of the user&apos;s
            thumb (typically the bottom half of the screen) to reduce physical
            strain.
          </span>,
          <span key="5">
            <strong>Invisible Padding:</strong> If an icon is small, increase
            its invisible &quot;hit area&quot; (padding) so users can trigger
            the action even if they aren&apos;t pixel-perfect.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            <strong>When to Break the Law</strong> Sometimes you <em>want</em>{" "}
            to slow the user down. Destructive actions, like &quot;Delete
            Account&quot; can be made smaller or placed in harder-to-reach areas
            to prevent accidental clicks.
          </p>
        ),
      },
    ],
  },

  // --- 3.2 HICK'S LAW ---
  {
    slug: "hicks-law",
    title: "3.2 Hick's law",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section3/3-2-hicks.svg",
        alt: "Graph showing Hick's Law: a curved red line rising steeply then flattening, illustrating that response time increases logarithmically as the number of options grows.",
        caption:
          "More choices slow users down, keep menus and options minimal.",
      },
      {
        type: "text",
        content: (
          <p>
            <strong>The Principle:</strong> The time it takes to make a decision
            increases with the number and complexity of choices.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Minimize Options:</strong> Reduce cognitive load by offering
            fewer primary actions.
          </span>,
          <span key="2">
            <strong>Categorize:</strong> Break complex tasks into smaller steps
            in order to decrease cognitive load.
          </span>,
          <span key="3">
            <strong>Progressive Disclosure:</strong> Hide advanced features
            until they are needed to prevent overwhelming new users.
          </span>,
          <span key="4">
            <strong>Onboarding:</strong> Simplify the first-time experience by
            focusing on one step at a time.
          </span>,
        ],
      },
    ],
  },

  // --- 3.3 MILLER'S LAW ---
  {
    slug: "millers-law",
    title: "3.3 Miller's law",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section3/3-3-figma.png",
        alt: "Screenshot of Figma's shape insertion toolbar showing a dropdown menu with 7 options: Rectangle, Line, Arrow, Ellipse, Polygon, Star, and Image/video, with keyboard shortcuts listed alongside each.",
        caption:
          "Figma groups related tools into smaller menus, limiting cognitive load.",
      },
      {
        type: "text",
        content: (
          <p>
            <strong>The Principle:</strong> The average person can only keep 7
            (plus or minus 2) items in their working memory.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Chunking:</strong> Organize content into smaller chunks to
            help users process, understand, and memorize easily. (e.g., grouping
            phone numbers as 000-000-0000).
          </span>,
          <span key="2">
            <strong>Limit Menu Items:</strong> Avoid navigation bars with more
            than 5-9 top-level links.
          </span>,
          <span key="3">
            <strong>Reduce Clutter:</strong> Keep the interface clean so users
            don&apos;t have to process too much information simultaneously.
          </span>,
        ],
      },
    ],
  },

  // --- 3.4 JAKOB'S LAW ---
  {
    slug: "jakobs-law",
    title: "3.4 Jakob's law",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section3/3-4-jakobs.svg",
        alt: "Two identical smartphone wireframes side by side, separated by an equals sign, showing the same layout with a header, image block, button, and navigation bar — illustrating that users expect familiar, consistent layouts across apps.",
        caption:
          "Users transfer expectations from other apps, familiar layouts reduce friction.",
      },
      {
        type: "text",
        content: (
          <p>
            <strong>The Principle:</strong> Users spend most of their time on{" "}
            <em>other</em> websites. They prefer your site to work the same way
            as all the others they already know.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Follow Conventions:</strong> Use standard icons (like a
            magnifying glass for search) and common layouts.
          </span>,
          <span key="2">
            <strong>Don&apos;t Reinvent the Wheel:</strong> Prioritize clarity
            and predictability over unique but confusing innovations.
          </span>,
          <span key="3">
            <strong>Transferable Experience:</strong> Leverage existing mental
            models so users can focus on their tasks rather than learning how to
            use your interface.
          </span>,
        ],
      },
    ],
  },

  // --- 3.5 GESTALT PRINCIPLES ---
  {
    slug: "gestalt-principles",
    title: "3.5 Gestalt principles",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section3/3-5-gestalt.svg",
        alt: "Two diagrams illustrating Gestalt principles: on the left, a grid of grey circles with a vertical column of pink triangles demonstrates Similarity; on the right, the same grey circles arranged in two distinct groups with a gap between them demonstrates Proximity.",
        caption:
          "Similar shapes and close spacing signal grouping to users instantly.",
      },
      {
        type: "text",
        content: (
          <p>
            <strong>The Principle:</strong> The human brain naturally perceives
            objects as organized patterns. Elements that are close together or
            look similar are perceived as related.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Group Related Items:</strong> Use whitespace to separate
            different sections and keep related fields (like
            &quot;Username&quot; and &quot;Password&quot; close.
          </span>,
          <span key="2">
            <strong>Consistency:</strong> Use the same color, shape, and size
            for buttons that perform the same function to help users categorize
            them instantly.
          </span>,
        ],
      },
    ],
  },

  // --- 3.6 AESTHETIC-USABILITY EFFECT ---
  {
    slug: "aesthetic-usability-effect",
    title: "3.6 Aesthetic-usability effect",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section3/3-6-aesthetic.svg",
        alt: "Side-by-side comparison of two 'Login with Email' buttons: a flat grey square-cornered button on the left, and a bold black rounded button on the right, showing how visual polish affects perceived usability.",
        caption:
          "Attractive interfaces are perceived as easier to use, even when they aren't.",
      },
      {
        type: "text",
        content: (
          <p>
            <strong>The Principle:</strong> Users often perceive aesthetically
            pleasing design as design that&apos;s more usable.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>First Impressions Matter:</strong> An aesthetically pleasing
            design creates a positive response in people&apos;s brains, leading
            them to believe the design actually works better than it might.
          </span>,
          <span key="2">
            <strong>Tolerance for Imperfection:</strong> People are more
            forgiving of minor usability issues when a product or service looks
            visually polished and well-crafted.
          </span>,
          <span key="3">
            <strong>A Double-Edged Sword:</strong> Visually pleasing design can
            mask usability problems and prevent real issues from being
            discovered during usability testing — so beauty should complement
            function, not hide its absence.
          </span>,
        ],
      },
    ],
  },

  // --- 3.7 THE DOHERTY THRESHOLD ---
  {
    slug: "doherty-threshold",
    title: "3.7 The Doherty threshold",
    sectionTitle: "UX Design Principles",
    parentId: null,
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section3/3-7-doherty.png",
        alt: "Two loading spinners side by side: one labeled 1s with a red cross (too slow), and one labeled 0.4s with a green checkmark (acceptable), illustrating the Doherty Threshold of under 400ms response time.",
        caption:
          "Responses under 400ms keep users in flow, above that, engagement drops.",
      },
      {
        type: "text",
        content: (
          <p>
            <strong>The Principle:</strong> Productivity soars when a computer
            and its users interact at a pace under 400ms, ensuring neither has
            to wait on the other.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Respond Within 400ms:</strong> Providing system feedback
            within 400 milliseconds keeps users&apos; attention and directly
            increases their productivity.
          </span>,
          <span key="2">
            <strong>Manage Perception:</strong> Use perceived performance
            techniques to improve the feeling of response time, even when the
            actual processing takes longer.
          </span>,
          <span key="3">
            <strong>Animate the Wait:</strong> Animation is a powerful way to
            visually engage users while loading or processing happens in the
            background, making delays feel intentional rather than broken.
          </span>,
          <span key="4">
            <strong>Progress Bars Build Patience:</strong> Progress indicators
            help make wait times tolerable, regardless of how accurately they
            reflect the actual time remaining.
          </span>,
          <span key="5">
            <strong>Delay Can Add Value:</strong> Purposefully adding a small
            delay to a process can increase its perceived value and build a
            sense of trust, even when the process itself takes far less time.
          </span>,
        ],
      },
    ],
  },

  // --- 3.7.1 PERCEIVED PERFORMANCE TECHNIQUES ---
  {
    slug: "perceived-performance-techniques",
    title: "3.7.1 Perceived Performance techniques",
    sectionTitle: "UX Design Principles",
    parentId: "doherty-threshold",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section3/3-7-1-doherty-techniques.png",
        alt: "Two smartphone screens side by side connected by an arrow: a wireframe annotated with numbered UI elements on the left transitioning to a fully rendered Calm app screen on the right, showing how skeleton screens set layout expectations before content loads.",
        caption:
          "Skeleton screens reduce perceived wait time by showing structure immediately, and prevents layout shift.",
      },
      {
        type: "text",
        content: (
          <p>
            How fast an interface <em>feels</em> to a user is just as important
            as how fast it technically is, and designers can influence
            perception directly.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Skeleton Screens:</strong> Instead of a blank page or
            spinning loader, show grey placeholder shapes that mimic the
            incoming layout. The brain reads this as progress, not waiting; used
            by LinkedIn, Facebook and Amazon on feed loads.
          </span>,
          <span key="2">
            <strong>Optimistic UI Updates:</strong> React to a user&apos;s
            action immediately, before the server confirms the result. When you
            &quot;like&quot; a post and the heart turns red instantly, the app
            is assuming success and correcting only if something goes wrong.
          </span>,
          <span key="3">
            <strong>Pre-emptive Loading:</strong> Begin loading the next page
            quietly in the background when a user hovers over a link, so by the
            time they click, the content is already on its way.
          </span>,
          <span key="4">
            <strong>Critical Content First:</strong> Load and display the most
            important on-screen content first, deferring heavy images and
            secondary elements until later. Users feel the page is ready even if
            parts of it are still loading off-screen.
          </span>,
          <span key="5">
            <strong>Instant Feedback:</strong> Give buttons and actions a visual
            response the moment they are triggered. A brief micro-animation on
            click reassures users their action was registered, reducing
            perceived wait time without changing any actual load time.
          </span>,
          <span key="6">
            <strong>Explain the Delay:</strong> If a process genuinely takes
            time, tell the user why. A message like &quot;Generating your
            report&quot; makes the wait feel intentional rather than broken.
          </span>,
        ],
      },
    ],
  },

  // --- SECTION 4: EXAMPLES / CASE STUDIES ---
  // --- 4.0 THE BUSINESS OF ACCESSIBILITY ---
  {
    slug: "business-of-accessibility",
    title: "4.0 The business of Accessibility",
    sectionTitle: "Case studies",
    parentId: null,
    blocks: [
      // {
      //   type: "image",
      //   src: "/ArticleIllustrations/section1/ill1.png",
      //   alt: "Illustration for The business of Accessibility",
      //   caption: "Placeholder: The business of Accessibility",
      // },
      {
        type: "text",
        content: (
          <p>
            Accessibility is often sold as “the right thing to do,” which is
            true, but that is only half the story. It is also about risk,
            revenue, and reputation. If your product ignores accessibility, you
            create legal and financial risk for your company. If you design with
            accessibility in mind, you open your product to more people and make
            it easier for everyone to use.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Two famous stories show both sides: Domino’s, which fought
            accessibility in court and lost, and Tesco, which invested in
            accessibility and saw online sales jump. Together, they explain why
            accessibility belongs in roadmaps, budgets, and design reviews, not
            just in a “nice-to-have” column.
          </p>
        ),
      },
    ],
  },

  // --- 4.0.1 THE DOMINO'S LAWSUIT ---
  {
    slug: "dominos-lawsuit",
    title: "4.0.1 The Domino's lawsuit",
    sectionTitle: "Case studies",
    parentId: "business-of-accessibility",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section4/4-1-1-domino.png",
        alt: "Illustration split down the middle: on the left, a Domino's Pizza website browser window and pizza box; on the right, a courtroom scene with three figures seated behind a bench and a scales of justice icon above them.",
        caption:
          "Domino's was sued for having an inaccessible website, and lost in Court.",
      },
      {
        type: "text",
        content: (
          <p>
            Back in 2015, a blind customer named Guillermo Robles tried to order
            a pizza from Domino’s website and mobile app using a screen reader.
            He could not complete his order, because key parts of the interface
            were not accessible. Labels were missing, controls were not
            announced properly, and navigation with a keyboard or screen reader
            broke the flow of the experience.{" "}
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Robles sued Domino’s under the Americans with Disabilities Act
            (ADA), arguing that a company that serves the public must provide an
            accessible way to order online. Courts agreed that the ADA applied
            to Domino’s digital products because they connect directly to a
            physical place of public accommodation: the pizza stores. After
            years of litigation, a federal court ruled that Domino’s had
            violated the ADA and ordered them to fix the site according to WCAG
            2.0 guidelines.{" "}
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            For a designer, the key lesson is simple. If your product is a
            public service or connects to one, accessibility is not optional.
            Laws in many countries treat inaccessible digital products as
            discrimination against people with disabilities. That can lead to
            lawsuits, forced redesigns on tight deadlines, legal fees, and
            damage to brand trust.{" "}
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            The lesson: risk, cost, and responsibility
          </h2>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Domino’s spent years in court instead of spending months improving
            their UI. The legal costs and reputational impact probably dwarfed
            what an accessible redesign would have cost. After the final ruling,
            they still had to make their website and app accessible, but now
            under a court order.{" "}
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            For teams, skipping alt text or keyboard support might feel harmless
            in a sprint, but at scale it can become a legal problem. Thinking
            about accessibility early reduces that risk and shows regulators and
            users that your company takes inclusion seriously.{" "}
          </p>
        ),
      },
    ],
  },

  // --- 4.0.2 THE TESCO SUCCESS STORY ---
  {
    slug: "tesco-success-story",
    title: "4.0.2 The Tesco success story",
    sectionTitle: "Case studies",
    parentId: "business-of-accessibility",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section4/4-1-2-tesco.png",
        alt: "Screenshot of the early 2000s Tesco.com homepage displayed on a modern device mockup, featuring a navigation bar, product category links, promotional banners, and a welcome message, set against a green background with upward-pointing arrows.",
        caption: "Tesco's accessible early website from 2002 to 2004",
      },
      {
        type: "text",
        content: (
          <p>
            Around the early 2000s, Tesco, a major UK supermarket, rebuilt its
            online shopping experience with accessibility as a core requirement.
            The team focused on clearer structure, better forms, faster
            performance for slow connections, and an interface that worked well
            for screen reader users and keyboard-only users. The goal was that a
            customer could buy a typical basket of items quickly, even over a
            56K modem.{" "}
            <a
              href="https://accessicart.com/roi/tesco-uk-accessibility-overhaul.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [accessicart]
            </a>
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            The results were huge. Within a year of the redesign, Tesco’s online
            sales rose sharply: reported revenue from the accessible site
            reached about £13 million per year from customers who previously
            could not shop easily online. Overall online sales grew by roughly
            350% around that time, from about £52 million in 2000 to roughly
            £235 million in 2001, and weekly orders grew from tens of thousands
            to hundreds of thousands during peak seasons. The redesign cost was
            about £35,000, which translated into an enormous return on
            investment.{" "}
            <a
              href="https://www.w3.org/WAI/business-case/archive/tesco-case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [w3]
            </a>
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <h2 className="text-2xl font-bold mt-8">
            The lesson: accessibility is good business
          </h2>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Tesco learned that accessible design is also faster, clearer design.
            When forms are well structured, labels are obvious, and flows are
            simple, people complete orders more quickly. That helps everyone,
            not just customers with disabilities.{" "}
            <a
              href="https://accessicart.com/roi/tesco-uk-accessibility-overhaul.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [accessicart]
            </a>
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            There is also a reach effect. When a site works with assistive tech
            and on low-bandwidth devices, more people can use it in more
            contexts. That means more customers, more completed purchases, and
            fewer people dropping out in the middle of a checkout. For an
            e‑commerce team, accessibility improves conversion and reduces
            friction at the exact points where money changes hands.{" "}
            <a
              href="https://www.w3.org/WAI/business-case/archive/tesco-case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [w3]
            </a>
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            if you want to checkout Tesco&apos;s 2000s webpage, you can do so at
            the following link: <br />
            <a
              href="https://www.webdesignmuseum.org/gallery/tesco-in-2000"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              https://www.webdesignmuseum.org/gallery/tesco-in-2000
            </a>{" "}
            <br />
            and you can reference the official case study from w3c here. <br />
            <a
              href="https://www.w3.org/WAI/business-case/archive/tesco-case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              https://www.w3.org/WAI/business-case/archive/tesco-case-study
            </a>
          </p>
        ),
      },
    ],
  },

  // --- 4.1 THE GOLD STANDARDS - INDUSTRY REFERENCES ---
  {
    slug: "industry-references",
    title: "4.1 The gold standards - Industry references",
    sectionTitle: "Case studies",
    parentId: null,
    blocks: [
      // {
      //   type: "image",
      //   src: "/ArticleIllustrations/section1/ill1.png",
      //   alt: "Illustration for The gold standards - Industry references",
      //   caption: "Placeholder: The gold standards - Industry references",
      // },
      {
        type: "text",
        content: (
          <p>
            You could treat accessibility guidelines as a long list of rules. A
            better approach is to study live systems that already apply those
            rules. The resources below are widely respected across the industry
            and give you concrete patterns you can copy, adapt, and learn from.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            Each one is here not just for “inspiration,” but because it answers
            a specific question that designers often have. Use them when you are
            stuck, when you want to sense-check a decision, or when you need
            examples for your product team.
          </p>
        ),
      },
      {
        type: "list",
        items: [
          <span key="1">3.1 Apple Human Interface Guidelines</span>,
          <span key="2">3.2 Microsoft Inclusive Design Toolkit</span>,
          <span key="3">3.3 Gov.UK Design System</span>,
          <span key="4">3.4 Adobe Spectrum</span>,
        ],
      },
    ],
  },

  // --- 4.1.1 APPLE HUMAN INTERFACE GUIDELINES ---
  {
    slug: "apple-guidelines",
    title: "4.1.1 Apple Human Interface Guidelines",
    sectionTitle: "Case studies",
    parentId: "industry-references",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section4/4-2-1-apple.png",
        alt: "Screenshot of Apple's Human Interface Guidelines website showing 'New and updated' sections for Charting data, Live Activities, and Designing for iPadOS",
        caption:
          "Apple's HIG is the go-to reference for building accessible, platform-consistent interfaces.",
      },
      {
        type: "text",
        content: (
          <p>
            Apple’s Human Interface Guidelines (HIG) explain how iOS, macOS, and
            other Apple platforms handle accessibility features like Dynamic
            Type, larger text, and color contrast. The “Display and Text Size”
            related guidance shows how the system lets users change text size
            and contrast, and how apps are expected to respect those choices.{" "}
            <a
              href="https://www.nadcab.com/blog/apple-human-interface-guidelines-explained"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [nadcab]
            </a>
          </p>
        ),
      },
      {
        type: "text",
        content: <p>Why it matters for you:</p>,
      },
      {
        type: "list",
        items: [
          <span key="1">
            It shows how to design text that scales up to 200–300% without
            breaking the layout, by planning for flexible spacing and responsive
            components.{" "}
            <a
              href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/larger-text-evaluation-criteria/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [developer.apple]
            </a>
          </span>,
          <span key="2">
            It provides baseline rules on minimum font sizes and touch target
            sizes, like a minimum of 44×44 points for tappable elements, which
            helps people with motor impairments hit targets more reliably.{" "}
            <a
              href="https://www.nadcab.com/blog/apple-human-interface-guidelines-explained"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [nadcab]
            </a>
          </span>,
          <span key="3">
            It reinforces color contrast requirements, for example a contrast
            ratio of at least 4.5:1 for regular text and 3:1 for large text,
            which directly affects readability on bright or small screens.{" "}
            <a
              href="https://www.nadcab.com/blog/apple-human-interface-guidelines-explained"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [nadcab]
            </a>
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            If you design mobile apps, the HIG is your benchmark. Use it when
            you decide font scales, button sizes, or how your layout behaves
            when users choose very large text.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            <a
              href="https://developer.apple.com/design/human-interface-guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              https://developer.apple.com/design/human-interface-guidelines
            </a>
          </p>
        ),
      },
    ],
  },

  // --- 4.1.2 MATERIAL DESIGN ACCESSIBILITY GUIDELINES ---
  {
    slug: "material-design-guidelines",
    title: "4.1.2 Material design Accessibility Guidelines",
    sectionTitle: "Case studies",
    parentId: "industry-references",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section4/4-2-2-material.png",
        alt: "Collage of Android app UI screens showcasing Material 3 design components on a purple background",
        caption:
          "Google's Material 3 is a comprehensive design system built with accessibility as a core principle.",
      },
      {
        type: "text",
        content: (
          <p>
            Material Design 3 (Google&apos;s design system) treats accessibility
            as a core part of the system, not a layer added on top. Its
            guidelines cover color, touch targets, and layout structure, with
            built-in tooling to help teams check compliance as they design.
          </p>
        ),
      },
      {
        type: "text",
        content: <p>Why it matters for you:</p>,
      },
      {
        type: "list",
        items: [
          <span key="1">
            <strong>Color contrast built into the system:</strong> Material
            Design 3 uses a tonal color system built on luminance rather than
            hue. This means any color scheme generated through the Material
            Theme Builder is designed to meet WCAG contrast requirements by
            default, with a minimum ratio of 4.5:1 for regular text and 3:1 for
            large text.
          </span>,
          <span key="2">
            <strong>Touch target sizing:</strong> The guidelines recommend a
            minimum touch target size of 48x48dp for interactive elements, with
            7-10mm as the ideal physical size on screen. This ensures users with
            motor impairments, or anyone using a phone one-handed, can reliably
            hit interactive elements.
          </span>,
          <span key="3">
            <strong>Dynamic Type and text scaling:</strong> Like Apple&apos;s
            HIG, Material Design expects components to support large text sizes
            and flexible layouts. Designing with responsive spacing and fluid
            components means your UI holds up when a user increases their font
            size through system settings.
          </span>,
          <span key="4">
            <strong>Testing with real tools:</strong> The Material Theme Builder
            includes built-in contrast checking, so you can verify your color
            choices meet accessibility standards before anything goes to
            development.
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            Use Material Design&apos;s guidelines as your baseline when building
            Android or cross-platform apps. The tonal color system in particular
            is one of the clearest practical frameworks for making accessible
            color decisions without having to manually test every combination.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            <a
              href="https://m3.material.io/foundations/designing/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              https://m3.material.io/foundations/designing/overview
            </a>
          </p>
        ),
      },
    ],
  },

  // --- 4.1.3 MICROSOFT INCLUSIVE DESIGN TOOLKIT ---
  {
    slug: "microsoft-toolkit",
    title: "4.1.3 Microsoft Inclusive Design Toolkit",
    sectionTitle: "Case studies",
    parentId: "industry-references",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section4/4-2-3-microsoftinclusive.png",
        alt: "Microsoft Inclusive Design branding with white outline illustrations of diverse people with various disabilities on a black background",
        caption:
          "Microsoft's Inclusive Design toolkit is a key reference for designing with, not just for, disabled people.",
      },
      {
        type: "text",
        content: (
          <p>
            Microsoft’s Inclusive Design Toolkit is not just a guideline
            document, it is a set of methods and activities to change how you
            think about users. It defines inclusive design as a practice you can
            apply to any process, with accessibility as one of the
            outcomes.{" "}
          </p>
        ),
      },
      {
        type: "text",
        content: <p>Why it matters for you:</p>,
      },
      {
        type: "list",
        items: [
          <span key="1">
            It introduces the idea of permanent, temporary, and situational
            disabilities, for example someone who has one arm, someone with a
            broken arm, and someone carrying a baby all struggling with the same
            one‑handed interaction.{" "}
          </span>,
          <span key="2">
            It encourages you to involve people with different abilities early
            in research and prototyping, so your designs are shaped by real
            experiences, not just assumptions.{" "}
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            Use this toolkit when you want to shift a team from “checklist
            thinking” to a mindset where inclusion is part of every design
            discussion.
          </p>
        ),
      },
    ],
  },

  // --- 4.1.4 GOV.UK DESIGN SYSTEM ---
  // FIX IMAGE
  {
    slug: "gov-uk-system",
    title: "4.1.4 Gov.UK design system",
    sectionTitle: "Case studies",
    parentId: "industry-references",
    blocks: [
      {
        type: "image",
        src: "/ArticleIllustrations/section4/4-2-4-govuk.png",
        alt: "GOV.UK homepage displayed across two phones and a desktop browser",
        caption:
          "GOV.UK is widely regarded as one of the most accessible government websites in the world.",
      },
      {
        type: "text",
        content: (
          <p>
            The GOV.UK Design System is famous for its clear, text‑first
            approach. It was built for government services that must work for
            everyone, which means accessibility is non‑negotiable. The system
            includes patterns for forms, error messages, navigation, and content
            that many teams worldwide now copy.{" "}
            <a
              href="https://design-system.service.gov.uk/accessibility/accessibility-strategy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [design-system.service.gov]
            </a>
          </p>
        ),
      },
      {
        type: "text",
        content: <p>Why it matters for you:</p>,
      },
      {
        type: "list",
        items: [
          <span key="1">
            It follows the four core principles of web accessibility:
            perceivable, operable, understandable, and robust, and turns them
            into practical patterns.{" "}
            <a
              href="https://design-system.service.gov.uk/accessibility/accessibility-strategy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [design-system.service.gov]
            </a>
          </span>,
          <span key="2">
            It shows real examples of complex forms, like multi‑page journeys
            and detailed applications, where labels, hints, and error messages
            are written in simple language.{" "}
            <a
              href="https://design-system.service.gov.uk/accessibility/accessibility-strategy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [design-system.service.gov]
            </a>
          </span>,
          <span key="3">
            It proves that you can design a large, serious service with a very
            simple visual style and still give users a smooth, confident
            experience.{" "}
            <a
              href="https://design-system.service.gov.uk/accessibility/accessibility-strategy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              [design-system.service.gov]
            </a>
          </span>,
        ],
      },
      {
        type: "text",
        content: (
          <p>
            Whenever you need to design a form or a long service flow, check how
            GOV.UK handles labels, help text, and errors. It is one of the
            clearest models you can learn from.
          </p>
        ),
      },
      {
        type: "text",
        content: (
          <p>
            <a
              href="https://www.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              https://www.gov.uk/
            </a>
          </p>
        ),
      },
    ],
  },
];
