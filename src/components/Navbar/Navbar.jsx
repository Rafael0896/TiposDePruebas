import React from 'react';
// 1. Importa los estilos como un objeto
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        // 2. Aplica las clases del objeto 'styles'
        <nav className={styles.navbar}>
            <a href="/" className={styles.logo}>
                PruebasDeSoftware
            </a>
            <ul className={styles.links}>
                <li><a href="#abstraccion">Niveles</a></li>
                <li><a href="#conocimiento">Enfoques</a></li>
                <li><a href="#proposito">Propósitos</a></li>
                <li><a href="#actividades">Actividades</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;