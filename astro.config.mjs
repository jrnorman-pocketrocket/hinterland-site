import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.hinterlandtrailerhire.com.au',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
