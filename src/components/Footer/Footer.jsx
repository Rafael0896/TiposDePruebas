import React from 'react';
// 1. Importa los estilos como un objeto
import styles from './Footer.module.css';

const Footer = () => {
    // Obtenemos el año actual dinámicamente
    const currentYear = new Date().getFullYear();

    return (
        // 2. Aplica las clases del objeto 'styles'
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>&copy; {currentYear} Todos los derechos reservados.</p>
                <div className={styles.socials}>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;