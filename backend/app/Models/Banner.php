<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $fillable = ['title', 'subtitle', 'image', 'page', 'order', 'is_active'];
}
