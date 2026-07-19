import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
    { ignores: ["build/**", "coverage/**", "analyze/**", "node_modules/**", "*.py"] },
    js.configs.recommended,
    {
        files: ["src/**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: { ...globals.browser, ...globals.node },
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        plugins: { react, "react-hooks": reactHooks, "jsx-a11y": jsxA11y },
        settings: { react: { version: "detect" } },
        rules: {
            "react/jsx-uses-vars": "error",
            "react/jsx-uses-react": "error",
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            "no-unused-vars": ["warn", { varsIgnorePattern: "^React$" }],
        },
    },
    {
        files: ["src/**/*.test.{js,jsx}", "src/setupTests.js"],
        languageOptions: { globals: { ...globals.vitest, vi: "readonly" } },
    },
    // Turn off any stylistic rules that would conflict with Prettier formatting.
    prettier,
];
