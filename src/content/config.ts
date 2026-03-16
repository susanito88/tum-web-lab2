import { defineCollection, z } from "astro:content";

const settings = defineCollection({
  type: "data",
  schema: z.object({
    restaurantName: z.string(),
    tagline: z.string(),
    // Hero
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroButtonText: z.string(),
    heroImageUrl: z.string(),
    // About
    aboutTitle: z.string(),
    aboutText1: z.string(),
    aboutText2: z.string(),
    // Events section
    eventsTitle: z.string(),
    // Menu section
    menuTitle: z.string(),
    // Contact section
    contactTitle: z.string(),
    contactSubtitle: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.string(),
    capacity: z.string(),
    instagram: z.string(),
    instagramUrl: z.string(),
    // Footer
    footerText: z.string(),
  }),
});

const events = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    hidden: z.boolean().default(false),
  }),
});

const menu = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    animationClass: z.string().default("scroll-slide-left"),
    order: z.number().default(0),
    hidden: z.boolean().default(false),
  }),
});

const footer = defineCollection({
  type: "data",
  schema: z.object({
    copyrightYear: z.number().default(2026),
    contactButtonText: z.string(),
  }),
});

const mascot = defineCollection({
  type: "data",
  schema: z.object({
    tooltipText: z.string(),
  }),
});

export const collections = { settings, events, menu, footer, mascot };
