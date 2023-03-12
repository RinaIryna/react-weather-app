import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src={props.data.iconUrl} alt={props.data.description} />
              <strong> {Math.round(props.data.temperature)} </strong>
              <span className="units"> °C</span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}