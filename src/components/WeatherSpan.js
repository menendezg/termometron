const WeatherSpan = (props) => {
  console.log("weatherSpan");
  const temperatures = props.data;
  return (
    <div>
      <p>España</p>

      {temperatures.map((temperature) => (
        <div key={Math.floor(Math.random() * 10000)} className="border-info m-2 card">
          <div class="card-header">
            Spain
          </div>
          <div className="card-body">
            <h5 className="card-title">Ciudad: {temperature.city}</h5>
            <p>Temperatura: {temperature.temperature}°</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WeatherSpan;
