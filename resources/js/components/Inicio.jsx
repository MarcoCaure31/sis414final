import React from 'react';
import './App.css';  

const Inicio = () => {
    return (
        <div className="container mt-4">
            <div className="text-center">
                <h1>Bienvenido a nuestra tienda de laptops</h1>
                <p className="lead">
                    En Tienda Laptops, nos enorgullece ofrecer una amplia selección de laptops de las mejores marcas del mercado. 
                    Ya sea que estés buscando una laptop para trabajar, estudiar, jugar o simplemente navegar por la web, 
                    tenemos la opción perfecta para ti.
                </p>
                <p>
                    Nos especializamos en ofrecer productos de alta calidad, garantizando rendimiento, durabilidad y 
                    tecnología de punta. Explora nuestra gama de laptops y encuentra el equipo que se adapte a tus necesidades y presupuesto.
                </p>

                <h3>¿Por qué elegirnos?</h3>
                <ul className="list-unstyled">
                    <li><strong>Variedad de modelos:</strong> Desde laptops ultraligeras hasta potentes estaciones de trabajo.</li>
                    <li><strong>Garantía de calidad:</strong> Solo trabajamos con marcas líderes en la industria, como HP, Dell, MSI, y más.</li>
                    <li><strong>Precios competitivos:</strong> Ofrecemos precios justos y promociones especiales para que obtengas la mejor oferta.</li>
                    <li><strong>Atención personalizada:</strong> Nuestro equipo está disponible para asesorarte en la elección de tu laptop ideal.</li>
                </ul>

                <p>
                    Ya sea que necesites una laptop para tareas diarias, edición de video o juegos de alta resolución, en Tienda Laptops 
                    tenemos lo que buscas. Navega por nuestras categorías de productos y encuentra el equipo perfecto para ti.
                </p>

                <h3>Explora nuestras laptops destacadas</h3>
                <p>
                    Echa un vistazo a algunas de nuestras laptops más populares, que se destacan por su rendimiento excepcional, diseño elegante 
                    y precios accesibles. ¡No te lo pierdas!
                </p>
                <div>
                    <a href="/productos" className="btn btn-primary btn-lg">Ver Todos los Productos</a>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
