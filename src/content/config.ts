import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    tags: z.array(z.string()),
    year: z.number(),
    status: z.enum(['completed', 'ongoing', 'archived']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    cover: z.string().optional(),
    links: z.object({
      live: z.string().url().optional().or(z.literal('')),
      github: z.string().url().optional().or(z.literal('')),
      case_study: z.string().url().optional().or(z.literal('')),
    }).optional(),
  }),
});

export const collections = { projects };
