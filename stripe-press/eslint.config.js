// eslint.config.js
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default [
  // Base configuration for all files
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {
      "strict": ["error", "global"],
      "no-unused-vars": "warn",
      "no-undef": "error",
      "quotes": ["error", "double"],
      "import/no-unresolved": 0,
      "indent": ["error", 2],
    },
    ignores: ["**/lib/**", "**/generated/**"]
  },
  // Configuration for JS, TS, and TSX files
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
  },
  // Configuration for functions JS files
  {
    files: ["functions/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        es6: true,
        node: true,
      },
    },
  }
];