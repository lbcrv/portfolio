import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    // Always ship CSS as files so the Content-Security-Policy in public/_headers
    // can stay strict (no 'unsafe-inline').
    inlineStylesheets: 'never',
  },
});
