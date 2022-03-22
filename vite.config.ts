import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  base: "./",
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  plugins: [solidPlugin()],
});
