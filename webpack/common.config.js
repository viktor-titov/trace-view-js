const fs = require("fs");
const webpack = require("webpack");
const path = require("path");
const { join } = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const getPackageJson = function (...args) {
    const packageJSON = JSON.parse(
        fs.readFileSync(join(__dirname, "../package.json")),
    );
    if (!args.length) {
        return packageJSON;
    }
    return args.reduce((out, key) => {
        out[key] = packageJSON[key];
        return out;
    }, {});
};

const {
    name: pkgName,
    version,
    description,
    license,
    author,
    repository,
    homepage,
} = getPackageJson(
    "name",
    "version",
    "description",
    "license",
    "author",
    "repository",
    "homepage",
);

const banner = `Name: ${pkgName}
Version: ${version}
Description: ${description}
Author: ${author}
Homepage: ${homepage}
Repository: ${repository.url}

This source code is licensed under the ${license} license found in the LICENSE file in the root directory of this source tree.`;


const plugins = [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "[contenthash].css",
    }),
    // Compress images
    //   new ImageMinimizerPlugin({
    //     minimizer: {
    //       implementation: ImageMinimizerPlugin.imageminMinify,
    //       options: {
    //         plugins: [
    //           ["gifsicle", { interlaced: true }],
    //           ["jpegtran", { progressive: true }],
    //           ["optipng", { optimizationLevel: 8 }],
    //           [
    //             "svgo",
    //             {
    //               plugins: [
    //                 {
    //                   name: "preset-default",
    //                   params: {
    //                     overrides: {
    //                       removeViewBox: false,
    //                       addAttributesToSVGElement: {
    //                         params: {
    //                           attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
    //                         },
    //                       },
    //                     },
    //                   },
    //                 },
    //               ],
    //             },
    //           ],
    //         ],
    //       },
    //     },
    //   }),
    new webpack.BannerPlugin(banner),
];

module.exports = {
    plugins,

    target: "web",
    entry: path.join(__dirname, "..", "src", "index.ts"),
    
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx", ".json", ".css"],
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true, // Using a cache to avoid of recompilation
                    },
                },
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader", // translates css into CommonJS
                        options: {
                            esModule: true,
                            // css modules
                            modules: {
                                localIdentName: "[name]__[local]__[hash:base64:5]", // format of output
                                namedExport: true, // named exports instead of default
                            },
                        },
                    },
                    {
                        // autoprefixer
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(s[ac])ss$/i,
                use: ["sass-loader"],
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            //     type: "asset/resource",
            //     generator: {
            //         filename: "assets/img/[hash][ext]",
            //     },
            // },
        ],
    },
};
