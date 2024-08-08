<?php

declare(strict_types=1);

namespace OrchidCommunity\TinyMCE;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Orchid\Platform\Dashboard;
use Orchid\Platform\Providers\EventServiceProvider;
use Orchid\Platform\Providers\FoundationServiceProvider;
use Orchid\Platform\Providers\PlatformServiceProvider;

class TinyMCEServiceProvider extends ServiceProvider
{

    /**
     * @param Dashboard $dashboard
     */
    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__ . '/../views', 'tinymce');

        $this->publishes([
            __DIR__ . '/../public' => public_path('js/platform/tinymce')
        ], ['laravel-assets']);

        parent::boot();
    }
}
