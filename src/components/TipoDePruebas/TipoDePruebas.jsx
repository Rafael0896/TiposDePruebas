import React from "react";
// 1. Importamos los estilos como un objeto llamado 'styles'
import styles from "./TipoDePruebas.module.css";

const TipoDePruebas = () => {
    return (

        <div className={styles.container}>
            <h1 className={styles.mainTitle}>
                Tipos de Pruebas de Software
            </h1>

            <h2 className={styles.sectionTitle}>
                Características, beneficios y ejemplos de cada tipo de prueba
            </h2>

            <p>
                Te explico los principales tipos de pruebas de software organizados por diferentes criterios:
            </p>

            {/* --- El resto del contenido informativo no cambia --- */}

            <h3>Por Nivel de Abstracción (Pirámide de Testing)</h3>
            <ul>
                <li>
                    <b>Pruebas Unitarias</b>
                    <ul>
                        <li>Características: Prueban componentes individuales (funciones, métodos, clases) de forma aislada.</li>
                        <li>Beneficios: Rápidas de ejecutar, fácil localización de errores, bajo costo de mantenimiento.</li>
                        <li>Ejemplo: Probar una función que calcula el IVA de un producto.</li>
                    </ul>
                </li>
                {/* ... más list items ... */}
                <li>
                    <b>Pruebas de Integración</b>
                    <ul>
                        <li>Características: Verifican la interacción entre componentes o módulos.</li>
                        <li>Beneficios: Detectan problemas de comunicación entre sistemas, validan interfaces.</li>
                        <li>Tipos: Big Bang, Top-down, Bottom-up, Sandwich.</li>
                    </ul>
                </li>
                <li>
                    <b>Pruebas de Sistema</b>
                    <ul>
                        <li>Características: Evalúan el sistema completo en un entorno similar a producción.</li>
                        <li>Beneficios: Validan requisitos end-to-end, comportamiento global del sistema.</li>
                    </ul>
                </li>
                <li>
                    <b>Pruebas de Aceptación</b>
                    <ul>
                        <li>Características: Verifican que el sistema cumple con los requisitos del negocio.</li>
                        <li>Beneficios: Garantizan satisfacción del usuario final, validación de criterios de aceptación.</li>
                    </ul>
                </li>
            </ul>

            {/* Por Conocimiento del Código */}
            <h3>Por Conocimiento del Código</h3>
            <ul>
                <li>
                    <b>Caja Blanca (White Box)</b>
                    <ul>
                        <li>Características: El tester conoce la estructura interna del código.</li>
                        <li>Beneficios: Cobertura exhaustiva de caminos, optimización de casos de prueba.</li>
                        <li>Técnicas: Cobertura de sentencias, ramas, condiciones.</li>
                    </ul>
                </li>
                <li>
                    <b>Caja Negra (Black Box)</b>
                    <ul>
                        <li>Características: Se enfoca en entradas y salidas sin conocer la implementación.</li>
                        <li>Beneficios: Simula perspectiva del usuario real, independiente de la tecnología.</li>
                        <li>Técnicas: Clases de equivalencia, valores límite, tablas de decisión.</li>
                    </ul>
                </li>
                <li>
                    <b>Caja Gris (Grey Box)</b>
                    <ul>
                        <li>Características: Combina ambos enfoques.</li>
                        <li>Beneficios: Balanceo entre cobertura y practicidad.</li>
                    </ul>
                </li>
            </ul>

            {/* Por Propósito Funcional */}
            <h3>Por Propósito Funcional</h3>
            <ul>
                <li>
                    <b>Pruebas Funcionales</b>: Verifican que el software hace lo que debe hacer.
                    <br />Tipos: Smoke testing, sanity testing, pruebas de regresión.
                </li>
                <li>
                    <b>Pruebas No Funcionales</b>
                    <ul>
                        <li>Rendimiento: Evalúan velocidad, escalabilidad, estabilidad.</li>
                        <li>Seguridad: Identifican vulnerabilidades y riesgos.</li>
                        <li>Usabilidad: Miden facilidad de uso y experiencia del usuario.</li>
                        <li>Compatibilidad: Verifican funcionamiento en diferentes entornos.</li>
                    </ul>
                </li>
            </ul>

            {/* Por Momento de Ejecución */}
            <h3>Por Momento de Ejecución</h3>
            <ul>
                <li>
                    <b>Pruebas Estáticas</b>
                    <ul>
                        <li>Características: Sin ejecutar el código (revisiones, análisis estático).</li>
                        <li>Beneficios: Detección temprana de defectos, menor costo de corrección.</li>
                    </ul>
                </li>
                <li>
                    <b>Pruebas Dinámicas</b>
                    <ul>
                        <li>Características: Requieren ejecutar el software.</li>
                        <li>Beneficios: Validación del comportamiento real en tiempo de ejecución.</li>
                    </ul>
                </li>
            </ul>

            {/* Por Grado de Automatización */}
            <h3>Por Grado de Automatización</h3>
            <ul>
                <li>
                    <b>Pruebas Manuales</b>
                    <ul>
                        <li>Características: Ejecutadas por personas.</li>
                        <li>Beneficios: Flexibilidad, detección de problemas de UX, pruebas exploratorias.</li>
                    </ul>
                </li>
                <li>
                    <b>Pruebas Automatizadas</b>
                    <ul>
                        <li>Características: Ejecutadas por herramientas/scripts.</li>
                        <li>Beneficios: Repetibilidad, velocidad, ejecución continua, ROI a largo plazo.</li>
                    </ul>
                </li>
            </ul>

            {/* Tipos Especializados */}
            <h3>Tipos Especializados</h3>
            <ul>
                <li>Pruebas de API: Verifican servicios web y interfaces de programación.</li>
                <li>Pruebas de Base de Datos: Validan integridad, consistencia y rendimiento de datos.</li>
                <li>Pruebas de Accesibilidad: Garantizan usabilidad para personas con discapacidades.</li>
                <li>Pruebas de Localización: Verifican adaptación a diferentes idiomas y culturas.</li>
            </ul>

            {/* Actividades */}
            <h2 className={styles.sectionTitle}>Actividades</h2>
            <ol>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
            </ol>
        </div>
    );
};

export default TipoDePruebas;
