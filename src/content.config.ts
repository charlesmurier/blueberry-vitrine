import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actus = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/actus' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.date(),
			category: z.enum(['Sorties', 'Événements', 'Vie de l’entreprise']).default('Vie de l’entreprise'),
			excerpt: z.string().optional(),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			gallery: z
				.array(
					z.object({
						src: image(),
						caption: z.string().optional(),
					})
				)
				.optional(),
		}),
});

export const collections = { actus };
