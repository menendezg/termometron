import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Weathercard = (props) => {
  const [message, setMessage] = useState([]);
  const [imageData, setImage] = useState([]);
  let image = null;
  console.log('props',props)

  useEffect(() => {
    // Accede a la propiedad 'temp_c' dentro de 'props.weatherData' para obtener el valor de la temperatura
    const temperature = props.weatherData.temperature;
    messageHandler(temperature);
  }, [props.weatherData]);

  const messageHandler = (temperature) => {
    switch (true) {
      case temperature > 18:
        setMessage(
          `${temperature} Grados. No hace tanto frío. Remerita, vas a andar bien, capo.`
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
      case temperature < 15 && temperature > 10:
        setMessage(
          `${temperature} Grados. Buzo y/o camperita. Está fresquito, mostro.`
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
      case temperature < 10:
        setMessage(
          `${temperature} Grados. Agarrate, porque te vas a congelar. Ponte todo lo que tengas. Si puedes, no salgas de tu casa.`
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
        <h1 className="display-5 fw-bold">Hace frío en {props.weatherData.city} City?</h1>
        <p>{message}</p>
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

export default Weathercard;
