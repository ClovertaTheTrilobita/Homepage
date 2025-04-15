import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  base: '/',

  // dev mode
  // site: 'http://localhost:4321',

  // production mode
  site: 'https://cloverta.top/',

  // mode: 不同的网站 cn/top/moe
  siteMode: "top"
});
