<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_id', 'name', 'slug', 'description', 'price', 
        'image', 'is_featured', 'brand', 'specs'
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'specs' => 'json',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
