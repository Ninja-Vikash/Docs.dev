import React from "react";
import { IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Toggler({ toggleTheme }) {
  const theme = useTheme();
  return (
    <IconButton onClick={toggleTheme}>
      {theme.palette.mode == "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default Toggler;
