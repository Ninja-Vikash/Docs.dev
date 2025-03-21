import { createTheme } from "@mui/material";

const darkMode = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#fff",
    },
    background: {
        // default: "#111"
    }
  },
});

export default darkMode;
