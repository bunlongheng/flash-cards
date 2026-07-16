import { defineConfig } from "@playwright/test";

// End-to-end smoke coverage of the core flashcard flow, run against the dev server.
export default defineConfig({
    testDir: "./e2e",
    timeout: 30000,
    use: { baseURL: "http://localhost:3015" },
    webServer: {
        command: "npm run dev",
        url: "http://localhost:3015",
        reuseExistingServer: true,
        timeout: 60000,
    },
    projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
