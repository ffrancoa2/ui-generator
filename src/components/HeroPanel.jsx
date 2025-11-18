export default function HeroPanel({ screen, setScreen }) {
  return (
    <section className="hero-panel">
      <div className="hero-text">
        <h1>Diseño de interfaz generado</h1>
        <p>
          Ejemplo basado en el método <strong>Interface Generation Tree</strong>
          descrito en Duan et al. (2024).
        </p>

        <div className="hero-actions">
          <button
            className="btn primary"
            onClick={() => setScreen(screen === 1 ? 2 : 1)}
          >
            {screen === 1
              ? "Cambiar a plantilla 2"
              : "Volver a plantilla 1"}
          </button>

          <button className="btn ghost">
            Ver árbol
          </button>
        </div>
      </div>

      <div className="hero-preview">
        <div className="preview-header"></div>
        <div className="preview-body">
          <div className="preview-card tall"></div>
          <div className="preview-card"></div>
          <div className="preview-card"></div>
        </div>
      </div>
    </section>
  );
}
