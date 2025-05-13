// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Layout.css'; // ✅ ruta corregida

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="logo">
          🌿 DronMédico
        </div>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/alertas">Alertas</Link></li>
          <li><Link to="/estado">Estado del Dron</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/extra">Página Extra</Link></li>
          <li><Link to="/extra2">Página Extra 2</Link></li>
        </ul>
      </nav>

      <main className="contenido">
        {children}
      </main>

            <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>DronMédico</h3>
            <p>Tecnología y Naturaleza en Armonía 🌱</p>
          </div>
          <div className="footer-links">
            <a href="#">Inicio</a>
            <a href="#">Estado del Dron</a>
            <a href="#">Zonas Atendidas</a>
            <a href="#">Contacto</a>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 DronMédico. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
};

export default Layout;
