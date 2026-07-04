import Link from "next/link";

import type { Project } from "@/content/types";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="border-t border-hairline py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-base font-bold text-ink">{project.title}</p>
          <p className="mt-1 text-sm text-mute">{project.year} / {project.role}</p>
          <p className="mt-3 text-base leading-6 text-body">{project.summary}</p>
          <p className="mt-3 text-sm text-mute">{project.stack.join(" / ")}</p>
        </div>
        <Link href={`/projects/${project.slug}/1`} className="w-fit rounded-sm border border-ink bg-ink px-4 py-2 text-sm text-canvas">
          [ Open Deck ]
        </Link>
      </div>
    </article>
  );
}
