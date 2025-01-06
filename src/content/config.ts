import { defineCollection, z, reference } from "astro:content";
import { tags } from "../consts";
import { string } from "astro/zod";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const courses = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    category: reference("categories"),
    //category: z.string(),
    showHome: z.boolean(),
    afiliateLink: z.string().optional(),
  }),
});

export const collections = { blog, courses };
