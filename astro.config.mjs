// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [react({
      include: ['**/react/*'],
    }),],
});
