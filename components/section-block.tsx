import { SectionLabel } from "@/components/section-label";

export function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-hairline py-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-content flex-col gap-5 px-4 sm:px-6">
        <SectionLabel>{title}</SectionLabel>
        <div className="text-base leading-6 text-body">{children}</div>
      </div>
    </section>
  );
}
