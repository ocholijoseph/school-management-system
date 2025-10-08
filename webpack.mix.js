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

// Frontend assets
mix.setPublicPath('public/frontend')
   .js('resources/assets/frontend/js/libs.js', 'public/frontend/js')
   .sass('resources/assets/frontend/sass/libs.scss', 'public/frontend/css')
   .copyDirectory('resources/assets/frontend/img', 'public/frontend/img')
   .copyDirectory('resources/assets/frontend/fonts', 'public/frontend/fonts')
   .copyDirectory('resources/assets/frontend/flags', 'public/frontend/flags')
   .copyDirectory('resources/assets/frontend/rs-plugin', 'public/frontend/rs-plugin')
   .copy('resources/assets/frontend/libs/jquery.min.js', 'public/frontend/js/jquery.min.js');

// Backend assets
mix.setPublicPath('public')
   .js('resources/assets/backend/js/app.js', 'public/js')
   .js([
       'resources/assets/backend/js/site-dashboard.js',
   ], 'public/js/site-dashboard.js')
   .js([
       'resources/assets/backend/js/dashboard.js',
   ], 'public/js/dashboard.js')
   .js([
       'resources/assets/backend/js/adminlte.js',
       'resources/assets/backend/js/theme_settings.js',
       'resources/assets/backend/js/bootstrap-datetimepicker.min.js',
       'resources/assets/backend/js/bootstrap-toggle.min.js',
   ], 'public/js/theme.js')
   .extract([
       'jquery', 'bootstrap', 'icheck', 'jquery-validation', 'jquery-slimscroll', 'fastclick',
       'datatables.net', 'datatables.net-bs', 'datatables.net-responsive-bs'
   ])
   .sass('resources/assets/backend/sass/app.scss', 'public/css')
   .sass('resources/assets/backend/sass/print.scss', 'public/css')
   .sass('resources/assets/backend/sass/vendor.scss', 'public/css')
   .sass('resources/assets/backend/sass/colorpicker.scss', 'public/css')
   .sass('resources/assets/backend/sass/report.scss', 'public/css')
   .js([
       'resources/assets/backend/js/colorpicker.js',
   ], 'public/js/colorpicker.js')
   .styles([
       'resources/assets/backend/css/AdminLTE.css',
       'resources/assets/backend/css/_all-skins.css',
       'resources/assets/backend/css/bootstrap3-wysihtml5.min.css',
       'resources/assets/backend/css/bootstrap-datetimepicker.min.css',
       'resources/assets/backend/css/bootstrap-toggle.min.css'
   ], 'public/css/theme.css')
   .styles('resources/assets/backend/css/site-dashboard.css', 'public/css/site-dashboard.css')
   .styles('resources/assets/backend/css/pace.css', 'public/css/pace.css')
   .copy('resources/assets/backend/js/bootstrap3-wysihtml5.all.min.js', 'public/js/editor.js')
   .copy('resources/assets/backend/js/pace.js', 'public/js/pace.js')
   .copy('resources/assets/backend/js/bootstrap-datetimepicker.min.js', 'public/js/bootstrap-datetimepicker.min.js')
   .copyDirectory('resources/assets/backend/images', 'public/images')
   .autoload({
       jquery: ['$', 'window.jQuery', 'jQuery', 'jquery'],
       moment: ['window.moment', 'moment'],
   });

mix.options({
    processCssUrls: false,
    purifyCss: false,
    clearConsole: false
});

if (mix.inProduction()) {
    mix.version();
    mix.sourceMaps();
}