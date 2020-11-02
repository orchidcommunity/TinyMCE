let mix = require('laravel-mix');



mix
    //.sass('resources/sass/app.scss', 'css/app.css', {
    //    implementation: require('node-sass')
    //})
    .copyDirectory('./node_modules/tinymce/plugins', 'public/tinymce/plugins')
    .copyDirectory('./node_modules/tinymce/themes', 'public/tinymce/themes')
    .copyDirectory('./node_modules/tinymce/skins', 'public/tinymce/skins')
    .options({
        processCssUrls: false
    })
    .js('resources/js/tinymce_controller.js', 'tinymce.js')
    .setPublicPath('public')
    .version();