# TinyMCE
TinyMCE editor for Laravel Orchid

php artisan vendor:publish --tag=laravel-assets --ansi --force

than add to config/platform.php 

```
    'resource' => [
        'scripts'     => [
          // add this rows
          '/admin/resources/tinymce/tinymce/tinymce.min.js',
          '/admin/resources/tinymce/tinymce.js',
        ],
        'stylesheets' => [
        ],
    ],
```
