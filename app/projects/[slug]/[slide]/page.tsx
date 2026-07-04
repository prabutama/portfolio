import { notFound } from "next/navigation";

import { DeckShell } from "@/components/deck-shell";
import { SlideFrame } from "@/components/slide-frame";
import { getProjectBySlug } from "@/content/projects";
import { clampSlideIndex } from "@/lib/deck";

export default function ProjectSlidePage({ params }: { params: { slug: string; slide: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  const parsed = Number(params.slide);
  const currentSlide = clampSlideIndex(parsed, project.slides.length);
  const slide = project.slides[currentSlide - 1];

  if (!slide || String(currentSlide) !== params.slide) {
    notFound();
  }

  return (
    <DeckShell project={project} currentSlide={currentSlide}>
      <SlideFrame slide={slide} />
    </DeckShell>
  );
}
