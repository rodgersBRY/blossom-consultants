import bookCovers from "@/public/images/little-seed-mighty-tree-book.webp";
import drLunarOdawa from "@/public/images/dr-lunar-odawa.webp";
import playroom from "@/public/images/child-therapy-playroom.webp";
import therapyRoom from "@/public/images/therapy-room.webp";
import assessmentClipboard from "@/public/images/assessment-clipboard.webp";
import corporateTraining from "@/public/images/corporate-training.webp";
import groupCoaching from "@/public/images/group-coaching.webp";
import heroLounge from "@/public/images/hero-calm-lounge.webp";
import partnership from "@/public/images/organizations-partnership.webp";
import psychotherapySession from "@/public/images/psychotherapy-session.webp";
import researchTeam from "@/public/images/research-team.webp";
import type { StaticImageData } from "next/image";

export const siteUrl = "https://blossomconsultants.co.ke";

// WhatsApp number in international format, digits only.
const developerWhatsapp = "254712413243";
const developerMessage =
  "Hi Mawira, I came across the Blossom Psychotherapy Services website and I'm interested in having a website built. Are you available to talk?";

export const developer = {
  name: "Mawira",
  whatsappUrl: `https://wa.me/${developerWhatsapp}?text=${encodeURIComponent(developerMessage)}`,
};

export const contact = {
  email: "info@blossomconsultants.co.ke",
  address: "KMA Centre, Upper Hill, Block C 1.2, Nairobi",
  phones: [
    { label: "0716 374 566", href: "tel:+254716374566" },
    { label: "0735 339 980", href: "tel:+254735339980" },
  ],
  teletherapy: { label: "0720149568", href: "tel:+254720149568" },
};

export const socials = [
  {
    network: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/blossompsychotherapyservices/",
  },
  {
    network: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/p/Blossom-Psychotherapy-services-100057573245207/",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "For Children", href: "#children" },
  { label: "For Organizations", href: "#organizations" },
];

export const images = {
  hero: heroLounge,
  about: therapyRoom,
  corporate: partnership,
};

export const childTherapy = {
  playroom,
  points: [
    "Play-based, child-friendly therapy",
    "Parents involved along the way",
    "Assessments for learning and special needs",
    "In-person and virtual sessions",
  ],
};

export const childTherapist = {
  name: "Dr. Lunar Odawa",
  title: "Clinical Psychologist & Child Therapist",
  photo: drLunarOdawa,
  bio: [
    "Dr. Lunar Odawa is a clinical psychologist who has made children and families the heart of her practice. In her sessions, children are given the time and space to make sense of big feelings, build confidence and find their voice, with parents involved along the way.",
    "She sees clients in person at our Upper Hill office and through virtual sessions. Her children's book, Little Seed, Mighty Tree, grew out of the same belief that guides her work: every child carries the potential to grow tall.",
  ],
  book: {
    title: "Little Seed, Mighty Tree",
    illustrator: "Kibali Tillas",
    covers: bookCovers,
  },
};

export type ExpertiseShape = "arch" | "diagonal" | "petal";

export const expertise: {
  kicker: string;
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  shape: ExpertiseShape;
}[] = [
  {
    kicker: "Individual wellbeing",
    title: "Psychotherapy & Counselling",
    body: "In-person and virtual psychotherapy for children, adolescents, youth and adults, with care tailored to each stage of life.",
    image: psychotherapySession,
    alt: "A therapist taking notes while talking with a client on a sofa",
    shape: "arch",
  },
  {
    kicker: "Understanding & insight",
    title: "Psychological Assessments",
    body: "Standardized assessments spanning personality, emotional intelligence, career guidance, mood, substance use and special needs.",
    image: assessmentClipboard,
    alt: "A clinician reviewing a printed autism screening assessment",
    shape: "diagonal",
  },
  {
    kicker: "Organizational growth",
    title: "Corporate Training & Wellness",
    body: "Practical programmes in mental wellness, teamwork, emotional intelligence, work-life balance and psychological safety.",
    image: corporateTraining,
    alt: "A facilitator presenting a slide to a workshop group",
    shape: "petal",
  },
  {
    kicker: "Personal & professional growth",
    title: "Coaching & Development",
    body: "Individual and group coaching to support personal development, professional growth and meaningful goals.",
    image: groupCoaching,
    alt: "Four women laughing together during a group session on office sofas",
    shape: "diagonal",
  },
  {
    kicker: "Evidence & insight",
    title: "Research",
    body: "Research services that contribute to informed understanding and evidence-based decisions for people and organizations.",
    image: researchTeam,
    alt: "A team working through documents at their computers",
    shape: "arch",
  },
];

export const aboutPoints = [
  "Evidence-based approaches",
  "In-person and virtual support",
  "Solutions for individuals and institutions",
  "Customized organizational programs",
];

export const corporateTopics = [
  "Mental Wellness",
  "Psychological Safety",
  "Emotional Intelligence",
  "Team Building",
  "Work-Life Balance",
  "Interpersonal Relationships",
  "Mentoring & Coaching",
  "Psychological Assessments",
];

export const enquiryInterests = [
  "Personal psychotherapy",
  "Child & adolescent therapy",
  "Psychological assessment",
  "Corporate training",
  "Coaching",
  "Research services",
  "General enquiry",
];
