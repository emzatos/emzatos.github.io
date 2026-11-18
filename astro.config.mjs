import { defineConfig } from 'astro/config';
export default defineConfig({
  output: 'static',
  site: 'https://emzatos.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
