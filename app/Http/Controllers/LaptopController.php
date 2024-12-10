<?php
namespace App\Http\Controllers;

use App\Models\Laptop;
use Illuminate\Http\Request;

class LaptopController extends Controller
{
    public function index()
    {
        $laptops = Laptop::all();
        return view('laptop.index', compact('laptops'));
    }
    public function create()
    {
        return view('laptop.create');
    }

   
public function store(Request $request)
{
    $validatedData = $request->validate([
        'Marca' => 'required|max:25',
        'Modelo' => 'required|max:30',
        'Procesador' => 'required|max:20',
        'almacenamiento' => 'required|max:30',
        'estado' => 'required|boolean',
        'precio' => 'required|numeric',
    ]);

    Laptop::create($validatedData);

    return redirect()->route('laptops.index')->with('success', 'Laptop agregada correctamente');
}


    public function show($id)
    {
        $laptop = Laptop::findOrFail($id);
        return view('laptop.show', compact('laptop'));
    }

    public function edit($id)
    {
        $laptop = Laptop::findOrFail($id);
        return view('laptop.edit', compact('laptop'));
    }

public function update(Request $request, $id)
{
    $laptop = Laptop::findOrFail($id);

    $validatedData = $request->validate([
        'Marca' => 'required|max:25',
        'Modelo' => 'required|max:30',
        'Procesador' => 'required|max:20',
        'almacenamiento' => 'required|max:30',
        'estado' => 'required|boolean',
        'precio' => 'required|numeric',
    ]);
    $laptop->update($validatedData);

    return redirect()->route('laptops.index')->with('success', 'Laptop actualizada correctamente');
}

    public function destroy($id)
    {
        $laptop = Laptop::findOrFail($id);
        $laptop->delete();

        return redirect('/laptops')->with('success', 'Laptop eliminada correctamente.');
    }
    public function visibles()
    {
        return response()->json(Laptop::select('id', 'Marca', 'Modelo', 'Procesador', 'almacenamiento', 'precio', 'imagen')
                                       ->where('estado', true)
                                       ->get());
    }
    
}
