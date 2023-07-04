const path = require("path")
module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/main.ts'),
    output: {
        path: path.join(__dirname, './dev_dist'),
        filename: 'bundle.js',

    },
    resolve: {
        extensions: ['.js', '.ts',],
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