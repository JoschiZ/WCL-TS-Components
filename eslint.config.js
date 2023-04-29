import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintJS from "@eslint/js"

export default [
  {
    files: ["**/*.js"],
    ignores: ["dist/**/*", "node_modules/*/*", "**/*/eslint.config.js"],
    rules: {
      ...eslintJS.configs.recommended.rules
    }
  },
  {
    files: ["**/*.ts"],
    ignores: ["dist/**/*", "node_modules/*/*", "**/*/eslint.config.js", "definitions/RpgLogs.d.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      ts,
    },
    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended'].rules
    }
  }

]