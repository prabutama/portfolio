import { PrimaryNav } from "@/components/primary-nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <PrimaryNav />
      {children}
    </div>
  );
}
