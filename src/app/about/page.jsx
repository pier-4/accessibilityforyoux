import Link from "next/link";
import BigLogo from "@/Components/About/BigLogo";

export const metadata = {
  alternates: {
    canonical: "https://accessibilityforyoux.org/about",
  },
};

export default function AboutContent() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 lg:pt-20 pb-24 flex flex-col items-center text-left">
      <div className="mb-16">
        <BigLogo />
      </div>

      <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed  max-w-prose-sm font-rubik">
        <p>
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
            Accessibilityforyoux
          </span>{" "}
          is a project born from a bachelor&apos;s degree thesis in graphic
          design, created with one clear goal in mind: making accessibility
          easier to learn and understand for everyone.
        </p>
        <p>
          Accessibility can feel overwhelming at first, full of technical
          guidelines and complex terminology. This project breaks it down into
          something approachable, practical, and actually useful, whether
          you&apos;re a designer, developer, or just someone curious about
          building more inclusive experiences.
        </p>
        <p>
          From core concepts to real-world applications, we are here to guide
          you through the world of accessible design, one step at a time.
        </p>
      </div>

      <hr className="w-16 h-1 my-16 bg-zinc-200 dark:bg-zinc-800 border-0 rounded-full" />

      <div className="flex flex-col items-center gap-6 font-rubik w-full">
        <div className="space-y-2">
          <h2 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100">
            Get in Touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Have questions or feedback? Reach out at{" "}
            <Link
              href="mailto:info@pierlucadesign.xyz"
              className="font-medium text-primary-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              info@pierlucadesign.xyz
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-6 mt-4 text-zinc-500 dark:text-zinc-400">
          <Link
            href="https://www.instagram.com/pierluca.design/"
            aria-label="Instagram"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link
            href="https://github.com/pier-4/accessibilityforyoux"
            aria-label="GitHub"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700"></div>
          <Link
            href="https://pierlucadesign.xyz"
            target="_blank"
            className="font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline underline-offset-4"
          >
            pierlucadesign.xyz
          </Link>
        </div>
        <hr
          id="privacy-policy"
          className="w-16 h-1 my-16 bg-zinc-200 dark:bg-zinc-800 border-0 rounded-full"
        />

        <div className="space-y-6 text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl font-rubik text-center">
          <h2 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-xs">
            Privacy & Cookie Policy
          </h2>
          <p>
            This website is an academic project and does not collect, store, or
            process personal data for commercial purposes. We prioritize user
            privacy by avoiding any form of behavioral tracking or third-party
            profiling cookies.
          </p>
          <div className="space-y-4">
            <p>
              <strong>Technical Cookies:</strong> We only use essential local
              storage to remember your visual preferences, such as your choice
              between Light and Dark mode. This data remains on your device and
              is not shared.
            </p>
            <p>
              <strong>Performance & Analytics:</strong> We use Vercel Analytics
              and Speed Insights to monitor anonymous technical data (such as
              page load times and browser types) to improve the platform&apos;s
              performance. No personal information or IP addresses are stored.
            </p>
            <p>
              <strong>Data Controller:</strong> Pierluca Bruni —
              <Link
                href="mailto:info@pierlucadesign.xyz"
                className="hover:underline"
              >
                info@pierlucadesign.xyz
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
