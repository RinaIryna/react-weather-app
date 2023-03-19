import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "455oacet7aef1edf2718f68b30434d00";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Mon</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="ForecastIcon"
            alt="sunny"
          />
          <div className="ForecastTemp">
            <span className="ForecastTemp-max">19°</span>
            <span className="ForecastTemp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
