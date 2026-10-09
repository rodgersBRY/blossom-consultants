import {
  ArrowRight,
  Building2,
  Flower2,
  Heart,
  Shapes,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

const audiences = [
  {
    title: "For Children & Families",
    body: "Play-based therapy and assessments that help children and teens work through worry, grief, behaviour and learning challenges, with parents alongside them.",
    cta: "Explore Child Therapy",
    href: "#children",
    art: [Sprout, Shapes],
    icon: Sprout,
    tone: "bg-white rounded-[8px_64px_8px_64px] ring-2 ring-magenta-400",
    artTone: "bg-[linear-gradient(125deg,#f6c6e2,#fdf0f7)]",
    featured: true,
  },
  {
    title: "For Individuals",
    body: "Psychotherapy, psychological assessments, career guidance and personal coaching for youth and adults.",
    cta: "Enquire About Personal Services",
    href: "#contact",
    art: [Flower2, Heart],
    icon: Heart,
    tone: "bg-white rounded-[64px_8px_64px_8px]",
    artTone: "bg-[linear-gradient(125deg,#f7c6df,#fff0f7)]",
  },
  {
    title: "For Organizations",
    body: "Build healthier, more connected workplaces through tailored training, psychological assessments, coaching, and research.",
    cta: "Discover Workplace Solutions",
    href: "#organizations",
    art: [Sparkles, Users],
    icon: Building2,
    tone: "bg-blush-100 rounded-[8px_64px_8px_64px]",
    artTone: "bg-[linear-gradient(125deg,#e9c9e9,#fae3f0)]",
  },
];

export function Pathways() {
  return (
    <section id="pathways" className="section">
      <div className="container-page">
        <div className="text-center">
          <div className="eyebrow" data-reveal>
            How we can help
          </div>
          <h2 className="heading-2" data-reveal>
            Support designed around you
          </h2>
          <p className="mx-auto mb-10.5 max-w-172.5 text-muted">
            Support for a child, for yourself or for your team. Pick the path
            that fits and we&apos;ll take it from there.
          </p>
        </div>

        <div className="grid gap-5.5 md:grid-cols-3">
          {audiences.map(
            ({
              title,
              body,
              cta,
              href,
              art: [ArtA, ArtB],
              icon: Icon,
              tone,
              artTone,
              featured,
            }) => (
              <article
                key={title}
                data-reveal
                className={`${tone} relative flex flex-col overflow-hidden border border-[#eed9e6] px-7 pb-10 shadow-[0_6px_28px_#63214b09] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_#742a6018] md:px-10`}
              >
                <div
                  aria-hidden
                  className={`${artTone} -mx-7 mb-6 flex h-35 items-center justify-center gap-8 md:-mx-10`}
                >
                  <ArtA
                    className="size-20 text-magenta-700"
                    strokeWidth={1.25}
                  />
                  <ArtB
                    className="size-14 text-brand-pink"
                    strokeWidth={1.25}
                  />
                </div>
                {featured && (
                  <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-bold tracking-[0.12em] text-magenta-700 uppercase shadow-[0_4px_14px_#63214b14]">
                    Our specialty
                  </span>
                )}
                <Icon aria-hidden className="size-8 text-magenta-600" />
                <h3 className="mt-4 mb-2.5 text-2xl">{title}</h3>
                <p className="mb-6 text-muted">{body}</p>
                <a
                  href={href}
                  className="mt-auto inline-flex w-fit items-center gap-2 border-b border-plum-700 pb-1 font-bold text-plum-700 hover:text-magenta-500"
                >
                  {cta} <ArrowRight size={16} aria-hidden />
                </a>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
