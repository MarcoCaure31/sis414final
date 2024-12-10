<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Laptop</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 40px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
        }
        h1 {
            text-align: center;
            color: #343a40;
            margin-bottom: 20px;
        }
        label {
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
            color: #495057;
        }
        input[type="text"],
        input[type="number"],
        input[type="checkbox"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
        }
        input[type="checkbox"] {
            width: auto;
            margin-right: 10px;
        }
        button {
            width: 100%;
            padding: 14px;
            background-color: #28a745;
            color: #ffffff;
            font-size: 18px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #218838;
        }
        .back-link {
            display: block;
            margin-top: 20px;
            text-align: center;
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
        <h1>Agregar Laptop</h1>
        <form action="{{ route('laptops.store') }}" method="POST">
            @csrf
            <label for="Marca">Marca:</label>
            <input type="text" name="Marca" id="Marca" required>

            <label for="Modelo">Modelo:</label>
            <input type="text" name="Modelo" id="Modelo" required>

            <label for="Procesador">Procesador:</label>
            <input type="text" name="Procesador" id="Procesador" required>

            <label for="almacenamiento">Almacenamiento:</label>
            <input type="text" name="almacenamiento" id="almacenamiento" required>

            <label for="estado">Estado:</label>
            <input type="checkbox" name="estado" id="estado" value="1" checked>

            <label for="precio">Precio:</label>
            <input type="number" name="precio" id="precio" step="0.01" required>

            <button type="submit">Agregar Laptop</button>
        </form>
        <a href="{{ route('laptops.index') }}" class="back-link">Volver a la lista de laptops</a>
    </div>

</body>
</html>
