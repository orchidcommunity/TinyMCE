let mix = require('laravel-mix');



mix
    .copyDirectory('./node_modules/tinymce/icons', 'public/tinymce/icons')
    .copyDirectory('./node_modules/tinymce/models', 'public/tinymce/models')
    .copyDirectory('./node_modules/tinymce/plugins', 'public/tinymce/plugins')
    .copyDirectory('./node_modules/tinymce/skins', 'public/tinymce/skins')
    .copyDirectory('./node_modules/tinymce/themes', 'public/tinymce/themes')
    .copyDirectory('resources/js/langs', 'public/tinymce/langs')
    .copy('./node_modules/tinymce/tinymce.min.js', 'public/tinymce/tinymce.min.js')
    .options({
        processCssUrls: false
    })
    .js('resources/js/tinymce_controller.js', 'tinymce.js')
    .setPublicPath('public')
    .version();