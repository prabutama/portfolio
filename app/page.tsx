import Link from "next/link";

import { AsciiList } from "@/components/ascii-list";
import { HeroTerminal } from "@/components/hero-terminal";
import { ProjectRow } from "@/components/project-row";
import { SectionBlock } from "@/components/section-block";
import { SiteShell } from "@/components/site-shell";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { certifications, education, experience, languages, skillGroups } from "@/content/resume";

const featuredProject = projects.find((project) => project.featured) ?? projects[0];

export default function HomePage() {
  return (
    <SiteShell>
      <HeroTerminal />

      <div className="mt-12 sm:mt-16">
        <SectionBlock title="About">
          <div className="space-y-4">
            {profile.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </SectionBlock>

        <SectionBlock title="Capabilities">
          <AsciiList items={profile.strengths} />
        </SectionBlock>

        <SectionBlock title="Experience">
          <div className="border-t border-hairline">
            {experience.map((entry) => (
              <article key={`${entry.title}-${entry.organization}`} className="border-b border-hairline py-4 last:border-b-0">
                <p className="text-base font-bold text-ink">{entry.title} — {entry.organization}</p>
                <p className="mt-1 text-sm text-mute">{entry.period}</p>
                <div className="mt-3 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <p key={bullet} className="text-base leading-6 text-body"><span className="font-medium text-ink">[+]</span> {bullet}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title="Education">
          <div className="space-y-3">
            <p className="text-base font-bold text-ink">{education.degree}</p>
            <p className="text-base leading-6 text-body">{education.institution}</p>
            <p className="text-sm text-mute">{education.period} / GPA {education.gpa}</p>
            <AsciiList items={education.highlights} />
          </div>
        </SectionBlock>

        <SectionBlock title="Technical Skills">
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="border border-hairline px-4 py-4">
                <p className="text-base font-bold text-ink">{group.title}</p>
                <p className="mt-3 text-base leading-6 text-body">{group.items.join(" / ")}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-base leading-6 text-body">
            <span className="font-medium text-ink">[+]</span> Languages: {languages.join(" / ")}
          </div>
        </SectionBlock>

        <SectionBlock title="Certifications">
          <AsciiList items={certifications} />
        </SectionBlock>

        <SectionBlock title="Selected Work">
          <div className="border-t border-hairline">
            {projects.map((project) => <ProjectRow key={project.slug} project={project} />)}
          </div>
          <div className="pt-4">
            <Link href="/projects" className="rounded-sm border border-ink bg-ink px-4 py-2 text-base text-canvas">
              [ See All Projects ]
            </Link>
          </div>
        </SectionBlock>

        <SectionBlock title="Contact">
          <div className="space-y-2 text-base leading-6">
            <p>[+] GitHub: <a href={profile.links.github} className="underline">{profile.links.github}</a></p>
            {profile.links.linkedin ? <p>[+] LinkedIn: <a href={profile.links.linkedin} className="underline">{profile.links.linkedin}</a></p> : null}
            <p>[+] Email: <a href={profile.links.email} className="underline">{profile.links.email.replace("mailto:", "")}</a></p>
            {profile.links.cv ? <p>[+] CV: <a href={profile.links.cv} className="underline">{profile.links.cv}</a></p> : null}
            <p>[+] Location: {profile.location}</p>
          </div>
        </SectionBlock>
      </div>
    </SiteShell>
  );
}
