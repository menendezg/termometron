import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Weathercard from "./WeatherCard";

const Input = () => {
  const [weatherData, setWeatherData] = useState();
  const [searchText, setSearchText] = useState("");
  const apiKey = "8da8abb59d604218b0a15508232807";
  const country = " Argentina";
  const neighbourhood = "Buenos aires"

  const handleButton = (event) => {
    const location = event.target.value;
    
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location} ${neighbourhood} ${country}`;
    console.log(apiUrl);

    // Realizar la solicitud con fetch
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData({ temperature: data.current.temp_c, city: location });
      })
      .catch((error) => {
        console.error("Error al obtener el clima:", error);
      });
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Construir la URL para obtener el clima actual de la ubicación ingresada
  //   const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchText} ${city}`;
  //   console.log(apiUrl);

  //   // Realizar la solicitud con fetch
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setWeatherData({ temperature: data.current.temp_c, city: searchText });
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener el clima:", error);
  //     });
  // };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="row justify-content-center">
      <div className="d-grid gap-2 p-2">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={handleButton}
          value="moron"
        >
          Moron
        </button>
      </div>
      <div className="d-grid gap-2 p-2">
        <button
          value="Hurlingham"
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={handleButton}
        >
          Hurlingham
        </button>
      </div>
      <div className="d-grid gap-2 p-2">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          value="Ramos Mejia"
          onClick={handleButton}
        >
          Ramos mejia
        </button>
      </div>
      <div className="d-grid gap-2 p-2">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          value="Palomar"
          onClick={handleButton}
        >
          Palomar
        </button>
      </div>
      {weatherData && <Weathercard weatherData={weatherData} />}
    </div>
  );
};

export default Input;
