import Link from "next/link";

import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-content px-4 py-16 sm:px-6">
        <p className="text-sm text-mute">[-] Not Found</p>
        <h1 className="mt-3 text-[30px] font-bold leading-[1.5] text-ink sm:text-[38px]">Page not found</h1>
        <p className="mt-4 text-base leading-6 text-body">Requested page or slide does not exist.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/" className="rounded-sm border border-ink bg-ink px-4 py-2 text-canvas">[ Home ]</Link>
          <Link href="/projects" className="rounded-sm border border-hairline-strong px-4 py-2 text-ink">[ Projects ]</Link>
        </div>
      </section>
    </SiteShell>
  );
}
