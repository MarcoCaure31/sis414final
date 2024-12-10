import React from 'react';
import './Contacto.css'; 

function Contacto() {
    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h1>Contáctanos</h1>
                <p className="lead">Estamos aquí para ayudarte. Por favor, llena el formulario y nos pondremos en contacto contigo lo antes posible.</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form className="contact-form">
                        <div className="mb-4">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" id="nombre" className="form-control" placeholder="Tu nombre" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input type="email" id="email" className="form-control" placeholder="Tu correo electrónico" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea id="mensaje" className="form-control" rows="4" placeholder="Escribe tu mensaje" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
