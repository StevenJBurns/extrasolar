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
        "@assets": path.resolve(__dirname, 'src/presentation/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        "@domain": path.resolve(__dirname, "src/domain"),
        "@external": path.resolve(__dirname, "src/external"),
        "@presentation": path.resolve(__dirname, "src/presentation"),
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
