import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico", "apple-touch-icon.png", "icon.png", "icon-192.png"],
            manifest: {
                name: "Flash Cards",
                short_name: "Flash Cards",
                description: "Flash Cards - interactive picture-flashcard learning for kids.",
                theme_color: "#000000",
                background_color: "#d8dde6",
                display: "standalone",
                start_url: "/",
                icons: [
                    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
                    { src: "/icon.png", sizes: "512x512", type: "image/png" },
                ],
            },
            workbox: {
                // The 1200+ flashcard images under /images live outside the precache -
                // they're cached on first view via the runtimeCaching rule below instead
                // of bloating the initial install with ~40MB of assets.
                globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,webp,ico,woff2}"],
                globIgnores: ["images/**"],
                maximumFileSizeToCacheInBytes: 6000000,
                runtimeCaching: [
                    {
                        urlPattern: ({ url }) => url.pathname.startsWith("/images/"),
                        handler: "CacheFirst",
                        options: {
                            cacheName: "flashcard-images",
                            expiration: { maxEntries: 1500, maxAgeSeconds: 60 * 60 * 24 * 365 },
                            cacheableResponse: { statuses: [0, 200] },
                        },
                    },
                    {
                        urlPattern: ({ url }) => url.origin === "https://picsum.photos",
                        handler: "CacheFirst",
                        options: {
                            cacheName: "picsum-images",
                            expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 365 },
                            cacheableResponse: { statuses: [0, 200] },
                        },
                    },
                ],
            },
        }),
    ],
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
