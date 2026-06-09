<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Client;
use App\Models\Banner;
use App\Models\Setting;
use Illuminate\Support\Facades\Cache;

class SiteController extends Controller
{
    public function getSiteData()
    {
        $data = Cache::remember('site_data', 3600, function () {
            return [
                'categories' => Category::where('is_active', true)->orderBy('order')->get(),
                'products' => Product::with('category')->where('is_active', true)->get(),
                'featured_products' => Product::with('category')->where('is_active', true)->where('is_featured', true)->orderBy('updated_at', 'desc')->get(),
                'clients' => Client::where('is_active', true)->orderBy('order')->get(),
                'banners' => Banner::where('is_active', true)->orderBy('order')->get(),
                'settings' => Setting::all()->pluck('value', 'key'),
            ];
        });

        return response()->json($data);
    }
}
