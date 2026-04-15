import Link from "next/link";

export const metadata = {
  title: "Privacy & Cookie Policy | Accessibilityforyoux",
  alternates: {
    canonical: "https://accessibilityforyoux.org/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl min-h-screen my-auto mx-auto px-6 pb-24 flex flex-col items-center justify-center">
      <div className="space-y-6 text-base text-zinc-500 dark:text-zinc-400 max-w-2xl font-rubik text-center">
        <h1 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-lg md:text-xl mb-8">
          Privacy & Cookie Policy
        </h1>

        <p>
          This website is an academic project and does not collect, store, or
          process personal data for commercial purposes. We prioritize user
          privacy by avoiding any form of behavioral tracking or third-party
          profiling cookies.
        </p>

        <div className="space-y-4">
          <p>
            <strong className="text-zinc-700 dark:text-zinc-300">
              Technical Cookies:
            </strong>{" "}
            We only use essential local storage to remember your visual
            preferences, such as your choice between Light and Dark mode. This
            data remains on your device and is not shared.
          </p>
          <p>
            <strong className="text-zinc-700 dark:text-zinc-300">
              Performance & Analytics:
            </strong>{" "}
            We use Vercel Analytics and Speed Insights to monitor anonymous
            technical data (such as page load times and browser types) to
            improve the platform&apos;s performance. No personal information or
            IP addresses are stored.
          </p>
          <p>
            <strong className="text-zinc-700 dark:text-zinc-300">
              Data Controller:
            </strong>{" "}
            Pierluca Bruni —{" "}
            <Link
              href="mailto:hello@pierlucadesign.com"
              className="hover:underline text-primary-foreground transition-colors"
            >
              hello@pierlucadesign.com
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
