const mix = require('laravel-mix');

mix
    .js('./src/scripts/index.js', 'app.js')
    .version()
    .sass('./src/styles/main.scss', 'app.css')
    .setPublicPath('./web/dist/');

mix.browserSync({ proxy: 'https://pgm-website.ddev.site', https: true });