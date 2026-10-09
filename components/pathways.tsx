import {
  ArrowRight,
  Building2,
  Flower2,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";

const audiences = [
  {
    title: "For Individuals & Families",
    body: "Explore psychotherapy, psychological assessments, career guidance, and personal coaching for children, adolescents, youth, and adults.",
    cta: "Enquire About Personal Services",
    href: "#contact",
    art: [Flower2, Heart],
    icon: Heart,
    tone: "bg-white rounded-[8px_64px_8px_64px]",
    artTone: "bg-[linear-gradient(125deg,#f7c6df,#fff0f7)]",
  },
  {
    title: "For Organizations",
    body: "Build healthier, more connected workplaces through tailored training, psychological assessments, coaching, and research.",
    cta: "Discover Organizational Solutions",
    href: "#organizations",
    art: [Sparkles, Users],
    icon: Building2,
    tone: "bg-blush-100 rounded-[64px_8px_64px_8px]",
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
            Whether you&apos;re navigating a personal challenge or investing in
            your team&apos;s well-being, we&apos;re here to help you take the
            next step.
          </p>
        </div>

        <div className="grid gap-5.5 sm:grid-cols-2">
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
            }) => (
              <article
                key={title}
                data-reveal
                className={`${tone} overflow-hidden border border-[#eed9e6] px-7 pb-10 shadow-[0_6px_28px_#63214b09] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_#742a6018] md:px-10`}
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
                <Icon aria-hidden className="size-8 text-magenta-600" />
                <h3 className="mt-4 mb-2.5 text-2xl">{title}</h3>
                <p className="text-muted">{body}</p>
                <a
                  href={href}
                  className="inline-flex items-center gap-2 border-b border-plum-700 pb-1 font-bold text-plum-700 hover:text-magenta-500"
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
