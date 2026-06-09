<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\Client;
use App\Models\Banner;
use App\Models\Setting;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Requested Admin User
        \App\Models\User::updateOrCreate(['email' => 'admin@admin.qa'], [
            'name' => 'AFIS Admin',
            'password' => \Illuminate\Support\Facades\Hash::make('admin@123'),
        ]);

        // Categories - Hardware
        $hwCategories = [
            'POS Systems',
            'Receipt Printers',
            'Thermal Printers',
            'Barcode Scanners',
            'Cash Drawers',
            'Label Printers'
        ];

        foreach ($hwCategories as $index => $name) {
            Category::updateOrCreate(['slug' => Str::slug($name)], [
                'name' => $name,
                'type' => 'product',
                'order' => $index + 1,
                'is_active' => true,
            ]);
        }

        // Categories - Software
        $swCategories = [
            'POS & Retail',
            'Operating Systems',
            'Productivity',
            'Security',
            'Accounting'
        ];

        foreach ($swCategories as $index => $name) {
            Category::updateOrCreate(['slug' => Str::slug($name)], [
                'name' => $name,
                'type' => 'software',
                'order' => $index + 1,
                'is_active' => true,
            ]);
        }

        // Product definitions: [slug, name, description, price, brand, categorySlug, isFeatured, imageColor]
        $productDefs = [
            ['pos-terminal-t1', 'Touch Terminal T1', 'High-performance touch terminal for retail and hospitality.', '1200 QAR', 'AFIS', 'pos-systems', true, '#2563eb'],
            ['thermal-printer-p1', 'Thermal Printer P1', 'Reliable thermal printer with high-speed printing.', '450 QAR', 'AFIS', 'thermal-printers', true, '#dc2626'],
            ['zebra-printer', 'Zebra Printer', 'Professional label printer for retail and logistics.', '550 QAR', 'Zebra', 'label-printers', true, '#16a34a'],
            ['receipt-printer-rp300', 'Receipt Printer RP300', 'Fast and durable receipt printer for busy retail environments.', '350 QAR', 'AFIS', 'receipt-printers', true, '#ea580c'],
            ['barcode-scanner-bs2000', 'Barcode Scanner BS-2000', 'High-speed 2D barcode scanner for retail and warehouse.', '280 QAR', 'AFIS', 'barcode-scanners', true, '#7c3aed'],
            ['cash-drawer-cd100', 'Cash Drawer CD100', 'Sturdy cash drawer with removable tray and robust lock.', '180 QAR', 'AFIS', 'cash-drawers', true, '#ca8a04'],
            ['thermal-printer-p2', 'Thermal Printer P2', 'Compact thermal printer ideal for countertop use.', '380 QAR', 'AFIS', 'thermal-printers', false, '#e11d48'],
            ['label-printer-lp400', 'Label Printer LP400', 'Versatile label printer for shipping and product labeling.', '480 QAR', 'AFIS', 'label-printers', false, '#059669'],
            ['pos-terminal-x1', 'POS Terminal X1', 'All-in-one POS terminal with built-in receipt printer.', '1800 QAR', 'AFIS', 'pos-systems', false, '#1d4ed8'],
            ['receipt-printer-rp500', 'Receipt Printer RP500', 'Wireless receipt printer for mobile POS setups.', '420 QAR', 'AFIS', 'receipt-printers', false, '#d97706'],
        ];

        // Generate images directory
        Storage::disk('public')->makeDirectory('products');

        foreach ($productDefs as $def) {
            [$slug, $name, $description, $price, $brand, $catSlug, $featured, $color] = $def;

            $category = Category::where('slug', $catSlug)->first();
            if (!$category) continue;

            // Generate placeholder image
            $imagePath = $this->generateProductImage($slug, $name, $color);

            Product::updateOrCreate(['slug' => $slug], [
                'category_id' => $category->id,
                'name' => $name,
                'description' => $description,
                'price' => $price,
                'brand' => $brand,
                'image' => $imagePath,
                'is_featured' => $featured,
            ]);
        }

        // Happy Clients
        $clientNames = [
            'Outback steak house',
            "BO'S Coffee",
            "Benji's",
            'Lebanese bakery',
            'Burger barn',
            'Dairy queen',
            'LE MIU cafe'
        ];

        $clients = [];
        foreach ($clientNames as $index => $name) {
            $clients[] = Client::updateOrCreate(['name' => $name], [
                'order' => $index,
                'is_active' => true,
            ]);
        }

        // Generate mock logo images for clients without logos
        Storage::disk('public')->makeDirectory('clients');
        $brandColors = ['#2563eb', '#ffffff', '#2563eb', '#ffffff', '#2563eb', '#ffffff', '#2563eb'];
        foreach ($clients as $i => $client) {
            if ($client->logo) continue;
            $slug = Str::slug($client->name);
            $existing = Storage::disk('public')->exists('clients/' . $slug . '.png');
            if ($existing) {
                $client->update(['logo' => 'clients/' . $slug . '.png']);
                continue;
            }
            $this->generateClientLogo($slug, $client->name, $brandColors[$i] ?? '#2563eb', $client);
        }

        // Banners
        Banner::updateOrCreate(['title' => 'Welcome to AFIS'], [
            'subtitle' => 'The Best POS Solutions in Qatar',
            'page' => 'home',
            'order' => 1,
            'is_active' => true,
        ]);

        Banner::updateOrCreate(['title' => 'Advanced POS Terminals'], [
            'subtitle' => 'High-performance hardware designed for durability and speed.',
            'page' => 'products',
            'order' => 1,
            'is_active' => true,
        ]);

        Banner::updateOrCreate(['title' => 'Empowering Your Business'], [
            'subtitle' => 'Smart software solutions to manage retail, restaurants, and more.',
            'page' => 'software',
            'order' => 1,
            'is_active' => true,
        ]);

        // Settings
        Setting::updateOrCreate(['key' => 'contact_numbers'], [
            'value' => ['+97474761025', '+97430883425'],
            'group' => 'contact',
        ]);

        Setting::updateOrCreate(['key' => 'email'], [
            'value' => 'helpdesk@afis.qa',
            'group' => 'contact',
        ]);
    }

    private function generateProductImage(string $slug, string $name, string $hexColor): string
    {
        $width = 800;
        $height = 800;

        $img = imagecreatetruecolor($width, $height);

        // Parse color to RGB
        $hex = ltrim($hexColor, '#');
        $r = hexdec(substr($hex, 0, 2));
        $g = hexdec(substr($hex, 2, 2));
        $b = hexdec(substr($hex, 4, 2));

        // Background gradient (lighter to darker) - store RGB arrays, not color identifiers
        $topRGB = [min(255, $r + 60), min(255, $g + 60), min(255, $b + 60)];
        $botRGB = [max(0, $r - 40), max(0, $g - 40), max(0, $b - 40)];

        // Fill with gradient
        for ($y = 0; $y < $height; $y++) {
            $ratio = $y / $height;
            $gradR = (int)($topRGB[0] + ($botRGB[0] - $topRGB[0]) * $ratio);
            $gradG = (int)($topRGB[1] + ($botRGB[1] - $topRGB[1]) * $ratio);
            $gradB = (int)($topRGB[2] + ($botRGB[2] - $topRGB[2]) * $ratio);
            $color = imagecolorallocate($img, $gradR, $gradG, $gradB);
            imageline($img, 0, $y, $width, $y, $color);
        }

        // Device icon shape - a large rounded rectangle device silhouette
        $white = imagecolorallocate($img, 255, 255, 255);
        $lightGray = imagecolorallocate($img, 230, 230, 235);
        $medGray = imagecolorallocate($img, 180, 180, 185);

        $boxW = 420;
        $boxH = 300;
        $boxX = ($width - $boxW) / 2;
        $boxY = ($height - $boxH) / 2 - 30;

        // Main body (rounded rect via pixel approximation)
        $radius = 24;
        // Fill center
        imagefilledrectangle($img, $boxX + $radius, $boxY, $boxX + $boxW - $radius, $boxY + $boxH, $white);
        imagefilledrectangle($img, $boxX, $boxY + $radius, $boxX + $boxW, $boxY + $boxH - $radius, $white);
        // Fill corners
        for ($i = 0; $i <= 90; $i += 3) {
            $rad = deg2rad($i);
            $dx = (int)($radius - $radius * cos($rad));
            $dy = (int)($radius - $radius * sin($rad));
            imagesetpixel($img, $boxX + $dx, $boxY + $dy, $white);
            imagesetpixel($img, $boxX + $dx, $boxY + $boxH - $dy, $white);
            imagesetpixel($img, $boxX + $boxW - $dx, $boxY + $dy, $white);
            imagesetpixel($img, $boxX + $boxW - $dx, $boxY + $boxH - $dy, $white);
        }

        // Screen area (inner lighter rect)
        $screenPad = 18;
        $screenColor = imagecolorallocate($img, 240, 240, 248);
        imagefilledrectangle($img, $boxX + $screenPad, $boxY + $screenPad, $boxX + $boxW - $screenPad, $boxY + $boxH - $screenPad - 30, $screenColor);

        // Stand
        $standW = 120;
        $standH = 25;
        imagefilledrectangle($img, ($width - $standW) / 2, $boxY + $boxH, ($width + $standW) / 2, $boxY + $boxH + $standH, $medGray);
        imagefilledrectangle($img, ($width - 60) / 2, $boxY + $boxH + $standH, ($width + 60) / 2, $boxY + $boxH + $standH + 8, $medGray);

        // Product name text above device
        $textColor = imagecolorallocate($img, 255, 255, 255);
        $textColorDark = imagecolorallocate($img, 60, 60, 70);

        $fontSize = 5;
        $textW = strlen($name) * imagefontwidth($fontSize);
        $textX = ($width - $textW) / 2;
        imagestring($img, $fontSize, (int)$textX, $boxY - 45, $name, $textColor);

        // Brand badge on device screen (simulate screen content)
        $badgeFont = 4;
        $badgeText = 'AFIS ' . $name;
        if (strlen($badgeText) > 22) {
            $badgeText = substr($badgeText, 0, 20) . '..';
        }
        $badgeW = strlen($badgeText) * imagefontwidth($badgeFont);
        $badgeX = ($width - $badgeW) / 2;
        imagestring($img, $badgeFont, (int)$badgeX, $boxY + $boxH / 2 - 8, $badgeText, $textColorDark);

        // Save image
        $filename = $slug . '.png';
        $filePath = 'products/' . $filename;
        $fullPath = Storage::disk('public')->path($filePath);

        $dir = dirname($fullPath);
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }

        imagepng($img, $fullPath);
        imagedestroy($img);

        return $filePath;
    }

    private function generateClientLogo(string $slug, string $name, string $hexColor, Client $client): void
    {
        $width = 400;
        $height = 400;

        $hex = ltrim($hexColor, '#');
        $r = hexdec(substr($hex, 0, 2));
        $g = hexdec(substr($hex, 2, 2));
        $b = hexdec(substr($hex, 4, 2));

        $img = imagecreatetruecolor($width, $height);

        // Background
        $bgColor = imagecolorallocate($img, $r, $g, $b);
        imagefill($img, 0, 0, $bgColor);

        // For white bg clients, use light blue background instead
        if ($hexColor === '#ffffff') {
            $lightBg = imagecolorallocate($img, 240, 245, 255);
            imagefill($img, 0, 0, $lightBg);
        }

        // Draw white circle for initials
        $circleX = 200;
        $circleY = 155;
        $circleR = 68;
        $white = imagecolorallocate($img, 255, 255, 255);
        $circleColor = $hexColor === '#ffffff' ? imagecolorallocate($img, 37, 99, 235) : $white;
        imagefilledellipse($img, $circleX, $circleY, $circleR * 2, $circleR * 2, $circleColor);

        // Generate initials (up to 2 chars)
        $words = explode(' ', $name);
        $initials = '';
        foreach ($words as $w) {
            $initials .= strtoupper(substr(trim($w), 0, 1));
        }
        $initials = substr($initials, 0, 2);

        // Draw initials in the circle
        $initFont = 5;
        $initW = strlen($initials) * imagefontwidth($initFont);
        $initX = $circleX - $initW / 2;
        $initY = $circleY - imagefontheight($initFont) / 2;
        $initColor = $hexColor === '#ffffff'
            ? imagecolorallocate($img, 37, 99, 235)
            : imagecolorallocate($img, $r, $g, $b);
        imagestring($img, $initFont, (int)$initX, (int)$initY, $initials, $initColor);

        // Draw name below
        $nameFont = 3;
        $displayName = mb_strlen($name) > 18 ? mb_substr($name, 0, 16) . '..' : $name;
        $nameW = strlen($displayName) * imagefontwidth($nameFont);
        $nameX = ($width - $nameW) / 2;
        $nameColor = $hexColor === '#ffffff'
            ? imagecolorallocate($img, 37, 99, 235)
            : $white;
        imagestring($img, $nameFont, (int)$nameX, 275, $displayName, $nameColor);

        // Save image
        $filename = 'clients/' . $slug . '.png';
        $fullPath = Storage::disk('public')->path($filename);
        $dir = dirname($fullPath);
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }

        imagepng($img, $fullPath);
        imagedestroy($img);

        $client->update(['logo' => $filename]);
    }
}

