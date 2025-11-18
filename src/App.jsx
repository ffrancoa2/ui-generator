import { useState, useEffect } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HeroPanel from "./components/HeroPanel";
import CardsGrid from "./components/CardsGrid";
import SidePanel from "./components/SidePanel";
import SecondScreen from "./components/SecondScreen";
import UiDesignScreen from "./components/UiDesignScreen";
import AiGenerationScreen from "./components/AiGenerationScreen";

export default function App() {
  const [screen, setScreen] = useState(1);
  const [theme, setTheme] = useState("dark");

  // Cambiar tema dinámicamente
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Header
        screen={screen}
        setScreen={setScreen}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="app-shell">
        <Sidebar />

        <main className="content">
          {screen === 1 && (
            <>
              <HeroPanel screen={screen} setScreen={setScreen} />
              <CardsGrid />
            </>
          )}

          {screen === 2 && (
            <SecondScreen screen={screen} setScreen={setScreen} />
          )}

          {screen === 3 && <UiDesignScreen setScreen={setScreen} />}

          {screen === 4 && <AiGenerationScreen />}
        </main>

        <SidePanel screen={screen} />
      </div>
    </>
  );
}
