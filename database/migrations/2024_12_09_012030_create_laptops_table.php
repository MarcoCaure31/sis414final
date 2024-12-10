<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
        public function up(): void
        {
            Schema::create('laptops', function (Blueprint $table) {
                $table->id();
                $table->string('Marca',25);
                $table->string('Modelo',30);
                $table->string('Procesador',20);
                $table->string('almacenamiento',30);
                $table->boolean('estado')->default(true); 
                $table->decimal('precio', 10, 2);
                $table->timestamps();
            });
        }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laptops');
    }
};
