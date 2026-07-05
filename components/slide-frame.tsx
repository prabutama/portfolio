import type { ProjectSlide } from "@/content/types";

export function SlideFrame({ slide }: { slide: ProjectSlide }) {
  const imageBlock = slide.image ? (
    <figure className="mt-6 border border-hairline bg-surface-soft p-3">
      <img src={slide.image.src} alt={slide.image.alt} className="w-full border border-hairline object-contain" />
      {slide.image.caption ? <figcaption className="mt-3 text-sm leading-6 text-mute">{slide.image.caption}</figcaption> : null}
    </figure>
  ) : null;

  const embedHeight = slide.embed?.height ?? 560;
  const embedZoom = slide.embed?.zoom ?? 1;

  const embedBlock = slide.embed ? (
    <figure className="mt-6 border border-hairline bg-surface-soft p-3">
      <div className="overflow-hidden border border-hairline bg-white" style={{ height: `${embedHeight}px` }}>
        <iframe
          src={slide.embed.src}
          title={slide.embed.title}
          loading="lazy"
          className="border-0 bg-white"
          style={{
            width: `${100 / embedZoom}%`,
            height: `${embedHeight / embedZoom}px`,
            transform: `scale(${embedZoom})`,
            transformOrigin: "top left",
          }}
        />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        {slide.embed.caption ? <figcaption className="text-sm leading-6 text-mute">{slide.embed.caption}</figcaption> : <span className="text-sm leading-6 text-mute">Live project preview.</span>}
        <a
          href={slide.embed.src}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm border border-hairline-strong px-3 py-2 text-sm text-ink"
        >
          [Open live site]
        </a>
      </div>
    </figure>
  ) : null;

  const galleryBlock = slide.gallery?.length ? (
    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      <div className="space-y-4">
        {slide.gallery
          .filter((_, index) => index % 2 === 0)
          .map((item) => (
            <figure
              key={item.src}
              className="border border-hairline bg-surface-soft p-3"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="block h-auto w-full border border-hairline object-contain"
              />

              {item.caption ? (
                <figcaption className="mt-3 text-sm leading-6 text-mute">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
      </div>

      <div className="space-y-4">
        {slide.gallery
          .filter((_, index) => index % 2 === 1)
          .map((item) => (
            <figure
              key={item.src}
              className="border border-hairline bg-surface-soft p-3"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="block h-auto w-full border border-hairline object-contain"
              />

              {item.caption ? (
                <figcaption className="mt-3 text-sm leading-6 text-mute">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
      </div>
    </div>
  ) : null;

  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8">
      <div className="border border-hairline bg-canvas p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-hairline pb-4">
          <div>
            <p className="text-sm text-mute">{slide.eyebrow || `${slide.number}`}</p>
            <h1 className="mt-2 text-[24px] font-bold leading-[1.5] text-ink sm:text-[32px]">{slide.title}</h1>
            {slide.summary ? <p className="mt-3 max-w-3xl text-base leading-6 text-body">{slide.summary}</p> : null}
          </div>
        </div>

        {slide.layout === "title" ? (
          <div className="space-y-5">
            {slide.body?.map((paragraph) => <p key={paragraph} className="max-w-3xl text-base leading-6 text-body">{paragraph}</p>)}
            {slide.metrics?.length ? (
              <div className="grid gap-3 sm:grid-cols-3">
                {slide.metrics.map((metric) => (
                  <div key={metric.label} className="border border-hairline px-4 py-3">
                    <p className="text-sm text-mute">{metric.label}</p>
                    <p className="mt-2 text-base font-medium text-ink">{metric.value}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {embedBlock}
            {imageBlock}
            {galleryBlock}
          </div>
        ) : null}

        {slide.layout === "bullets" ? (
          <div className="space-y-3">
            {slide.bullets?.map((bullet) => (
              <p key={bullet} className="text-base leading-6 text-body"><span className="font-medium text-ink">[+]</span> {bullet}</p>
            ))}
            {embedBlock}
            {imageBlock}
            {galleryBlock}
          </div>
        ) : null}

        {slide.layout === "split" ? (
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              {slide.body?.map((paragraph) => <p key={paragraph} className="text-base leading-6 text-body">{paragraph}</p>)}
              {embedBlock}
              {imageBlock}
              {galleryBlock}
            </div>
            <div className="border border-hairline bg-surface-soft p-4">
              <div className="space-y-2">
                {slide.aside?.map((item) => (
                  <p key={item} className="text-base leading-6 text-body"><span className="font-medium text-ink">[x]</span> {item}</p>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {slide.layout === "metrics" ? (
          <div className="space-y-5">
            {slide.body?.map((paragraph) => <p key={paragraph} className="max-w-3xl text-base leading-6 text-body">{paragraph}</p>)}
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {slide.metrics?.map((metric) => (
                <div key={metric.label} className="border border-hairline px-4 py-3">
                  <p className="text-sm text-mute">{metric.label}</p>
                  <p className="mt-2 text-base font-medium text-ink">{metric.value}</p>
                </div>
              ))}
            </div>
            {embedBlock}
            {imageBlock}
            {galleryBlock}
          </div>
        ) : null}

        {slide.layout === "code" ? (
          <div className="space-y-5">
            {slide.body?.map((paragraph) => <p key={paragraph} className="max-w-3xl text-base leading-6 text-body">{paragraph}</p>)}
            {slide.code ? <pre className="overflow-x-auto border border-hairline bg-surface-card p-4 text-sm leading-6 text-ink">{slide.code}</pre> : null}
            {embedBlock}
            {imageBlock}
            {galleryBlock}
          </div>
        ) : null}
      </div>
    </section>
  );
}
