module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "helpers": true,
                "corejs": false,
                "regenerator": true,
                "useESModules": false,
                "absoluteRuntime": false,
                "version": "7.0.0-beta.0"
            }
        ]
    ]
};