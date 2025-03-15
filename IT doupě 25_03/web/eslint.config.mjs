import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{ts,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "indent": ["error", 4],
      "react/react-in-jsx-scope": "off",
      "react/jsx-indent": ["error", 4], // Odsazení pro JSX
      "react/jsx-indent-props": ["error", 4], // Odsazení atributů JSX
      "@typescript-eslint/ban-ts-comment": "off", // abych mohl používat ts-ignore
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    }
  }
];