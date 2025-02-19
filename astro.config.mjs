import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt"

export default defineConfig({
  integrations: [react(), tailwindcss(), robotsTxt()],
  site: 'https://danielstanus.github.io'
});