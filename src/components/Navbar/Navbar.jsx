// src/components/Navbar.tsx

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="/public">Tipos de Pruebas </a>
            </div>
            <ul className="nav-links">
                <li><a href="/public" className="nav-item">Inicio</a></li>
                <li><a href="#contact" className="nav-item">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;