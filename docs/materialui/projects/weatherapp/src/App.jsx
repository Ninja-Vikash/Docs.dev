import React, { useState } from "react";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkMode, lightMode } from "./theme";
import Home from "./pages/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <CssBaseline />

      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
