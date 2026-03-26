import Link from "next/link";
import PillButton from "@/Components/PillButton";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 flex flex-col items-center justify-center text-primary-foreground text-center min-h-[80vh]">
      <div className="font-rubik mb-8">
        <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg leading-relaxed max-w-[520px]">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <PillButton href="/" variant="secondary" fill="full" className="px-8">
        Return Home
      </PillButton>
    </main>
  );
}
