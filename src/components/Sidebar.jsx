export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <p className="sidebar-title">Proyecto</p>
        <button className="sidebar-item active">Dashboard</button>
        <button className="sidebar-item">Pantallas</button>
        <button className="sidebar-item">Componentes</button>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">Preferencias</p>
        <button className="sidebar-item">Tema</button>
        <button className="sidebar-item">Grid</button>
      </div>
    </aside>
  );
}
