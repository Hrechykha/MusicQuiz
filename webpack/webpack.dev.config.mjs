import path from 'path';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

process.env.BABEL_ENV = 'development';

const config = {
    extends: path.resolve(import.meta.dirname, './webpack.config.mjs'),
    entry: ['./src/index.tsx'],
    mode: 'development',
    devServer: {
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(import.meta.dirname, '../public/index.html'),
        }),
    ],
};

export default config;
