<?php

namespace Database\Seeders;

use App\Models\Laptop;
use Illuminate\Database\Seeder;

class LaptopSeeder extends Seeder
{
    public function run()
    {
        Laptop::create([
            'Marca' => 'HP',
            'Modelo' => 'Pavilion 15',
            'Procesador' => 'Intel i5',
            'almacenamiento' => '512GB SSD',
            'estado' => true,
            'precio' => 550.00,
        ]);

        Laptop::create([
            'Marca' => 'Dell',
            'Modelo' => 'Inspiron 14',
            'Procesador' => 'Intel i7',
            'almacenamiento' => '1TB HDD',
            'estado' => true,
            'precio' => 750.00,
        ]);
    }
}
