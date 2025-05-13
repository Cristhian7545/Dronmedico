// src/components/Layout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Layout.css';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="logo">
          🌿 DronMédico
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/alertas" onClick={closeMenu}>Alertas</Link></li>
          <li><Link to="/estado" onClick={closeMenu}>Estado del Dron</Link></li>
          <li><Link to="/registro" onClick={closeMenu}>Registro</Link></li>
          <li><Link to="/extra" onClick={closeMenu}>Página Extra</Link></li>
          <li><Link to="/extra2" onClick={closeMenu}>Página Extra 2</Link></li>
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
