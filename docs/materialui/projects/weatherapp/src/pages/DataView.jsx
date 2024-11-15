import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

function DataView({ weatherData }) {
  let { name, wind, main } = weatherData;
  const [values, setValues] = useState({
    name: "",
    wind: {
      speed: 0,
      direction: "",
    },
    pressure: 0,
    temperature: 0,
  });

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      name: name,
      wind: {
        speed: wind?.speed,
        direction: wind?.direction,
      },
      pressure: main?.pressure,
      temperature: main?.temp,
    }));
  }, [weatherData]);

  function fahrenheitToCelsius(fahrenheit) {
    let temp = (((fahrenheit - 32) * 5) / 9).toFixed(2);
    return temp;
  }

  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 4,
        mx: "auto",
        maxWidth: "30rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "poppins",
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      >
        {values.name || "City"}
      </Typography>

      <Typography
        variant="h2"
        sx={{ mt: 2, fontFamily: "poppins", fontSize: "5rem" }}
      >
        {values.temperature ? fahrenheitToCelsius(values.temperature) : 0}°C
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "poppins",
            fontSize: "1.2rem",
            bgcolor: theme.palette.mode == "dark" ? "grey.800" : "grey.200",
            p: 1,
            borderRadius: "8px",
          }}
        >
          Wind: {values.wind.speed || 0} KMH
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "poppins",
            fontSize: "1.2rem",
            bgcolor: theme.palette.mode == "dark" ? "grey.800" : "grey.200",
            p: 1,
            borderRadius: "8px",
          }}
        >
          Pressure: {values.pressure || 0} N
        </Typography>
      </Box>
    </Box>
  );
}

export default DataView;
