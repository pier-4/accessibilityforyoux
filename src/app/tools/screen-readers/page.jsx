import React from "react";
import Image from "next/image";

export default function ScreenReaderGuide() {
  return (
    <div className="bg-main-bg md:pt-6">
      <div className="flex flex-col md:flex-row text-primary-foreground bg-main-bg max-w-7xl mx-auto relative">
        {/* Static Sidebar to maintain the original layout structure */}

        <main className="w-full md:w-9/12 lg:w-7/12 p-4 md:p-8 max-md:max-w-19/20 mx-auto">
          <h1 className="heading-1 dark:text-zinc-50">
            How to Use Screen Readers
          </h1>

          <article className="text-lg mt-16 flex flex-col gap-12 max-w-prose-sm font-rubik-regular-fix">
            {/* Text Block */}
            <div id="introduction" className="dark:text-zinc-200">
              <p>
                Screen readers are assistive software programs that convert
                digital text into synthesized speech or braille output. They are
                essential tools that allow individuals with severe visual
                impairments or blindness to use computers, smartphones, and web
                applications.
              </p>
            </div>

            {/* Image Block 1 */}
            <div className="flex flex-col gap-2">
              <div className="relative w-full aspect-3/2 ">
                <Image
                  src="/tools/braillekeyboard.png"
                  alt="A user navigating a website using a braille display and keyboard"
                  fill
                  priority
                  className="object-fill rounded-xl "
                />
              </div>
              <p className="italic text-sm text-secondary-hierarchy">
                Desktop users often pair screen readers like JAWS or NVDA with
                refreshable braille displays.
              </p>
            </div>

            {/* Text Block */}
            <div id="navigation" className="dark:text-zinc-200">
              <p>
                Instead of using a mouse, screen reader users navigate
                interfaces using complex keyboard shortcuts. They rely heavily
                on semantic HTML, such as proper heading hierarchies and
                landmarks, to understand the layout of a page.
              </p>
            </div>

            {/* List Block */}
            <ul className="list-disc pl-6 flex flex-col gap-2 -mt-8">
              <li>
                <strong>Tab:</strong> Jumps between interactive elements like
                links, buttons, and form fields.
              </li>
              <li>
                <strong>H:</strong> Skips directly to the next heading on the
                page.
              </li>
              <li>
                <strong>Arrow Keys:</strong> Reads the document linearly, line
                by line or character by character.
              </li>
            </ul>

            {/* Image Block 2 */}
            <div id="mobile" className="flex flex-col gap-2 ">
              <div className="relative w-full aspect-3/2 ">
                <Image
                  src="/tools/voiceover2.webp"
                  alt="A smartphone showing the VoiceOver accessibility settings screen"
                  fill
                  className="object-fill rounded-xl "
                />
              </div>
              <p className="italic text-sm text-secondary-hierarchy">
                iOS VoiceOver and Android TalkBack rely on specific swipe
                gestures instead of keyboard strokes.
              </p>
            </div>

            {/* Final Text Block */}
            <div className="dark:text-zinc-200">
              <p>
                To support these tools, developers must ensure images have
                descriptive alt text, interactive elements are focusable, and
                ARIA labels are used when native HTML falls short.
              </p>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
