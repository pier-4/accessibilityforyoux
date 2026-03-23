import React from "react";
import Image from "next/image";

export default function ScreenReaderGuide() {
  return (
    <div className="bg-main-bg md:pt-6 mb-12">
      <div className="flex flex-col md:flex-row text-primary-foreground bg-main-bg max-w-7xl mx-auto relative">
        {/* Static Sidebar to maintain the original layout structure */}

        <main className="w-full md:w-9/12 lg:w-7/12 p-4 md:p-8 max-md:max-w-19/20 mx-auto">
          <h1 className="heading-1 dark:text-zinc-50">
            What is a screen reader?
          </h1>

          <article className="text-lg mt-16 flex flex-col gap-12 max-w-prose-sm font-rubik-regular-fix">
            {/* Introduction */}
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
              <div className="relative w-full aspect-3/2">
                <Image
                  src="/tools/braillekeyboard.png"
                  alt="A user navigating a website using a braille display and keyboard"
                  fill
                  priority
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="italic text-sm text-secondary-hierarchy">
                Desktop users often pair screen readers like JAWS or NVDA with
                refreshable braille displays.
              </p>
            </div>

            {/* Navigation */}
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
            <div id="mobile" className="flex flex-col gap-2">
              <div className="relative w-full aspect-3/2">
                <Image
                  src="/tools/voiceover2.webp"
                  alt="A smartphone showing the VoiceOver accessibility settings screen"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="italic text-sm text-secondary-hierarchy">
                iOS VoiceOver and Android TalkBack rely on specific swipe
                gestures instead of keyboard strokes.
              </p>
            </div>

            {/* Developer responsibilities */}
            <div className="dark:text-zinc-200">
              <p>
                To support these tools, developers must ensure images have
                descriptive alt text, interactive elements are focusable, and
                ARIA labels are used when native HTML falls short.
              </p>
            </div>

            {/* ── NEW SECTION: How to use screen readers ── */}
            <hr className="border-zinc-300 dark:border-zinc-600" />
            <div id="how-to-use" className="flex flex-col gap-8">
              <h2 className="heading-2 dark:text-zinc-50">
                How to use a screen reader
              </h2>

              <p className="dark:text-zinc-200">
                Every major platform ships with a built-in screen reader. While
                they all share the same fundamental goal, reading content aloud
                and enabling keyboard or gesture navigation, each has its own
                activation method, interaction model, and shortcut vocabulary.
              </p>

              {/* Windows */}
              <section
                id="windows"
                aria-labelledby="windows-heading"
                className="flex flex-col gap-4"
              >
                <h3
                  id="windows-heading"
                  className="heading-4 dark:text-zinc-100 mt-4"
                >
                  Windows — NVDA &amp; Narrator
                </h3>

                <div className="dark:text-zinc-200 flex flex-col gap-4">
                  <p>
                    Windows has two common options: the free and open-source{" "}
                    <strong>NVDA</strong> (NonVisual Desktop Access) and the
                    built-in <strong>Narrator</strong>. NVDA is the more widely
                    used among blind users because of its broader compatibility
                    and active community of add-ons.
                  </p>

                  <p>
                    To launch Narrator, press{" "}
                    <kbd className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                      Win + Ctrl + Enter
                    </kbd>
                    . Once active, Narrator will immediately begin announcing
                    focused elements and reading content aloud. For NVDA,
                    download it from the official site and launch it like any
                    application — a startup sound confirms it is running.
                  </p>

                  <p>
                    Both screen readers use a concept called{" "}
                    <strong>Browse Mode</strong> (or Scan Mode in Narrator),
                    which lets you navigate a webpage using single-letter
                    shortcuts without triggering interactive elements. Pressing{" "}
                    <kbd className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                      H
                    </kbd>{" "}
                    jumps between headings,{" "}
                    <kbd className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                      L
                    </kbd>{" "}
                    between lists, and{" "}
                    <kbd className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                      B
                    </kbd>{" "}
                    between buttons. Switching to <strong>Forms Mode</strong>{" "}
                    (triggered automatically when you press Enter on a form
                    field) allows typing and interacting with controls normally.
                  </p>
                </div>

                <ul className="list-disc pl-6 flex flex-col gap-2 dark:text-zinc-200">
                  <li>
                    <strong>NVDA + Space:</strong> Toggle between Browse and
                    Forms Mode.
                  </li>
                  <li>
                    <strong>NVDA + F7:</strong> Open the Elements List — a
                    dialog listing all headings, links, and landmarks on the
                    page.
                  </li>
                  <li>
                    <strong>NVDA + Down Arrow:</strong> Read from the current
                    position to the end of the page.
                  </li>
                  <li>
                    <strong>Insert + F4 (NVDA):</strong> Quit the screen reader.
                  </li>
                </ul>
              </section>

              {/* macOS */}
              <section
                id="macos"
                aria-labelledby="macos-heading"
                className="flex flex-col gap-4"
              >
                <h3
                  id="macos-heading"
                  className="heading-4 dark:text-zinc-100 mt-4"
                >
                  macOS — VoiceOver
                </h3>

                <div className="dark:text-zinc-200 flex flex-col gap-4">
                  <p>
                    Apple&apos;s <strong>VoiceOver</strong> is deeply integrated
                    into macOS and requires no additional installation. Toggle
                    it on or off with{" "}
                    <kbd className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                      Cmd + F5
                    </kbd>{" "}
                    , or hold{" "}
                    <kbd className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                      Touch ID
                    </kbd>{" "}
                    three times on supported MacBooks. A welcome dialog will
                    appear on first use offering a quick interactive tutorial —
                    highly recommended for new users.
                  </p>

                  <p>
                    VoiceOver introduces the concept of the{" "}
                    <strong>VoiceOver cursor</strong>, a separate focus that can
                    move independently of the keyboard focus. Most shortcuts are
                    built around the <strong>VO modifier</strong>, which
                    defaults to{" "}
                    <kbd className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                      Ctrl + Option
                    </kbd>
                    . In Safari, VoiceOver&apos;s web navigation is particularly
                    powerful, with a built-in Web Rotor that lets you jump
                    between semantic elements at will.
                  </p>
                </div>

                <ul className="list-disc pl-6 flex flex-col gap-2 dark:text-zinc-200">
                  <li>
                    <strong>VO + U:</strong> Open the Web Rotor to browse
                    headings, links, form controls, and landmarks.
                  </li>
                  <li>
                    <strong>VO + Arrow Keys:</strong> Move the VoiceOver cursor
                    through elements on the page.
                  </li>
                  <li>
                    <strong>VO + Space:</strong> Activate (click) the element
                    under the VoiceOver cursor.
                  </li>
                  <li>
                    <strong>VO + A:</strong> Read all content from the current
                    position.
                  </li>
                </ul>
              </section>

              {/* iOS */}
              <section
                id="ios"
                aria-labelledby="ios-heading"
                className="flex flex-col gap-4"
              >
                <h3
                  id="ios-heading"
                  className="heading-4 dark:text-zinc-100 mt-4"
                >
                  iPhone &amp; iPad — VoiceOver
                </h3>

                <div className="dark:text-zinc-200 flex flex-col gap-4">
                  <p>
                    iOS VoiceOver turns the entire touchscreen into an
                    exploration surface. Enable it under{" "}
                    <strong>Settings → Accessibility → VoiceOver</strong>, or
                    ask Siri to &quot;Turn on VoiceOver&quot; For quick access,
                    you can also assign it to the Accessibility Shortcut
                    (triple-click the side or home button).
                  </p>

                  <p>
                    Once active, tapping any element announces it aloud without
                    activating it. To activate the selected element, double-tap
                    anywhere on the screen. Navigation shifts from direct touch
                    to a gesture-based model — swiping right moves to the next
                    element, swiping left goes back, and a three-finger swipe
                    scrolls the page.
                  </p>
                </div>

                <ul className="list-disc pl-6 flex flex-col gap-2 dark:text-zinc-200">
                  <li>
                    <strong>Swipe right / left:</strong> Move to the next or
                    previous element.
                  </li>
                  <li>
                    <strong>Double-tap:</strong> Activate the selected element
                    (equivalent to a tap).
                  </li>
                  <li>
                    <strong>Two-finger swipe up:</strong> Read all content from
                    the top of the screen.
                  </li>
                  <li>
                    <strong>Rotor gesture (two-finger rotation):</strong> Open
                    the Rotor to switch navigation mode — headings, words,
                    characters, links, and more.
                  </li>
                </ul>
              </section>

              {/* Android */}
              <section
                id="android"
                aria-labelledby="android-heading"
                className="flex flex-col gap-4"
              >
                <h3
                  id="android-heading"
                  className="heading-4 dark:text-zinc-100 mt-4"
                >
                  Android — TalkBack
                </h3>

                <div className="dark:text-zinc-200 flex flex-col gap-4">
                  <p>
                    Google&apos;s <strong>TalkBack</strong> is the built-in
                    screen reader for Android. Enable it under{" "}
                    <strong>Settings → Accessibility → TalkBack</strong>. On
                    most devices, holding both volume keys simultaneously for
                    three seconds also toggles TalkBack on or off — a shortcut
                    worth memorising before enabling it for the first time.
                  </p>

                  <p>
                    TalkBack&apos;s gesture model is similar to iOS VoiceOver:
                    swiping explores elements linearly and a double-tap
                    activates the focused item. However, TalkBack adds support
                    for multi-finger shortcuts and an angular gesture system
                    (drawing an L-shape or diagonal) that allows experienced
                    users to trigger frequent actions quickly.
                  </p>
                </div>

                <ul className="list-disc pl-6 flex flex-col gap-2 dark:text-zinc-200">
                  <li>
                    <strong>Swipe right / left:</strong> Move focus to the next
                    or previous item.
                  </li>
                  <li>
                    <strong>Double-tap:</strong> Activate the focused item.
                  </li>
                  <li>
                    <strong>Swipe up then right:</strong> Open the TalkBack menu
                    for reading controls and global actions.
                  </li>
                  <li>
                    <strong>Two-finger swipe up / down:</strong> Scroll the page
                    without changing focus.
                  </li>
                </ul>
              </section>
            </div>
            {/* ── END NEW SECTION ── */}
          </article>
        </main>
      </div>
    </div>
  );
}
