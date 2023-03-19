import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        className="ForecastIcon"
        alt={props.data.condition.description}
      />
      <div className="ForecastTemp">
        <span className="ForecastTemp-max">{maxTemp()}</span>
        <span className="ForecastTemp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
