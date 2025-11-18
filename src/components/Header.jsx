import { useState, useEffect } from "react";

export default function Header({ screen, setScreen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // aplicar tema al <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const goTo = (n) => {
    setScreen(n);
    setMenuOpen(false);
  };

  return (
    <header className="ds-header">
      {/* IZQUIERDA - LOGO + NAV DESKTOP */}
      <div className="header-left">
        <div className="ds-logo">UI-GEN</div>

        <nav className="ds-nav desktop-only">
          <button
            className={`nav-item ${screen === 1 ? "active" : ""}`}
            onClick={() => goTo(1)}
          >
            Explorar
          </button>

          <button
            className={`nav-item ${screen === 2 ? "active" : ""}`}
            onClick={() => goTo(2)}
          >
            Plantillas
          </button>

          <button
            className={`nav-item ${screen === 3 ? "active" : ""}`}
            onClick={() => goTo(3)}
          >
            Diseño UI
          </button>

          <button
            className={`nav-item ${screen === 4 ? "active" : ""}`}
            onClick={() => goTo(4)}
          >
            Generación IA
          </button>
        </nav>
      </div>

      {/* DERECHA */}
      <div className="header-right">
        {/* BUSCADOR DESKTOP */}
        <div className="search-bar desktop-only">
          <input type="text" placeholder="Buscar..." />
        </div>

        {/* TOGGLE TEMA */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* AVATAR */}
        <div className="avatar-wrapper">
          <button
            className="avatar"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            JD
          </button>

          {profileOpen && (
            <div className="profile-menu">
              <button>Mi Perfil</button>
              <button>Ajustes</button>
              <button className="danger">Cerrar sesión</button>
            </div>
          )}
        </div>

        {/* HAMBURGER */}
        <button
          className="hamburger mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => goTo(1)}>Explorar</button>
        <button onClick={() => goTo(2)}>Plantillas</button>
        <button onClick={() => goTo(3)}>Diseño UI</button>
        <button onClick={() => goTo(4)}>Generación IA</button>
      </div>
    </header>
  );
}
