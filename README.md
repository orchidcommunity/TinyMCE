# TinyMCE
TinyMCE 7 editor for Laravel Orchid

Add to composer.json

```
"repositories": [
    {
        "type": "vcs",
        "url": "git@github.com:orchidcommunity/TinyMCE.git"
    }
]
```

Run the following commands from your terminal:

```bash
composer require orchidcommunity/TinyMCE
```

```bash
php artisan vendor:publish --tag=laravel-assets --ansi --force
```

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
