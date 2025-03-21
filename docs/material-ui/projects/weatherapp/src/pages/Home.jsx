import React, { useState } from "react";
import Header from "../components/header";
import { Box, Button, Container, TextField } from "@mui/material";
import DataView from "./DataView";
import NotFound from "./NotFound";
import { getWeatherData } from "../api/weatherApi";

function Home({ toggleTheme }) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const searchCity = async () => {
    const weatherDataResponse = await getWeatherData(city);
    setWeatherData(weatherDataResponse);
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} />

      <Container sx={{ minHeight: "80vh", width: "100%", mt: 5 }}>
        <Box
          sx={{
            maxWidth: "30rem",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <TextField
            placeholder="enter your city name"
            fullWidth
            variant="outlined"
            size="normal"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button
            onClick={searchCity}
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Search
          </Button>
        </Box>

        {weatherData ? <DataView weatherData={weatherData} /> : <NotFound />}
      </Container>
    </>
  );
}

export default Home;
