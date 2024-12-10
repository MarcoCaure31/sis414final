<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Laptops Disponibles</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }
        .container {
            padding: 40px;
            width: 80%;
            max-width: 900px;
            margin: 0 auto;
        }
        h1 {
            text-align: center;
            color: #343a40;
            margin-bottom: 20px;
        }
        .laptop-item {
            background-color: #ffffff;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .laptop-item a {
            text-decoration: none;
            color: #007bff;
            padding: 10px 15px;
            border: 1px solid #007bff;
            border-radius: 6px;
            margin-right: 10px;
        }
        .laptop-item a:hover {
            background-color: #007bff;
            color: #ffffff;
        }
        .laptop-item button {
            background-color: #dc3545;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
        .laptop-item button:hover {
            background-color: #c82333;
        }
        .back-link {
            text-align: center;
            display: block;
            margin-top: 20px;
            text-decoration: none;
            color: #007bff;
        }
        .back-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Lista de Laptops d</h1>

        @if($laptops->isEmpty())
            <p>No hay laptops disponibles.</p>
        @else
            @foreach($laptops as $laptop)
                <div class="laptop-item">
                    <strong>{{ $laptop->Marca }}</strong> - {{ $laptop->Modelo }} - ${{ $laptop->precio }}
                    <a href="{{ route('laptops.edit', $laptop->id) }}">Editar</a>
                    <form action="{{ route('laptops.destroy', $laptop->id) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit">Eliminar</button>
                    </form>
                </div>
            @endforeach
        @endif

        <a href="{{ route('laptops.create') }}" class="back-link">Agregar Nueva Laptop</a>
    </div>

</body>
</html>
