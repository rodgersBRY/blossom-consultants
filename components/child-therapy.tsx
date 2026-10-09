import Image from "next/image";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { childTherapist, childTherapy, contact } from "@/lib/content";

export function ChildTherapy() {
  const { book } = childTherapist;

  return (
    <section id="children" className="section relative bg-blush-100">
      <span aria-hidden className="zigzag absolute inset-x-0 top-0" />

      <div className="container-page">
        <div className="grid items-center gap-8.75 md:grid-cols-2 md:gap-17.5">
          <div>
            <div className="eyebrow" data-reveal>
              For children &amp; families
            </div>
            <h2 className="heading-2" data-reveal>
              Little Seed, Mighty Tree
            </h2>
            <p className="my-4">
              Children don&apos;t always have the words for what they feel. In a
              playroom built for them, they can show us through play, drawing
              and stories instead.
            </p>
            <p className="my-4">
              We support children and adolescents through worry, grief, big
              changes, behaviour and learning challenges. Parents and caregivers
              stay part of the process, so progress carries on at home.
            </p>
            <ul className="my-4">
              {childTherapy.points.map((point) => (
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
            <div className="mt-2 flex flex-wrap gap-3">
              <a className="btn w-full sm:w-auto" href="#contact">
                Enquire About Child Therapy{" "}
                <ArrowUpRight size={16} aria-hidden />
              </a>
              {contact.teletherapy && (
                <a
                  className="btn btn-outline w-full sm:w-auto"
                  href={contact.teletherapy.href}
                >
                  <Phone size={16} aria-hidden /> Teletherapy:{" "}
                  {contact.teletherapy.label}
                </a>
              )}
            </div>
          </div>

          <div data-reveal="right" className="group relative isolate">
            <div className="shape-leaf relative h-82.5 overflow-hidden md:h-110">
              <Image
                src={childTherapy.playroom}
                alt="Blossom children's playroom with a tree mural reading Little Seed, Mighty Tree, bean bags and toy shelves"
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.018]"
              />
            </div>
            <span aria-hidden className="photo-frame shape-leaf" />
          </div>
        </div>

        <article
          aria-labelledby="child-therapist"
          data-reveal
          className="mt-16 grid gap-8 rounded-[8px_64px_8px_64px] border border-line bg-white p-7 shadow-[0_6px_28px_#63214b09] md:mt-24 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12 md:p-12"
        >
          <div className="shape-arch relative mx-auto h-96 w-full max-w-72 overflow-hidden md:h-full md:min-h-96">
            <Image
              src={childTherapist.photo}
              alt={`Portrait of ${childTherapist.name}`}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 288px, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div>
            <div className="eyebrow">Meet our child therapist</div>
            <h3
              id="child-therapist"
              className="mt-3 text-[clamp(30px,3vw,40px)] text-plum-900"
            >
              {childTherapist.name}
            </h3>
            <p className="mb-4 font-bold text-magenta-700">
              {childTherapist.title}
            </p>
            {childTherapist.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="my-4 text-[#5b505a]">
                {paragraph}
              </p>
            ))}

            <figure className="mt-6 grid items-center gap-4 border-t border-line pt-6 sm:grid-cols-[minmax(0,15rem)_1fr]">
              <Image
                src={book.covers}
                alt={`Front cover and title page of ${book.title}`}
                placeholder="blur"
                sizes="240px"
                className="w-full rounded-md shadow-[0_6px_18px_#63214b18]"
              />
              <figcaption className="text-sm text-muted">
                <span className="block font-serif text-xl text-plum-800">
                  {book.title}
                </span>
                Written by {childTherapist.name}
                <br />
                Illustrated by {book.illustrator}
              </figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
}
