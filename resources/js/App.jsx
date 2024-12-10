import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Tienda Laptops414</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/productos">Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contacto">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="container mt-4">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>
                </main>

                <footer className="bg-dark text-center text-white py-3">
                    <p className="mb-0">© {new Date().getFullYear()} Tienda Laptops. Sis414Examenfinal.</p>
                    <p>
                        <a href="https://www.facebook.com" className="text-white me-2" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                        <a href="https://www.twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                        <a href="https://www.instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </p>
                </footer>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));
    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
