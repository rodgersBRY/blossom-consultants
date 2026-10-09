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
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "For Organizations", href: "#organizations" },
  { label: "Contact", href: "#contact" },
];

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200`;

export const images = {
  hero: unsplash("photo-1573496359142-b8d87734a5a2"),
  about: unsplash("photo-1600607687920-4e2a09cf159d"),
  corporate: unsplash("photo-1521737711867-e3b97375f902"),
};

export type ExpertiseShape = "arch" | "diagonal" | "petal";

export const expertise: {
  kicker: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  shape: ExpertiseShape;
}[] = [
  {
    kicker: "Individual wellbeing",
    title: "Psychotherapy & Counselling",
    body: "In-person and virtual psychotherapy for children, adolescents, youth and adults, with care tailored to each stage of life.",
    image: unsplash("photo-1573496359142-b8d87734a5a2"),
    alt: "Stock photography: Therapist-inspired professional portrait",
    shape: "arch",
  },
  {
    kicker: "Understanding & insight",
    title: "Psychological Assessments",
    body: "Standardized assessments spanning personality, emotional intelligence, career guidance, mood, substance use and special needs.",
    image: unsplash("photo-1576091160399-112ba8d25d1d"),
    alt: "Stock photography: Professional consultation setting",
    shape: "diagonal",
  },
  {
    kicker: "Organizational growth",
    title: "Corporate Training & Wellness",
    body: "Practical programmes in mental wellness, teamwork, emotional intelligence, work-life balance and psychological safety.",
    image: unsplash("photo-1521737711867-e3b97375f902"),
    alt: "Stock photography: Professionals collaborating in a workplace",
    shape: "petal",
  },
  {
    kicker: "Personal & professional growth",
    title: "Coaching & Development",
    body: "Individual and group coaching to support personal development, professional growth and meaningful goals.",
    image: unsplash("photo-1551836022-d5d88e9218df"),
    alt: "Stock photography: Professionals in a mentoring conversation",
    shape: "diagonal",
  },
  {
    kicker: "Evidence & insight",
    title: "Research",
    body: "Research services that contribute to informed understanding and evidence-based decisions for people and organizations.",
    image: unsplash("photo-1456324504439-367cee3b3c32"),
    alt: "Stock photography: Research materials and working environment",
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
  "Psychological assessment",
  "Corporate training",
  "Coaching",
  "Research services",
  "General enquiry",
];
