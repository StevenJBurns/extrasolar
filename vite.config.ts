import path from 'path';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist',
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
    ],
    base: '/extrasolar/',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../"),
        "@domain": path.resolve(__dirname, "src/domain"),
        "@external": path.resolve(__dirname, "src/external"),
        "@presentation": path.resolve(__dirname, "src/presentation"),
        '@components': path.resolve(__dirname, 'src/components'),
        "@assets": path.resolve(__dirname, 'src/presentation/assets'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      include: ['./**/*.test.{js,jsx,ts,tsx}']
    }
  };
});
