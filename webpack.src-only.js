const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "development", // or 'production'
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, // 🚀 Exclude dependencies!
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    optimization: {
        concatenateModules: false,
        splitChunks: {
            chunks: "all",
            minSize: 0,
        },
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // Generates report.html
            generateStatsFile: true,
            statsFilename: "stats-src.json", // 🔥 Different filename for src-only mode
            logLevel: "info",
            excludeAssets: assetName => assetName.includes("node_modules"), // 🚀 Exclude vendor code!
        }),
    ],
};
