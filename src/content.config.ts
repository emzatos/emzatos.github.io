import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    status: z.string(),
    demo: z.url({ protocol: /^https?$/ }).optional(),
  }),
});
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({ title: z.string(), description: z.string(), date: z.coerce.date(), draft: z.boolean().default(false) }),
});
export const collections = { projects, blog };
