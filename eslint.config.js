const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const eslintJS = require("@eslint/js")

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["dist/**/*", "node_modules/*/*", "**/*/eslint.config.js"],
    rules: {
      ...eslintJS.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        "URL": "readonly",
        "__dirname": "readonly",
        "__filename": "readonly"
      },
      sourceType: "commonjs"
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
      ...ts.configs['recommended'].rules,
      '@typescript-eslint/ban-ts-comment':[
          "error",
        {
          "ts-expect-error": "allow-with-description",
          minimumDescriptionLength: 5
        }
      ]
    }
  },
  {
    files: ["testing/**/*", "plugins/**/*"],
    languageOptions: {
      globals: {
        "console": "readonly",
        "process": "readonly",
        "TextDecoder": "readonly"
      }
    }
  }

]