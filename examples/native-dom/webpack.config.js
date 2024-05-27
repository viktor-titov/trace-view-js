const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  target: 'web',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext][query]',
    clean: true
  },

  devServer: {
    host: 'localhost',
    port: 3000,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    compress: true,
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true
    }),

    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css.[name].[contenthash:8].chunk.css'
    }),

  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                config: false,
                plugins: [
                  'postcss-flexbugs-fixes',
                  [
                    'postcss-preset-env',
                    'autoprefixer'
                  ],
                  'postcss-normalize'
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                config: false,
                plugins: [
                  'postcss-flexbugs-fixes',
                  [
                    'postcss-preset-env',
                    'autoprefixer'
                  ],
                  'postcss-normalize'
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        type: 'asset/inline'
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },

  devtool: 'cheap-module-source-map',
}

module.exports = config
