import React, { useState } from 'react';
import './Producto.css';

const Productos = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const laptops = [
        { id: 1, marca: 'HP', modelo: 'Pavilion 15', precio: 340.00, descripcion: 'Laptop HP Pavilion con procesador i5, 8GB de RAM, 512GB SSD.', imagen: '/images/hp-15.jpg' },
        { id: 2, marca: 'Dell', modelo: 'Inspiron 14', precio: 730.00, descripcion: 'Laptop Dell Inspiron con procesador i7, 16GB de RAM, 1TB HDD.', imagen: '/images/dell14.jpg' },
        { id: 3, marca: 'MSI', modelo: 'idealPad3', precio: 565.00, descripcion: 'Laptop MSI con procesador intel i7, 8GB de RAM, 1TB SSD.', imagen: '/images/msiid3.jpg' },
        { id: 4, marca: 'MSI', modelo: 'idealPad5', precio: 890.00, descripcion: 'Laptop MSI idealPad5 con procesador Ryzen 7, 16GB de RAM, 1TB SSD.', imagen: '/images/msiid5.jpg' },
        { id: 5, marca: 'ASUS', modelo: 'L510', precio: 670.00, descripcion: 'Laptop ASUS L510 con procesador Intel i5, 8GB de RAM, 512GB SSD.', imagen: '/images/asus510.jpg' },
        { id: 6, marca: 'ACER', modelo: 'ASPIRE 5', precio: 450.00, descripcion: 'Laptop Acer Aspire5 con procesador Intel i3, 8GB de RAM, 256GB SSD.', imagen: '/images/aceras5.jpg' },
        { id: 7, marca: 'APPLE', modelo: 'MacBook Air MQD42LL/A', precio: 560.00, descripcion: 'Laptop Apple MacBook Air con procesador Intel i5, 12GB de RAM, 256GB SSD.', imagen: '/images/applemac.jpg' },

    ];

    const filteredLaptops = laptops.filter(laptop =>
        laptop.marca.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.modelo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleProductClick = (laptop) => {
        setSelectedProduct(laptop);
    };

    const handleCloseDetails = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Catálogo de Productos</h1>

            <div className="d-flex justify-content-center mb-4">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Buscar productos"
                    aria-label="Buscar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-outline-primary">Buscar</button>
            </div>

            <div className="row justify-content-center">
                {filteredLaptops.length === 0 ? (
                    <p className="text-center">No se encontraron productos que coincidan con la búsqueda.</p>
                ) : (
                    filteredLaptops.map(laptop => (
                        <div key={laptop.id} className="col-md-4">
                            <div className="card mb-4 product-card" onClick={() => handleProductClick(laptop)}>
                                <img
                                    src={laptop.imagen}
                                    alt={`${laptop.marca} - ${laptop.modelo}`}
                                    className="card-img-top product-image"
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{laptop.marca} - {laptop.modelo}</h5>
                                    <p className="card-text">Precio: ${laptop.precio.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {selectedProduct && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={handleCloseDetails}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProduct.marca} - {selectedProduct.modelo}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseDetails}></button>
                            </div>
                            <div className="modal-body text-center">
                                <img
                                    src={selectedProduct.imagen}
                                    alt={`${selectedProduct.marca} - ${selectedProduct.modelo}`}
                                    className="img-fluid mb-3"
                                />
                                <p><strong>Descripción:</strong> {selectedProduct.descripcion}</p>
                                <p><strong>Precio:</strong> ${selectedProduct.precio.toFixed(2)}</p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-secondary me-2" onClick={handleCloseDetails}>Cancelar</button>
                                    <button className="btn btn-primary">Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Productos;
