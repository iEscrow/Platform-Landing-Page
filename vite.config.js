import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
      '@layout': fileURLToPath(
        new URL('./src/components/layout', import.meta.url)
      ),
      '@features': fileURLToPath(
        new URL('./src/components/features', import.meta.url)
      ),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
});
