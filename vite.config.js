import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Keep the CRA-style REACT_APP_ prefix so existing .env vars are exposed
    // to the client via import.meta.env without renaming anything.
    envPrefix: ["VITE_", "REACT_APP_"],
    // Registered in local-apps on 3015 (3000 is taken by the portfolio); host:true
    // exposes it on the LAN, open:false keeps it headless under the LaunchAgent.
    server: { port: 3015, host: true, open: false },
    build: { outDir: "build" },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.js",
        // Unit/component tests live in src; e2e/ is Playwright's (run via test:e2e).
        include: ["src/**/*.{test,spec}.{js,jsx}"],
        coverage: {
            provider: "v8",
            include: ["src/**/*.{js,jsx}"],
            // App.jsx is the router shell - covered by the Playwright e2e, not unit tests.
            exclude: ["src/data/**", "src/**/*.test.{js,jsx}", "src/setupTests.js", "src/index.jsx", "src/App.jsx"],
            // functions is intentionally lower: v8 counts every inline JSX arrow (onClick, map
            // callbacks) as a function, so it under-reports for React even at ~95% line coverage.
            thresholds: { statements: 85, branches: 80, functions: 25, lines: 85 },
        },
    },
});
