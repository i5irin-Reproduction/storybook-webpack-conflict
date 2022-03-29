module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV === 'development');
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: ['> 1%', 'IE 11'],
                useBuiltIns: 'usage',
                corejs: '3',
            },
        ],
        '@babel/preset-typescript',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
    ];

    const plugins = [];

    return {
        presets,
        plugins,
    };
};
