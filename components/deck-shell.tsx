"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import type { Project } from "@/content/types";

type DeckShellProps = {
  project: Project;
  currentSlide: number;
  children: React.ReactNode;
};

export function DeckShell({ project, currentSlide, children }: DeckShellProps) {
  const router = useRouter();
  const total = project.slides.length;
  const previousHref = currentSlide > 1 ? `/projects/${project.slug}/${currentSlide - 1}` : undefined;
  const nextHref = currentSlide < total ? `/projects/${project.slug}/${currentSlide + 1}` : undefined;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && previousHref) {
        router.push(previousHref);
      }
      if (event.key === "ArrowRight" && nextHref) {
        router.push(nextHref);
      }
      if (event.key === "Home") {
        router.push(`/projects/${project.slug}/1`);
      }
      if (event.key === "End") {
        router.push(`/projects/${project.slug}/${total}`);
      }
      if (event.key === "Escape") {
        router.push("/projects");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [nextHref, previousHref, project.slug, router, total]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-hairline">
        <div className="mx-auto flex h-14 w-full max-w-frame items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/projects" className="text-sm text-ink">{"[<- Back to Projects]"}</Link>
          <div className="text-right">
            <p className="text-sm font-medium text-ink">{project.title}</p>
            <p className="text-sm text-mute">{String(currentSlide).padStart(2, "0")} / {String(total).padStart(2, "0")}</p>
          </div>
        </div>
      </header>

      <div className="deck-grid mx-auto grid w-full max-w-frame gap-0 md:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="border-b border-hairline p-4 md:border-b-0 md:border-r md:p-6">
          <p className="text-sm font-bold text-ink">[+] Slides</p>
          <nav className="mt-4 space-y-3">
            {project.slides.map((slide) => {
              const active = slide.number === currentSlide;
              return (
                <Link
                  key={slide.id}
                  href={`/projects/${project.slug}/${slide.number}`}
                  className={`block text-sm ${active ? "font-bold text-ink" : "text-mute"}`}
                >
                  {String(slide.number).padStart(2, "0")} {slide.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-col justify-between">
          <main className="min-w-0">{children}</main>
          <div className="border-t border-hairline px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              {previousHref ? (
                <Link href={previousHref} className="rounded-sm border border-hairline-strong px-4 py-2 text-sm text-ink">
                  {"[<- Prev]"}
                </Link>
              ) : <span className="rounded-sm border border-hairline px-4 py-2 text-sm text-ash">{"[<- Prev]"}</span>}
              {nextHref ? (
                <Link href={nextHref} className="rounded-sm border border-ink bg-ink px-4 py-2 text-sm text-canvas">
                  {"[Next ->]"}
                </Link>
              ) : <span className="rounded-sm border border-hairline px-4 py-2 text-sm text-ash">{"[Next ->]"}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
