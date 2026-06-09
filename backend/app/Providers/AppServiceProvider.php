<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Client;
use App\Models\Banner;
use App\Models\Setting;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        $models = [Category::class, Product::class, Client::class, Banner::class, Setting::class];

        foreach ($models as $model) {
            $model::saved(fn () => Cache::forget('site_data'));
            $model::deleted(fn () => Cache::forget('site_data'));
        }
    }
}
