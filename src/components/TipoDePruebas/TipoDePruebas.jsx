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
                        <li>Características: Prueban componentes individuales (funciones, métodos, clases) de forma
                            aislada.
                        </li>
                        <li>Beneficios: Rápidas de ejecutar, fácil localización de errores, bajo costo de
                            mantenimiento.
                        </li>
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
                        <li>Beneficios: Garantizan satisfacción del usuario final, validación de criterios de
                            aceptación.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Pruebas de Estrés (STRESS TESTING)</b>
                    <ul>
                        <li>Características: Las pruebas de estrés son un tipo de pruebas diseñadas para garantizar la
                            solidez y resistencia de las aplicaciones. Pone a prueba el software en condiciones
                            extremas, llevándolo al límite y más allá.
                        </li>
                        <li>Beneficios: RLas pruebas de estrés ayudan a identificar cuellos de botella y limitaciones de
                            rendimiento en un sistema de software sometido a cargas extremas
                        </li>
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
                    <br/>Tipos: Smoke testing, sanity testing, pruebas de regresión.
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

            <h2>Justificación de la Selección</h2>

            <h2>¿Por qué Pruebas Unitarias?</h2>

            <h3>1. Base Fundamental de Calidad:</h3>
            <ul>
                <li>
                    <b>Pruebas Unitarias</b>
                    <ul>
                        <li>Características: Prueban componentes individuales (funciones, métodos, clases) de forma
                            aislada.
                        </li>
                        <li>Beneficios: Rápidas de ejecutar, fácil localización de errores, bajo costo de
                            mantenimiento.
                        </li>
                        <li>Ejemplo: Probar una función que calcula el IVA de un producto.</li>
                    </ul>
                </li>
            </ul>

            <h3>2. Desarrollo Eficiente:</h3>
            <ul>
                <li>Facilitan el <b>refactoring seguro</b> del código</li>
                <li>Sirven como <b>documentación viva</b> del comportamiento esperado</li>
                <li>Proporcionan <b>confianza</b> para hacer cambios sin romper funcionalidad existente</li>
            </ul>

            <h3>3. ROI Inmediato:</h3>
            <ul>
                <li><b>Bajo costo de implementación</b> y mantenimiento</li>
                <li><b>Alta frecuencia de ejecución</b> (en cada commit/build)</li>
                <li><b>Feedback inmediato</b> para desarrolladores</li>
            </ul>

            <h2>¿Por qué Pruebas de Estrés?</h2>

            <h3>1. Validación Crítica de Rendimiento:</h3>
            <ul>
                <li>
                    <b>Pruebas de Estrés (STRESS TESTING)</b>
                    <ul>
                        <li>Características: Las pruebas de estrés son un tipo de pruebas diseñadas para garantizar la
                            solidez y resistencia de las aplicaciones. Pone a prueba el software en condiciones
                            extremas, llevándolo al límite y más allá.
                        </li>
                        <li>Beneficios: Las pruebas de estrés ayudan a identificar cuellos de botella y limitaciones de
                            rendimiento en un sistema de software sometido a cargas extremas
                        </li>
                    </ul>
                </li>
            </ul>

            <h3>2. Preparación para Producción:</h3>
            <ul>
                <li>Las pruebas de estrés deben realizarse <b>antes de poner el software en producción</b></li>
                <li>Identifican <b>posibles problemas y cuellos de botella</b></li>
                <li>Evitan <b>fallos inesperados y la degradación del rendimiento</b></li>
            </ul>

            <h3>3. Identificación de Puntos Críticos:</h3>
            <ul>
                <li>Ayudan a <b>identificar cuellos de botella y limitaciones de rendimiento</b></li>
                <li><b>Garantizar que el sistema siga siendo fiable y robusto</b> incluso bajo cargas de usuarios
                    pesadas
                </li>
            </ul>

            <h2>Sinergia Entre Ambos Tipos</h2>

            <h3>Enfoque Complementario:</h3>

            <h4>Pruebas Unitarias (Micro-nivel):</h4>
            <ul>
                <li>Aseguran que cada pieza funciona correctamente</li>
                <li>Validan lógica de negocio específica</li>
                <li>Detectan errores de implementación</li>
            </ul>

            <h4>Pruebas de Estrés (Macro-nivel):</h4>
            <ul>
                <li>Validan comportamiento del sistema completo</li>
                <li>Identifican limitaciones de escalabilidad</li>
                <li>Evalúan estabilidad bajo presión</li>
            </ul>

            <h3>Cobertura Integral:</h3>
            <p>Esta combinación permite:</p>
            <ol>
                <li><b>Calidad interna</b> → Pruebas Unitarias</li>
                <li><b>Rendimiento externo</b> → Pruebas de Estrés</li>
                <li><b>Confianza total</b> → Desde componente hasta sistema completo</li>
            </ol>

            <h2>Respuesta Estructurada Para El Proyecto</h2>

            <blockquote>
                <p><b>"Seleccioné Pruebas Unitarias y Pruebas de Estrés por las siguientes razones estratégicas:</b></p>

                <p><b>Pruebas Unitarias:</b><br/>
                    - Proporcionan la base fundamental de calidad, validando cada componente individualmente con bajo
                    costo y alta frecuencia de ejecución<br/>
                    - Permiten detección temprana de errores cuando el costo de corrección es mínimo<br/>
                    - Facilitan el desarrollo ágil con refactoring seguro y feedback inmediato</p>

                <p><b>Pruebas De Estrés:</b><br/>
                    - Son críticas para validar que el sistema puede operar bajo condiciones extremas antes del
                    despliegue a producción<br/>
                    - Identifican cuellos de botella y limitaciones de rendimiento que podrían causar fallos inesperados
                    en el mundo real<br/>
                    - Garantizan la escalabilidad y robustez del sistema completo</p>

                <p><b>Sinergia:</b><br/>
                    Esta combinación me permite asegurar tanto la calidad a nivel de componente (unitarias) como la
                    estabilidad del sistema completo (estrés), proporcionando cobertura integral desde el desarrollo
                    hasta la preparación para producción."</p>
            </blockquote>
        </div>
    );
};

export default TipoDePruebas;
