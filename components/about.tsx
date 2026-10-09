import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { aboutPoints, images } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page grid items-center gap-8.75 md:grid-cols-2 md:gap-17.5">
        <div data-reveal className="group relative isolate">
          <span
            aria-hidden
            className="shape-arch absolute inset-[12px_-12px_-12px_12px] -z-10 border-2 border-magenta-600"
          />
          <div className="shape-arch relative h-82.5 overflow-hidden md:h-102.5">
            <Image
              src={images.about}
              alt="Stock photograph of a welcoming interior"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover saturate-[.86] transition duration-500 group-hover:scale-[1.018] group-hover:saturate-100"
            />
          </div>
          <div className="absolute bottom-4.5 left-5 rounded-[4px_22px_4px_22px] bg-[#fffdfbea] px-4.5 py-3 font-serif text-[22px] text-plum-800">
            Growing together, at every stage.
          </div>
        </div>

        <div>
          <div className="eyebrow" data-reveal>
            Get to know us
          </div>
          <h2 className="heading-2" data-reveal>
            Care grounded in expertise. Growth guided by purpose.
          </h2>
          <p className="my-4">
            Blossom Psychotherapy Services is a mental wellness and professional
            development firm bringing together highly trained professionals with
            local and international experience.
          </p>
          <p className="my-4">
            Our approach combines evidence-based techniques with services
            tailored to the needs of individuals, groups, and organizations.
          </p>
          <ul className="my-4">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 py-2">
                <Check
                  aria-hidden
                  size={18}
                  strokeWidth={3}
                  className="text-magenta-500"
                />
                {point}
              </li>
            ))}
          </ul>
          <a className="btn mt-2" href="#contact">
            Connect With Our Team <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
