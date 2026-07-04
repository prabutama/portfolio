import Link from "next/link";

import { profile } from "@/content/profile";

export function HeroTerminal() {
  return (
    <section className="mx-auto mt-10 w-full max-w-frame px-4 sm:mt-14 sm:px-6">
      <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div className="space-y-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <img src={profile.photo} alt={profile.name} className="h-24 w-24 rounded-full border border-hairline object-contain" />
            <div>
              <p className="text-sm text-mute">[x] {profile.role}</p>
              <h1 className="mt-3 max-w-3xl text-[30px] font-bold leading-[1.5] text-ink sm:text-[38px]">
                {profile.name}
              </h1>
              <p className="mt-2 text-sm text-mute">{profile.location} / {profile.openToWork ? "Open to Work" : "Available by request"}</p>
            </div>
          </div>
          <p className="max-w-3xl text-base leading-6 text-body">{profile.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-sm border border-ink bg-ink px-5 py-2 text-base font-medium text-canvas">
              [ View Projects ]
            </Link>
            <a href={profile.links.email} className="rounded-sm border border-hairline-strong bg-canvas px-5 py-2 text-base font-medium text-ink">
              [ Contact ]
            </a>
            {profile.links.cv ? (
              <a href={profile.links.cv} className="rounded-sm border border-hairline-strong bg-canvas px-5 py-2 text-base font-medium text-ink">
                [ CV ]
              </a>
            ) : null}
          </div>
        </div>
        <div className="border border-hairline bg-surface-dark px-6 py-8 text-canvas">
          <div className="mt-6 rounded-sm bg-surface-dark-elevated px-3 py-2 text-sm leading-6 text-canvas">
            <p>| role   software / devops / systems</p>
            <p>| focus  monitoring / infrastructure / web</p>
            <p>| status open to work</p>
          </div>
          <p className="mt-6 text-sm text-ash">tab switch project   ctrl-p open deck</p>
        </div>
      </div>
    </section>
  );
}
