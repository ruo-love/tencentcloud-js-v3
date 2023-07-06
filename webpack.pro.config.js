const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/package/index.ts'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        clean: true,
        library: {
            name: '@zrcode/jstool',
            type: 'umd',
        },
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts',],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.(js|ts)$/i,
                extractComments: 'all',
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                    }
                ]
            }

        ]
    }
}