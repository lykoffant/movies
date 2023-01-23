import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import viteStylelint from 'vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({ exportAsDefault: true }),
    viteStylelint({ fix: true, cache: false }),
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
