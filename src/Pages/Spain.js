import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Weathercard from "../components/WeatherCard";
// Toledo
// https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=Toledo, castilla la mancha, españa

// Jaen
// https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=Jaen, Andalucia, españa

// Alhambra
// https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=Alhambra, andalucia ,españa

//Ubeda
// https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=ubeda, andalucia ,españa

//Malaga
// https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=malaga, andalucia ,españa

//Olvera
//https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=olvera, andalucia ,españa

// Sevilla
//https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=sevilla, andalucia ,españa

// Barcelona
// https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=barcelona, catalonia, spain

// Madrid
// https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=madrid, madrid, spain

const Spain = (props) => {
  const [weatherData, setWeatherData] = useState();
  const [searchText, setSearchText] = useState("");
  const apiKey = "8da8abb59d604218b0a15508232807";
  const country = "Spain";
  const region = "castilla la mancha";
  const region_2 = "andalucia";
  const region_3 = "madrid";
  const region_4 = "catalonia";
  const locations = [
    "Toledo",
    "Jaen",
    "Alhambra",
    "Ubeda",
    "Malaga",
    "Olvera",
    "Sevilla",
    "Barcelona",
    "Madrid",
  ];
  const Andalucia = [
    "Jaen",
    "Alhambra",
    "Ubeda",
    "Malaga",
    "Olvera",
    "Sevilla",
  ];

  const handleButton = (event) => {
    const location = event.target.value;
    let apiUrl = null;
    if (Andalucia.includes(location)) {
      apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location} ${region_2} ${country}`;
    } else if (location === "Madrid") {
      apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location} ${region_3} ${country}`;
    } else if (location === "Barcelona") {
      apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location} ${region_4} ${country}`;
    } else {
      apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location} ${region} ${country}`;
    }
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

  return (
    <div className="pb-3 mb-4 border-bottom">
      <h1>This is spain weather my friend</h1>
      <div className="row justify-content-center">
        {locations.map((location) => {
          return (
            <div key={Math.floor(Math.random() * 10000)} className="d-grid gap-2 p-2">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg"
                onClick={handleButton}
                value={location}
              >
                {location}
              </button>
            </div>
          );
        })}
        {weatherData && <Weathercard weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default Spain;
