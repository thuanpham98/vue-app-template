module.exports = () => {
    return {
        plugins: [
            require('autoprefixer')({supports:true}),
            require('postcss-preset-env')(),
        ],
    };
};