// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-sandra-nine.vercel.app/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: "csd7x6wg",
      dataset: "production",
      useCdn: false,
    }),
  ],
});
