import "./styles/WeatherSpanStyle.css"

const WeatherSpan = (props) => {
  const temperatures = props.data;
  const time = props.dateTime.time;
  console.log(temperatures);
  return (
    <div>
      <p>España</p>
      {temperatures.map((temperature) => (
        <div
          key={Math.floor(Math.random() * 10000)}
          className="border-info m-2 card mb-3"
        >
          <div className="row g-0">
            <div className="col-md-4 border-bottom">
              <img src={temperature.icon} className=" p-2 img-fluid rounded-start card_image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ciudad: {temperature.city}</h5>
                <p className="card-text">
                  Temperatura: {temperature.temperature}°
                </p>
                <p className="card-text">Condition: {temperature.condition}</p>
                <p className="card-text">Spain - Hora: {time}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      Powered by{" "}
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        WeatherAPI.com
      </a>
    </div>
  );
};
export default WeatherSpan;
