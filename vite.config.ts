import path from 'path';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../"),
        "@assets": path.resolve(__dirname, './src/assets/'),
        '@components': path.resolve(__dirname, './src/components'),
        "@server": path.resolve(__dirname, "../server/src"),
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
      // setupFiles: ['./tests/setup.ts'],
      testMatch: ['./**/*.test.{js,jsx,ts,tsx}']
    }
  };
});
