export default function StatsRow() {
  return (
    <section className="stats-row">
      <div className="stat-card">
        <h3>Usuarios</h3>
        <p className="stat-number">1,245</p>
      </div>

      <div className="stat-card">
        <h3>Sesiones</h3>
        <p className="stat-number">3,980</p>
      </div>

      <div className="stat-card">
        <h3>Tasa de éxito</h3>
        <p className="stat-number">87%</p>
      </div>
    </section>
  );
}
