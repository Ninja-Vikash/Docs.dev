import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date()); // Update the time every second
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the interval on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <Box
      sx={(theme) => ({
        ml: "auto",
        mr: 2,
        bgcolor: theme.palette.mode == "light" ? "grey.200" : "grey.900",
        p: 1,
        borderRadius: "8px",
      })}
    >
      <Typography
        variant="body1"
        sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "14px" }}
      >
        {formattedTime}
      </Typography>
    </Box>
  );
}

export default Clock;
