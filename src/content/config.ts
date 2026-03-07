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
  }),
});

const menu = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    animationClass: z.string().default("scroll-slide-left"),
    order: z.number().default(0),
  }),
});

export const collections = { settings, events, menu };
