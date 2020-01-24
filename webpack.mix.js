const mix = require('laravel-mix');
mix.webpackConfig({
    module: {
        rules: [{
            test: /\.pug$/,
            oneOf: [{
                    resourceQuery: /^\?vue/,
                    use: ['pug-plain-loader']
                },
                {
                    use: ['raw-loader', 'pug-plain-loader']
                },
                {
                    // Exclude `js` files to keep "css" loader working as it injects
                    // it's runtime that would otherwise processed through "file" loader.
                    // Also exclude `html` and `json` extensions so they get processed
                    // by webpacks internal loaders.
                    exclude: [/\.js$/, /\.html$/, /\.json$/, /\.ejs$/],
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    }
                }
            ]
        }]
    }
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');