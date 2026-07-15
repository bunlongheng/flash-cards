import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Keep the CRA-style REACT_APP_ prefix so existing .env vars are exposed
    // to the client via import.meta.env without renaming anything.
    envPrefix: ["VITE_", "REACT_APP_"],
    server: { port: 3000, open: true },
    build: { outDir: "build" },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.js",
        coverage: {
            provider: "v8",
            include: ["src/**/*.{js,jsx}"],
            exclude: ["src/data/**", "src/**/*.test.{js,jsx}", "src/setupTests.js", "src/index.jsx", "src/reportWebVitals.js"],
            thresholds: { statements: 70, branches: 65, functions: 50, lines: 70 },
        },
    },
});
