import { notFound, redirect } from "next/navigation";

import { getProjectBySlug } from "@/content/projects";

export default function ProjectEntryPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }
  redirect(`/projects/${project.slug}/1`);
}
