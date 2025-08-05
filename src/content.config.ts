import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });
const labs = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.(md|mdx)",
    base: "./src/content/labs",
  }),
  schema: docsSchema({
    extend: z.object({
      labId: z.number(),
    }),
  }),
});

export const collections = { docs, labs};
