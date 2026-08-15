export const site = {
  name: "Mayoora Vadhyakala Samithi",
  shortName: "Mayoora Vadhyakala",
  place: "Katukukke",
  tagline: "Traditional Kerala Chenda Melam for weddings, temple festivals and cultural stages.",
  phone: "+918281585964",
  phoneDisplay: "082815 85964",
  whatsapp: "918281585964",
  instagram: "https://instagram.com",
  email: "booking@mayooravadhyakala.in",
  address: "Adkasthala Katukukke Rd, Enmakaje, Kerala 671552",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Adkasthala+Katukukke+Rd+Enmakaje+Kerala+671552",
  mapsEmbed:
    "https://www.google.com/maps?q=Adkasthala%20Katukukke%20Rd%2C%20Enmakaje%2C%20Kerala%20671552&output=embed",
  hours: "Open 24 hours",
  rating: "5.0",
  reviewCount: 2,
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const bookingWhatsApp = whatsappLink(
  `Namaskaram ${site.name}, I would like to enquire about booking a Chenda Melam performance.`,
);

export const telLink = `tel:${site.phone}`;
