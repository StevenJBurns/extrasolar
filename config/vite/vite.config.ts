import path from 'path';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const projectRoot = path.resolve(__dirname, '../../');

export default defineConfig({
  base: '/extrasolar/',
  build: {
    outDir: '../../dist',
  },
  plugins: [
    react(),
    viteTsconfigPaths({
      projects: [path.resolve(projectRoot, 'tsconfig.json')],
      loose: true,
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: projectRoot },
      { find: '@domain', replacement: path.resolve(projectRoot, 'src/domain') },
      {
        find: '@external',
        replacement: path.resolve(projectRoot, 'src/external'),
      },
      {
        find: '@presentation',
        replacement: path.resolve(projectRoot, 'src/presentation'),
      },
      {
        find: '@components',
        replacement: path.resolve(projectRoot, 'src/components'),
      },
      {
        find: '@assets',
        replacement: path.resolve(projectRoot, 'src/presentation/assets'),
      },
      {
        find: '@utility',
        replacement: path.resolve(projectRoot, 'src/utility'),
      },
    ],
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
    setupFiles: [path.resolve(projectRoot, 'tests/setup.ts')],
    include: [path.resolve(projectRoot, '**/*.test.{js,jsx,ts,tsx}')],
    deps: {
      optimizer: {
        web: {
          include: ['@emotion/react'],
        },
      },
      interopDefault: true,
    },
    alias: {
      '@': projectRoot,
      '@domain': path.resolve(projectRoot, 'src/domain'),
      '@external': path.resolve(projectRoot, 'src/external'),
      '@presentation': path.resolve(projectRoot, 'src/presentation'),
      '@components': path.resolve(projectRoot, 'src/components'),
      '@assets': path.resolve(projectRoot, 'src/presentation/assets'),
      '@utility': path.resolve(projectRoot, 'src/utility'),
    },
  },
});
