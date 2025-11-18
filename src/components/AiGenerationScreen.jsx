export default function AiGenerationScreen() {
  return (
    <div className="card ai-screen">
      <h2>Generación de UI con IA</h2>

      <p className="ai-description">
        Esta pantalla simula el módulo de generación de interfaces usando el
        algoritmo tipo <em>Interface Generation Tree</em> descrito en el artículo.
        El usuario describe la interfaz y el sistema propone una estructura UI.
      </p>

      {/* PROMPT */}
      <div className="prompt-box">
        <label>Describe la interfaz que deseas generar:</label>
        <textarea
          className="prompt-input"
          placeholder="Ej: 'Un dashboard con panel lateral, métricas y una tabla de usuarios'..."
        />
      </div>

      {/* BOTÓN */}
      <button className="btn primary full">Generar UI</button>

      {/* PREVIEW */}
      <div className="preview-area">
        <h3>Vista previa generada</h3>
        <div className="preview-placeholder">
          <p>
            Aquí aparecería la maqueta de la interfaz generada a partir del
            árbol de componentes y del modelo de IA.
          </p>
        </div>
      </div>
    </div>
  );
}
