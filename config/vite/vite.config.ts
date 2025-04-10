import path from 'path';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const projectRoot = path.resolve(__dirname, '../../');

export default defineConfig({
  base: '/extrasolar/',
  root: path.resolve(projectRoot, 'src/presentation/client'),
  publicDir: path.resolve(projectRoot, 'src/presentation/client/public'),
  build: {
    sourcemap: true,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1024,
    outDir: path.resolve(projectRoot, 'build'),
    rollupOptions: {
      input: {
        main: path.resolve(projectRoot, 'src/presentation/client/index.html'),
      },
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
    host: true,
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
    root: path.resolve(projectRoot),
    setupFiles: [path.resolve(projectRoot, 'tests/setup.ts')],
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    exclude: ['**/node_modules/**'],
    coverage: {
      all: true,
      enabled: false,
      provider: 'v8',
      skipFull: false,
      reportsDirectory: 'coverage',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/**/*.d.ts',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/**/index.ts',
        'src/**/index.tsx',
        'src/**/*.type*.ts',
        'src/**/*.interface*.ts',
        'src/**/*.module.ts',
        'src/domain/constants/**/*.ts',
      ],
    },
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
