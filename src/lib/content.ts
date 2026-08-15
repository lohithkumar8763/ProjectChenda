import wedding from "@/assets/event-chenda.jpg";
import temple from "@/assets/hero-chenda.jpg";
import festival from "@/assets/performace-chenda.jpg";
import cultural from "@/assets/team-chenda.jpg";
import procession from "@/assets/performace-chenda.jpg";
import special from "@/assets/event-chenda.jpg";

export const performances = [
  {
    slug: "wedding",
    title: "Wedding Chenda Melam",
    image: wedding,
    blurb:
      "Muhurtham welcome, baraat and reception sets tuned to the family's timings — dignified, precise and photogenic.",
    points: ["Bride & groom welcome", "Mandapam entry melam", "8–30 artists"],
  },
  {
    slug: "temple",
    title: "Temple Chenda Melam",
    image: temple,
    blurb:
      "Panchari, Pandi and Thayambaka rendered in strict thaalam for utsavam, ezhunnallippu and deeparadhana.",
    points: ["Panchari & Pandi melam", "Ezhunnallippu accompaniment", "Ritual-accurate timing"],
  },
  {
    slug: "festival",
    title: "Festival Performance",
    image: festival,
    blurb:
      "Full-scale pooram ensembles with kombu, kuzhal and elathalam building to a thrilling climax.",
    points: ["Panchavadyam ensemble", "Up to 60 artists", "Stage or open ground"],
  },
  {
    slug: "cultural",
    title: "Cultural Events",
    image: cultural,
    blurb:
      "Curated 15–45 minute concert sets for school, college, corporate and cultural festival stages.",
    points: ["Time-bound sets", "Sound-system ready", "Choreographed finale"],
  },
  {
    slug: "procession",
    title: "Processions",
    image: procession,
    blurb:
      "Marching melam for shobha yathra, thalappoli and village processions, sustained over long routes.",
    points: ["Long-route stamina", "Uniform troupe", "Crowd-safe formation"],
  },
  {
    slug: "special",
    title: "Inaugurations & Special Events",
    image: special,
    blurb:
      "Showroom openings, house-warmings, receptions and civic functions given a grand traditional welcome.",
    points: ["Ribbon-cut welcome", "Guest reception melam", "Compact 4–10 artist packs"],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Their melam turned our daughter's wedding entry into the moment everyone still talks about. Punctual, disciplined and beautifully dressed.",
    name: "Rajeev Menon",
    event: "Wedding · Kasaragod",
  },
  {
    quote:
      "We booked them for our temple utsavam for the third year. The Panchari melam is authentic and the team respects every ritual timing.",
    name: "Sudhakaran Nair",
    event: "Temple Utsavam · Enmakaje",
  },
  {
    quote:
      "Energetic, professional and easy to coordinate with over WhatsApp. Our showroom inauguration drew a crowd within minutes.",
    name: "Fahad Rahman",
    event: "Inauguration · Kanhangad",
  },
];

export const eventTypes = [
  "Wedding",
  "Temple Festival",
  "Cultural Programme",
  "Inauguration",
  "Reception",
  "Procession",
  "Other",
];
