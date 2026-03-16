import Image from "next/image";
import PillButton from "@/Components/PillButton";
import ThemeToggle from "@/Components/ThemeToggle";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import NavBar from "@/Components/NavBar";

export default function Home() {
  return (
    <main className="bg-main-bg  min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="heading-1 mb-4 text-zinc-950">Welcome to Next.js!</h1>
        <p className="paragraph mb-6 text-zinc-600">
          Get started by editing <code>src/app/page.jsx</code>
        </p>
        <a
          href="https://nextjs.org/docs"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          Read the documentation
          <div className="p-3">
            <ArrowRight />
          </div>
        </a>
        <PillButton href="/getting-started" variant="secondary" fill="hollow">
          Get started
        </PillButton>
      </div>
      <ThemeToggle />
    </main>
  );
}
