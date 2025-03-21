import axios from "axios";

async function getWeatherData(cityName) {
  const city = cityName.toLowerCase();
  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
    headers: {
      "x-rapidapi-key": "9063cd8c33msh54c3a9ba8a0c7c3p12b749jsne451929ded86",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    console.log(response.data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getWeatherData };
