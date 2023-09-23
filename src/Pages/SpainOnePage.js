import React, { useState, useEffect } from "react";
import WeatherSpan from "../components/WeatherSpan";

const SpainOnePage = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  const [spainTime, setSpainTime] = useState({})
  const Toledo =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=Toledo,castilla la mancha,spain&lang=es";
  const Jaen =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=Jaen,Andalucia,spain&lang=es";
  const Alhambra =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=Alhambra,andalucia,spain&lang=es";
  const Ubeda =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=ubeda,andalucia,spain&lang=es";
  const Malaga =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=malaga,andalucia,spain&lang=es";
  const Olvera =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=olvera,andalucia,spain&lang=es";
  const Sevilla =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=sevilla,andalucia,spain&lang=es";
  const Barcelona =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=barcelona,catalonia,spain&lang=es";
  const Madrid =
    "https://api.weatherapi.com/v1/current.json?key=8da8abb59d604218b0a15508232807&q=madrid,madrid,spain&lang=es";
  const cities = [
    {city: "Toledo", url:Toledo},
    {city: "Jaen", url:Jaen},
    {city: "Alhambra", url:Alhambra},
    {city: "Ubeda", url:Ubeda},
    {city: "Malaga", url:Malaga},
    {city: "Olvera", url:Olvera},
    {city: "Sevilla", url:Sevilla},
    {city: "Barcelona", url:Barcelona},
    {city: "Madrid", url:Madrid},
  ];
  const timeUrl = "https://worldtimeapi.org/api/timezone/Europe/madrid"

  useEffect(() => {
    const getAllWeather = async () => {
      cities.forEach(async ({city, url}) => {
        const data = await fetch(url).then((response) => response.json());
        // const data = response.json()
        setWeatherData(weatherData => [...weatherData,{
          temperature: data.current.temp_c,
          icon: data.current.condition.icon,
          condition: data.current.condition.text,
          city: city,
        }]);
      });
    };
    const getSpainTime  = async () =>{
      const time = await fetch(timeUrl).then((response)=>response.json());
      const [hours, minutes] = time.datetime.split("T")[1].split(".")[0].split(":")

      setSpainTime({"time": hours+":"+minutes})
    }

    getAllWeather();
    getSpainTime();
    return () => {
      //
    };
  }, []);
  const [searchText, setSearchText] = useState("");
  const location = null;
  return (
    <div>
        {weatherData && <WeatherSpan data={weatherData} dateTime={spainTime}></WeatherSpan>}
    </div>
  )
};
export default SpainOnePage;
