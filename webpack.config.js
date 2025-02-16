const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "server", // Opens in browser
            generateStatsFile: true,
            statsFilename: "stats.json",
            logLevel: "info",
            defaultSizes: "parsed",
        }),
    ],
    stats: {
        all: true,
        modules: true,
        chunks: true,
        chunkModules: true,
        reasons: true,
    },
};
