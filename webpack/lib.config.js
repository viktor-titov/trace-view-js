const { resolve } = require("path");

const { merge, } = require("webpack-merge");

const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const common = require("./common.config.js");

const plugins = [
    new BundleAnalyzerPlugin(),
];

const BASE_NAME_BUNDLE = 'trace-view-js';
const DIST_PATH = resolve(__dirname, '..', 'dist');

const libConfig = merge(common,
    {
        mode: "production",
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
        plugins,
        output: {
            path: DIST_PATH,
            filename: `${BASE_NAME_BUNDLE}.js`,
            library: {
                type: "commonjs",
            },
        },
    },

);

module.exports = [
    libConfig,
    {
        ...libConfig,
        output: {
            path: DIST_PATH,
            filename: `${BASE_NAME_BUNDLE}.umd.js`,
            libraryTarget: "umd",
        },
    },
    {
        ...libConfig,
        experiments: {
            outputModule: true,
        },
        output: {
            path: DIST_PATH,
            filename: `${BASE_NAME_BUNDLE}.module.js`,
            libraryTarget: "module",
        },
    }
]