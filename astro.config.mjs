// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import site from "@/config/site.json";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: site.url || "http://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      port: 4321,
      allowedHosts: true,
    },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "",
      cssVariable: "--font-",
    },
  ],

  integrations: [react(), sitemap()],
});