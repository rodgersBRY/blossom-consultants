import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { expertise, type ExpertiseShape } from "@/lib/content";

const shapeClass: Record<ExpertiseShape, string> = {
  arch: "shape-arch",
  diagonal: "shape-diagonal",
  petal: "shape-petal",
};

export function Expertise() {
  return (
    <section id="services" className="section overflow-hidden bg-blush-50">
      <div className="container-page">
        <div className="eyebrow" data-reveal>
          What we offer
        </div>
        <h2 className="heading-2" data-reveal>
          Our areas of expertise
        </h2>
        <p className="mb-5.5 max-w-170 text-muted md:mb-11.25">
          Thoughtful support for individuals, families and organizations,
          grounded in care, expertise and meaningful growth.
        </p>

        <div className="border-t border-[#ead6e2]">
          {expertise.map((item, i) => {
            const number = String(i + 1).padStart(2, "0");
            const flipped = i % 2 === 1;
            const shape = shapeClass[item.shape];
            return (
              <article
                key={item.title}
                aria-labelledby={`expertise-${number}`}
                className="grid items-center gap-7.5 border-b border-[#ead6e2] py-13 md:grid-cols-2 md:gap-[clamp(30px,7vw,110px)] md:py-[clamp(45px,6vw,84px)]"
              >
                <div
                  data-reveal={flipped ? "right" : "left"}
                  className={`group relative isolate w-full max-w-142.5 justify-self-center md:max-w-125 ${flipped ? "md:order-2" : ""}`}
                >
                  <div
                    className={`relative h-80 overflow-hidden md:h-[clamp(285px,31vw,390px)] ${shape}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) 500px, 100vw"
                      className="object-cover contrast-[1.04] saturate-[.83] transition duration-700 group-hover:scale-[1.025] group-hover:saturate-100"
                    />
                  </div>
                  <span aria-hidden className={`photo-frame ${shape}`} />
                </div>

                <div
                  data-reveal={flipped ? "left" : "right"}
                  className="max-w-117.5"
                >
                  <div className="flex items-center gap-4 text-[11px] font-bold tracking-[0.16em] text-[#982f79] uppercase">
                    <span className="font-serif text-[25px] tracking-normal text-[#bf3a8b]">
                      {number}
                    </span>
                    <span>{item.kicker}</span>
                  </div>
                  <h3
                    id={`expertise-${number}`}
                    className="my-4.75 text-[34px] text-plum-900 md:text-[clamp(30px,3.5vw,48px)]"
                  >
                    {item.title}
                  </h3>
                  <p className="mb-6.5 leading-[1.8] text-[#5b505a]">
                    {item.body}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3.75 border-b border-[#cb71a8] pb-2 font-bold text-[#84276d] transition-all duration-300 hover:gap-5.5 hover:text-[#b52783]"
                  >
                    Enquire about this service{" "}
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
