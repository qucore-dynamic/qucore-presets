// Modules
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import reactPlugin from "eslint-plugin-react"
import globals from "globals"

export default tseslint.config(
  {
    ignores: ["**/next-env.d.ts", "**/.next/**", "**/node_modules/**", "**/dist/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: [`server/**/*.{ts,js}`],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      [`no-console`]: `off`,
    },
  },

  {
    files: [`client/**/*.{ts,tsx}`],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: `detect` },
    },
    rules: {
      [`react/react-in-jsx-scope`]: `off`,
      [`no-console`]: `warn`,
    },
  },

  {
    files: [`**/*.{ts,tsx,js,jsx}`],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      [`quotes`]: [`error`, `backtick`],
      [`semi`]: [`error`, `never`],
      [`@typescript-eslint/no-explicit-any`]: `error`,
      [`@typescript-eslint/no-unused-vars`]: `error`,
      [`prefer-const`]: `error`,
      [`@typescript-eslint/triple-slash-reference`]: `off`,
    },
  },

  {
    files: [`**/*.config.ts`, `**/*.config.js`, `eslint.config.js`],
    rules: {
      [`quotes`]: [`off`],
    },
  },
)
