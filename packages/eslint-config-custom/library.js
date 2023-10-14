const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
  ].map(require.resolve),
  plugins: ["@typescript-eslint", "simple-import-sort"],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "arrow-body-style": ["error", "as-needed"],
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "sort-imports": "off",
    "import/order": "off",
    "object-property-newline": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": "warn",
    "no-useless-catch": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
