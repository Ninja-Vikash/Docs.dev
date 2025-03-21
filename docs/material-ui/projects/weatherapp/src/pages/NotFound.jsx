import React from "react";
import { Box, Typography } from "@mui/material";

function NotFound() {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">Ooops! Data not available</Typography>
    </Box>
  );
}

export default NotFound;
