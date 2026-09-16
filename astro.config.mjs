// @ts-check
import { cp } from 'node:fs/promises';
import { defineConfig } from 'astro/config';

/**
 * Le CMS enregistre les photos sous « /src/assets/actus/… », un chemin qu'Astro
 * résout au build pour générer les WebP mais qui n'existe pas sur le site déployé.
 * Sans cette copie, l'éditeur affiche une image cassée à la place de la photo
 * déjà choisie quand on rouvre un article publié.
 */
const copierMediasPourLeCms = {
	name: 'blueberry:medias-cms',
	hooks: {
		'astro:build:done': async ({ dir }) => {
			await cp(new URL('src/assets/actus/', import.meta.url), new URL('src/assets/actus/', dir), {
				recursive: true,
				force: true,
			});
		},
	},
};

// https://astro.build/config
export default defineConfig({
	// À remplacer par le domaine définitif une fois la bascule faite.
	site: 'https://www.blueberryds.com',
	integrations: [copierMediasPourLeCms],
});
