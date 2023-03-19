import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
