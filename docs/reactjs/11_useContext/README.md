## Docs.dev - `useContext`

#### Scenario

Imagine we are building a _theme switcher app_ where we want to pass a Theme value (e.g., `"dark"` or `"light"`) to multiple components without using `props` drilling.

Creating a context is one of the easiest thing. 😎

```js
// themeContext.js
import { createContext } from "react";

export const ThemeContext = createContext();
```

You can use a provider component for your contexts

```jsx
import { useState } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
```

```jsx
import ThemeProvider from "./ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Docs.dev</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
```

**Created with 💖!**