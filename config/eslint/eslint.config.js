import path from 'path';
import { fileURLToPath } from 'url';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from '../../config/prettier/.prettierrc.json' with { type: 'json' };
import importPlugin from 'eslint-plugin-import';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const tsConfigPath = path.resolve(projectRoot, 'tsconfig.json');

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/', 'dist/', 'build/'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptEslintParser,
      parserOptions: {
        project: tsConfigPath,
        tsconfigRootDir: projectRoot,
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: eslintPluginPrettier,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': ['warn', prettierConfig],
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-unresolved': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: tsConfigPath,
          alwaysTryTypes: true,
        },
      },
    },
  },
];
