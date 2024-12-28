import React, { useState } from "react";
import { ThemeContext } from "./themeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        <div>Hello World</div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
