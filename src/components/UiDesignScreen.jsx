import { useState } from "react";

export default function UiDesignScreen() {
  const [prompt, setPrompt] = useState("");
  const [generatedUI, setGeneratedUI] = useState(null);
  const [history, setHistory] = useState([]);

  const generateUI = () => {
    if (!prompt.trim()) return;

    // Simulación de generación UI
    const mockGenerated = `
      <div class="gen-header">✨ ${prompt}</div>
      <div class="gen-card">Componente generado A</div>
      <div class="gen-card">Componente generado B</div>
      <div class="gen-card">Componente generado C</div>
    `;

    setGeneratedUI(mockGenerated);
    setHistory([{ prompt, time: new Date() }, ...history]);
  };

  return (
    <div className="ui-gen-screen">
      
      {/* PANEL IZQUIERDO */}
      <div className="ui-left">
        <h2>🎨 Generador UI Inteligente</h2>
        <p className="muted">
          Escribe un prompt y genera interfaces instantáneamente.
        </p>

        <textarea
          className="prompt-box"
          placeholder="Ej: Crea un panel con estadísticas y 3 tarjetas..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button className="gen-btn" onClick={generateUI}>
          Generar interfaz
        </button>

        <h3 className="history-title">Historial</h3>
        <div className="history-list">
          {history.map((h, i) => (
            <div className="history-item" key={i}>
              <div>{h.prompt}</div>
              <small>{h.time.toLocaleTimeString()}</small>
            </div>
          ))}
        </div>
      </div>

      {/* CANVAS */}
      <div className="ui-canvas">
        {!generatedUI ? (
          <div className="canvas-placeholder">
            🖥️ La interfaz generada aparecerá aquí
          </div>
        ) : (
          <div
            className="canvas-preview"
            dangerouslySetInnerHTML={{ __html: generatedUI }}
          />
        )}
      </div>

    </div>
  );
}
