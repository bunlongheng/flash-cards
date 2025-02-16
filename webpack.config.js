const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "development", // Use 'development' to avoid aggressive optimizations
    entry: {
        main: "./src/index.js", // Define explicit entry point
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js", // Use unique filenames to avoid conflicts
        clean: true, // Cleans the output folder before building
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
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
        concatenateModules: false, // Prevents merging modules into one
        splitChunks: {
            chunks: "all", // Enables chunk splitting
            minSize: 0, // Forces Webpack to include all modules
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "server", // Opens interactive UI
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
