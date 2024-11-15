import React from "react";
import { Typography } from "@mui/material";

function Logo() {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "poppins",
        fontWeight: "600",
        fontSize: "20px",
      }}
    >
      Weather.io
    </Typography>
  );
}

export default Logo;
