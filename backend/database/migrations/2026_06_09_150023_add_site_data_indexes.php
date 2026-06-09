<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->index('is_active');
            $table->index('is_featured');
            $table->index(['is_active', 'is_featured']);
        });

        Schema::table('categories', function (Blueprint $table) {
            $table->index('is_active');
            $table->index('order');
        });

        Schema::table('clients', function (Blueprint $table) {
            $table->index('is_active');
            $table->index('order');
        });

        Schema::table('banners', function (Blueprint $table) {
            $table->index('is_active');
            $table->index('order');
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
            $table->dropIndex(['is_featured']);
            $table->dropIndex(['is_active', 'is_featured']);
        });

        Schema::table('categories', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
            $table->dropIndex(['order']);
        });

        Schema::table('clients', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
            $table->dropIndex(['order']);
        });

        Schema::table('banners', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
            $table->dropIndex(['order']);
        });
    }
};
