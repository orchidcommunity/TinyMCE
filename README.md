# TinyMCE
TinyMCE 7 editor for Laravel Orchid

## Installation

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

## Usage

```
TinyMCE::make('name')
        ->title('Title')
        // Editor height including toolbars, default 300px 
        ->height('500px')
        // License key, default 'gpl'
        ->license('gpl'),
```

## About TinyMCE license

TinyMCE 7 is licensed under the GNU General Public License Version 2 or later. A new configuration option called 
'license_key' requires developers to make a conscious decision to use TinyMCE with the GPLv2+ license or with a 
commercial license.

More info here https://www.tiny.cloud/docs/tinymce/latest/license-key/