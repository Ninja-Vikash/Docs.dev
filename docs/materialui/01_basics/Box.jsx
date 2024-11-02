import { Box, Typography } from "@mui/material";

function Component() {
  return (
    <Box
      component={"main"}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Docs.dev - MUI</Typography>
    </Box>
  );
}

export default Component;
