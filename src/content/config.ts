import { defineCollection, z } from 'astro:content';

// Schema comune per le immagini
const imageSchema = z.object({
    src: z.string(),
    alt: z.string().optional().default('')
});

// Schema SEO con supporto migliorato per le immagini
const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: imageSchema.optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        // Aggiunto supporto per l'immagine principale del post
        image: imageSchema.optional(),
        tags: z.array(z.string()).default([]),
        seo: seoSchema.optional()
    })
});

const pages = defineCollection({
    schema: z.object({
        title: z.string(),
        image: imageSchema.optional(), // Aggiunto supporto per immagini nelle pagine
        seo: seoSchema.optional()
    })
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().default(false),
        image: imageSchema.optional(), // Aggiunto supporto per immagini nei progetti
        seo: seoSchema.optional()
    })
});

export const collections = { blog, pages, projects };