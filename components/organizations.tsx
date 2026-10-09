import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { corporateTopics, images } from "@/lib/content";

export function Organizations() {
  return (
    <section
      id="organizations"
      className="section bg-[linear-gradient(120deg,#67205f,#a32985)] text-white"
    >
      <div className="container-page grid items-center gap-8.75 md:grid-cols-2 md:gap-16.25">
        <div>
          <div className="eyebrow text-blush-300" data-reveal>
            For businesses &amp; institutions
          </div>
          <h2 className="heading-2" data-reveal>
            Healthier teams. Stronger organizations.
          </h2>
          <p className="mb-8 text-[#f9e3f0]">
            Support your people with tailored programs that address workplace
            well-being, communication, relationships, and professional
            development.
          </p>
          <a className="btn btn-light" href="#contact">
            Discuss Your Organization&apos;s Needs{" "}
            <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>

        <div data-reveal className="group grid gap-5.5">
          <div className="relative h-57.5 overflow-hidden rounded-md border-[3px] border-blush-300 [clip-path:polygon(9%_0,100%_0,100%_82%,91%_100%,0_100%,0_13%)] md:h-61.25">
            <Image
              src={images.corporate}
              alt="Stock photograph of professionals collaborating"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover saturate-[.86] transition duration-500 group-hover:scale-[1.018] group-hover:saturate-100"
            />
          </div>
          <ul className="flex flex-wrap gap-3">
            {corporateTopics.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-[#d88ac2] px-4 py-2.5 text-sm"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
