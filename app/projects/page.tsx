import { ProjectRow } from "@/components/project-row";
import { SectionBlock } from "@/components/section-block";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-content px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-sm text-mute">[x] Project Index</p>
        <h1 className="mt-3 text-[30px] font-bold leading-[1.5] text-ink sm:text-[38px]">Projects</h1>
        <p className="mt-4 max-w-3xl text-base leading-6 text-body">
          A selection of systems, monitoring, backend, and full-stack work. Each project opens in a true-slide presentation deck.
        </p>
      </section>

      <SectionBlock title="All Projects">
        <div className="border-t border-hairline">
          {projects.map((project) => <ProjectRow key={project.slug} project={project} />)}
        </div>
      </SectionBlock>
    </SiteShell>
  );
}
