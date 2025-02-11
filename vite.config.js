import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url)
      ),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@context': fileURLToPath(new URL('./src/lib/context', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/lib/hooks', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/lib/data', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/lib/utils', import.meta.url)),
      '@animations': fileURLToPath(
        new URL('./src/lib/animations', import.meta.url)
      ),
    },
  },
});
