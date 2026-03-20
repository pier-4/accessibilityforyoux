import Image from "next/image";
import Link from "next/link";
import BigLogo from "@/Components/About/BigLogo";

export default function AboutContent() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center sm:items-start text-primary-foreground ">
      {/* Logo */}
      <div className="mb-6 self-center">
        <BigLogo />
      </div>

      {/* Body Content */}
      <div className="font-rubik font-rubik-regular-fix text-lg leading-relaxed space-y-6 mt-8 mb-24 max-w-[520px] self-center">
        <p>
          Accessibilityforyoux is a project born from a bachelor&apos;s degree
          thesis in graphic design, created with one clear goal in mind: making
          accessibility easier to learn and understand for everyone.
        </p>
        <p>
          Accessibility can feel overwhelming at first, full of technical
          guidelines and complex terminology. This project breaks it down into
          something approachable, practical, and actually useful, whether
          you&apos;re a designer, developer, or just someone curious about
          building more inclusive experiences.
        </p>
        <p>
          From core concepts to real-world applications, Accessibilityforyoux is
          here to guide you through the world of accessible design, one step at
          a time.
        </p>
      </div>

      {/* Contact Section */}
      <div className="font-rubik text-lg w-full mb-16 max-w-[520px] mx-auto">
        <h2 className="font-bold text-2xl mb-4">Get in Touch</h2>
        <p className="mb-4">
          Have questions or feedback?
          <br />
          Reach out at{" "}
          <Link
            href="mailto:info@pierlucadesign.xyz"
            className="underline underline-offset-4 hover:opacity-70"
          >
            info@pierlucadesign.xyz
          </Link>
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-2">
          <Link href="#" aria-label="Instagram" className="hover:opacity-70">
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
          <Link href="#" aria-label="GitHub" className="hover:opacity-70">
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
          <Link
            href="https://pierlucadesign.xyz"
            target="_blank"
            className="underline underline-offset-4 hover:opacity-70"
          >
            pierlucadesign.xyz
          </Link>
        </div>
      </div>
    </main>
  );
}
