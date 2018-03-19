let mix = require('laravel-mix');

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

mix.react('resources/assets/js/app.js', 'public/js');
   // .sass('resources/assets/sass/app.scss', 'public/css');

mix.browserSync({
  proxy: 'homestead.test',
  port: 4000
});

/** Fix source map issue: https://github.com/JeffreyWay/laravel-mix/issues/879#issuecomment-310749504 */
/** Unable to reproduce issue. It causes slow webpack building */
// mix.webpackConfig({ devtool: "inline-source-map" });
