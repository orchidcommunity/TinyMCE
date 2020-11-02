<?php

declare(strict_types=1);

namespace OrchidCommunity\TinyMCE;

use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Orchid\Platform\Dashboard;
use Orchid\Platform\Providers\EventServiceProvider;
use Orchid\Platform\Providers\FoundationServiceProvider;
use Orchid\Platform\Providers\PlatformServiceProvider;

class TinyMCEServiceProvider extends RouteServiceProvider
{

    /**
     * @param Dashboard $dashboard
     */
    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__ . '/../views', 'tinymce');

        \Orchid\Support\Facades\Dashboard::addPublicDirectory('tinymce', __DIR__ . '/../public');
    }
}
