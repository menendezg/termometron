import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
const Card = () => {
  const [weatherData, setWeather] = useState([]);
  const [messageData, setMessage] = useState([]);
  const [imageData, setImage] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-34.5904&longitude=-58.629&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.current_weather.temperature);
        messageHandler(data.current_weather.temperature);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  let image = null;
  const messageHandler = (weatherData) => {
    switch (true) {
      case weatherData > 15:
        setMessage(
          `${weatherData} Grados. No hace tanto frio. remerita vas andar bien capo.`
        );
        image = (
          <Player
            src="https://lottie.host/9013b8af-a7b5-4656-bf49-67524a1ec69f/7LivCbU2bF.json"
            className="player"
            loop
            autoplay
          />
        );
        setImage(image);
        break;
      case weatherData < 15 && weatherData > 10:
        setMessage(
          `${weatherData} Grados. Buzo y/o camperita. esta fresquito mostro`
        );
        image = (
          <Player
            src="https://lottie.host/c17f9aa0-db80-40c0-8afb-d618deb0a8aa/lFTgAnOhYA.json"
            className="player"
            loop
            autoplay
          />
        );
        setImage(image);
        break;
      case weatherData < 10:
        setMessage(
          `${weatherData} Grados. agarrate porque te vas a congelar. ponete todo lo que tengas. si podes nos salgas de tu casa`
        );
        image = (
          <Player
            src="https://lottie.host/c17f9aa0-db80-40c0-8afb-d618deb0a8aa/lFTgAnOhYA.json"
            className="player"
            loop
            autoplay
          />
        );
        setImage(image);
        break;
      default:
        break;
    }
  };
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Hace frio en Hurlingham City?</h1>
        <p>{messageData}</p>
        {/* when I able to get raining from api <Player
          src="https://lottie.host/5d93967b-6f17-45ea-8436-de01f5bade72/bRAg9R530M.json"
          className="player"
          loop
          autoplay
          style={{ height: "300px", width: "300px" }}
        /> */}
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-4">{imageData}</div>
      </div>
    </div>
  );
};

export default Card;
