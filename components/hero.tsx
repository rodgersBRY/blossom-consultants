import Image from "next/image";
import { ArrowRight, ArrowUpRight, Flower2 } from "lucide-react";
import { childTherapy, images } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(125deg,#fff0f7_0%,#fffafc_70%)] pt-10.5 pb-14 sm:py-13.75 md:py-23.75"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-60 -bottom-48 size-82.5 animate-glow rounded-full border border-[#e9b8d2]"
      />
      <div className="container-page grid items-center gap-11.5 md:grid-cols-[1.15fr_.85fr] md:gap-[clamp(35px,5vw,80px)]">
        <div className="animate-entrance">
          <div className="eyebrow">Welcome to Blossom Psychotherapy Services</div>
          <h1 className="my-5.5 max-w-185 text-[42px] sm:text-[clamp(40px,8vw,61px)] md:text-[clamp(43px,5.2vw,76px)]">
            Wellness for the mind. <em className="text-magenta-500 not-italic">Growth for life.</em>
          </h1>
          <p className="max-w-142.5 text-lg text-[#695669]">
            Compassionate psychological support for children, families and adults, and thoughtful
            development solutions for organizations. Helping people and teams move forward with confidence.
          </p>
          <div className="mt-7.5 flex flex-wrap gap-3">
            <a className="btn w-full sm:w-auto" href="#contact">
              Seek Personal Support <ArrowUpRight size={16} aria-hidden />
            </a>
            <a className="btn btn-outline w-full sm:w-auto" href="#organizations">
              Explore Corporate Solutions
            </a>
          </div>

          <a
            href="#children"
            className="group mt-8 flex max-w-142.5 items-center gap-4 rounded-[8px_28px_8px_28px] border border-line bg-white p-3 pr-5 shadow-[0_6px_28px_#63214b0f] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_#742a6018]"
          >
            <span className="relative size-18 shrink-0 rounded-[4px_24px_4px_24px] overflow-hidden sm:size-20">
              <Image
                src={childTherapy.playroom}
                alt=""
                fill
                placeholder="blur"
                sizes="80px"
                className="object-cover"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="eyebrow block">Our specialty</span>
              <span className="mt-1 block font-serif text-xl text-plum-800 sm:text-2xl">Child &amp; Family Therapy</span>
              <span className="mt-0.5 block text-sm text-muted">
                Play-based therapy that helps children make sense of big feelings.
              </span>
            </span>
            <ArrowRight
              aria-hidden
              className="size-5 shrink-0 text-magenta-600 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="relative isolate mx-auto w-full max-w-125 animate-entrance [animation-delay:.16s] md:max-w-none">
          <span
            aria-hidden
            className="absolute inset-[18px_-12px_-14px_15px] -z-10 rounded-[48%_48%_3%_3%/25%_25%_3%_3%] border-2 border-magenta-400"
          />
          <div className="relative h-82.5 overflow-hidden rounded-[46%_46%_3%_3%/24%_24%_3%_3%] [clip-path:polygon(0_15%,8%_5%,26%_0,75%_0,100%_25%,100%_100%,0_100%)] sm:h-87.5 md:h-122.5">
            <Image
              src={images.hero}
              alt="A sunlit lounge with lilies, plants and books titled Heal, Grow, Thrive and Belong"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover saturate-[.86]"
            />
          </div>
          <Flower2
            aria-hidden
            className="absolute top-[13%] right-0 size-14 animate-float text-magenta-300 md:-right-5 md:size-20"
          />
          <div className="absolute inset-x-5 bottom-4 rounded-[4px_28px_4px_28px] bg-[#fffdfbe8] px-4 py-3 text-center font-serif text-[17px] font-semibold text-plum-800 sm:text-[22px]">
            A space to feel heard, supported and empowered.
          </div>
        </div>
      </div>
    </section>
  );
}
