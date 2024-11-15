import { createTheme } from "@mui/material";

const lightMode = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#111",
    },
    background: {
        // default: "#ddd"
    }
  },
});

export default lightMode;
