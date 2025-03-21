## Docs.dev - MUI theme

**MUI** provides theme palettes 🎨

### Theme

For creating theme we will use `createTheme()` method

```jsx
// theme.jsx

import { createTheme } from "@mui/material";

const lightMode = createTheme();

const darkMode = createTheme();

export { lightMode, darkMode };
```

Declare mode in each theme

```jsx
const lightMode = createTheme({
  palette: {
    mode: "light",
  },
});

const darkMode = createTheme({
  palette: {
    mode: "dark",
  },
});
```

#### Follow the steps to setup theme

```jsx
// App.jsx
import React from "react";
import { Box } from "@mui/material";

function App() {
  return <Box></Box>;
}

export default App;
```

Create an header file `Header.jsx`

```jsx
// Header.jsx
import React from "react";
import { Container, Typography } from "@mui/material";

function Header() {
  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "poppins",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Docs.dev
      </Typography>
    </Container>
  );
}

export default Header;
```

Add an button to switch modes

```jsx
import React from "react";
import { Container, IconButton, Typography, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "poppins",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Docs.dev
      </Typography>

      <IconButton>
        {theme.palette.mode == "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Container>
  );
}

export default Header;
```
> [!IMPORTANT]\
> Before using MUI Icons install the dependency
> ```bash
> npm install @mui/icons-material
> ```

Use the `<Header />` component

```jsx
import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header.jsx";

function App() {
  return (
    <Box>
      <Header />
    </Box>
  );
}

export default App;
```

Declare theme state and toggler

```jsx
import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header.jsx";

function App() {
  // theme state
  const [isDarkMode, setIsDarkMode] = useState(false);
  // theme toggler
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Box>
      <Header toggleTheme={toggleTheme} />
    </Box>
  );
}

export default App;
```

Wrap the code using `<ThemeProvider>` and import `lightTheme` & `darkTheme`

```jsx
import React, { useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { darkMode, lightMode } from "./theme";
import Header from "./components/Header.jsx";

function App() {
  // theme state
  const [isDarkMode, setIsDarkMode] = useState(false);
  // theme toggler
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <CssBaseline />
      <Box>
        <Header toggleTheme={toggleTheme} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
```

Modify the `<Header />` component
```jsx
function Header({ toggleTheme }) {
  const theme = useTheme();
  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "poppins",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Docs.dev
      </Typography>

      <IconButton onClick={toggleTheme}>
        {theme.palette.mode == "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Container>
  );
}
```
***

### Preserving theme on reload 🔥

By modifying and adding few lines you can preserve the existing theme across the reloads.

```jsx
function App() {
  // theme state
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // theme toggler
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <CssBaseline />
      <Box>
        <Header toggleTheme={toggleTheme} />
      </Box>
    </ThemeProvider>
  );
}
```

**Thank you 💖**