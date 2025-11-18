import StatsRow from "./StatsRow";
import DataTable from "./DataTable";

export default function SecondScreen({ screen, setScreen }) {
  return (
    <>
      {/* Botón para regresar */}
      <div style={{ marginBottom: "16px" }}>
        <button
          className="btn primary"
          onClick={() => setScreen(1)}
        >
          ← Volver a plantilla 1
        </button>
      </div>

      {/* Contenido de la pantalla 2 */}
      <StatsRow />
      <DataTable />
    </>
  );
}
