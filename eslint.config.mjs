import pluginJs from "@eslint/js"
import globals from "globals"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"

export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      languageOptions: {
        parser: tsParser,
        globals: globals.browser,
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:eslint/recommended",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
}
