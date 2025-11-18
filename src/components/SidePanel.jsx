export default function SidePanel({ screen }) {
  return (
    <aside className="side-panel">
      {screen === 1 && (
        <>
          <section className="panel-section">
            <h3>Pantalla 1 — UI Principal</h3>
            <p>
              Esta es la interfaz principal generada a partir del árbol
              de componentes según Duan et al. (2024). Incluye un panel héroe,
              un grid de tarjetas y una estructura típica de dashboard.
            </p>
          </section>

          <section className="panel-section">
            <h3>Propósito</h3>
            <p>Proporcionar una vista general del sistema e introducir la interfaz para navegación.</p>
          </section>

          <section className="panel-section">
            <h3>Usuarios</h3>
            <p>Usuarios generales, evaluadores de UI o estudiantes de diseño de interfaces.</p>
          </section>
        </>
      )}

      {screen === 2 && (
        <>
          <section className="panel-section">
            <h3>Pantalla 2 — Dashboard Analítico</h3>
            <p>
              Variante secundaria que presenta métricas rápidas y datos
              en tabla, basada en el árbol de componentes.
            </p>
          </section>

          <section className="panel-section">
            <h3>Propósito</h3>
            <p>Ofrecer un análisis rápido del sistema mediante estadísticas y registros recientes.</p>
          </section>

          <section className="panel-section">
            <h3>Usuarios</h3>
            <p>Administradores y usuarios que requieren supervisión del sistema.</p>
          </section>
        </>
      )}

      {screen === 3 && (
        <>
          <section className="panel-section">
            <h3>Pantalla 3 — Diseño UI</h3>
            <p>Pantalla para trabajar con prototipos, componentes y estilos.</p>
          </section>

          <section className="panel-section">
            <h3>Propósito</h3>
            <p>Permitir al usuario diseñar y configurar la interfaz visual.</p>
          </section>

          <section className="panel-section">
            <h3>Usuarios</h3>
            <p>Diseñadores, desarrolladores frontend y estudiantes de UX/UI.</p>
          </section>
        </>
      )}

      {screen === 4 && (
        <>
          <section className="panel-section">
            <h3>Pantalla 4 — Generación IA</h3>
            <p>
              Simulación del módulo que aplica el algoritmo Interface
              Generation Tree para generar nuevas interfaces según un prompt.
            </p>
          </section>

          <section className="panel-section">
            <h3>Propósito</h3>
            <p>Permitir crear interfaces automáticamente usando descripciones textuales.</p>
          </section>

          <section className="panel-section">
            <h3>Usuarios</h3>
            <p>Diseñadores, prototipadores y estudiantes de IA aplicada a diseño.</p>
          </section>
        </>
      )}
    </aside>
  );
}
