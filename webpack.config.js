const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "production", // or 'development' if debugging
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // Change to 'server' if you want an interactive UI
            openAnalyzer: true,
            generateStatsFile: true,
            statsFilename: "stats.json", // Generates the stats file
            logLevel: "info",
            defaultSizes: "parsed",
        }),
    ],
    stats: {
        all: true, // Ensures all modules are included
        modules: true,
        chunks: true,
        chunkModules: true,
        reasons: true,
    },
};
