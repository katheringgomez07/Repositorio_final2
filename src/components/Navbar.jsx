import React from 'react';
import '../Navbar.css';  // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#header">
            <span className="icon">🏠</span>
            <span className="text">Hola</span>
          </a>
        </li>
        <li>
          <a href="#about">
            <span className="icon">🙋‍♀️</span>
            <span className="text">Sobre Mí</span>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <span className="icon">📂</span>
            <span className="text">Proyectos</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span className="icon">💬</span>
            <span className="text">Contacto</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
