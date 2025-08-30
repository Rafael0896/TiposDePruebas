// src/App.tsx

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'
import TiposDePruebas from './components/TipoDePruebas/TipoDePruebas.jsx';
import './App.css'; // Asegúrate que la ruta a tu CSS principal sea correcta

function App() {
    return (
        // Usamos un "Fragment" (<>) para agrupar los componentes
        <>
            <Navbar />
            <main>
                <TiposDePruebas />
            </main>
            <Footer />
        </>
    );
}

export default App;