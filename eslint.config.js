import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
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
        plugins: { react, "react-hooks": reactHooks },
        settings: { react: { version: "detect" } },
        rules: {
            "react/jsx-uses-vars": "error",
            "react/jsx-uses-react": "error",
            ...reactHooks.configs.recommended.rules,
            "no-unused-vars": ["warn", { varsIgnorePattern: "^React$" }],
        },
    },
    {
        files: ["src/**/*.test.{js,jsx}", "src/setupTests.js"],
        languageOptions: { globals: { ...globals.vitest, vi: "readonly" } },
    },
];
