# TinyMCE
TinyMCE editor for Laravel Orchid

php artisan vendor:publish --tag=laravel-assets --ansi --force

than add to config/platform.php 

```
'resource' => [
    'scripts'     => [
      // add this rows
        '/js/platform/tinymce/tinymce/tinymce.min.js',
        '/js/platform/tinymce/tinymce.js',
    ],
    'stylesheets' => [
    ],
],
```
