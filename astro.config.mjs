import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uroszajc.github.io/broadway-pizza',
  base: '/broadway-pizza/',
  build: { outDir: './dist' }
});