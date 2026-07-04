import Link from "next/link";

import { AsciiWordmark } from "@/components/ascii-wordmark";

export function PrimaryNav() {
  return (
    <header className="border-b border-hairline bg-canvas">
      <div className="mx-auto flex h-14 w-full max-w-frame items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <AsciiWordmark />
        </Link>
        <nav className="flex items-center gap-4 text-sm text-ink">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <a href="mailto:isaprabutama@gmail.com" className="rounded-sm border border-ink bg-ink px-3 py-1 text-canvas">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
