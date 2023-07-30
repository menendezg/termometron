import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Weathercard from "./WeatherCard";

const Input = () => {
  const [weatherData, setWeatherData] = useState();
  const [searchText, setSearchText] = useState("");
  const apiKey = "8da8abb59d604218b0a15508232807";
  const city = " Argentina";

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construir la URL para obtener el clima actual de la ubicación ingresada
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchText} ${city}`;
    console.log(apiUrl)

    // Realizar la solicitud con fetch
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData({ temperature: data.current.temp_c, city: searchText });
      })
      .catch((error) => {
        console.error("Error al obtener el clima:", error);
      });
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <form id="searchForm" onSubmit={handleSubmit}>
        <label htmlFor="searchInput">Ingresa tu búsqueda:</label>
        <input
          type="text"
          id="searchInput"
          name="searchText"
          required
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
      {weatherData && <Weathercard weatherData={weatherData} />}
    </div>
  );
};

export default Input;
