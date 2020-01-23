import React from "react";
import "./WeatherCard.css";

function WeatherCard(props) {
  if (props.error !== "" || !props.city) {
    return <div className="error">{props.error}</div>;
  } else {
    return (
      <div className="card mt-4 col-md-5">
        <div className="card-body">
          <h4 className="card-title">
            Current Weather in{" "}
            <span className="location">
              {props.city}, {props.country}
            </span>
          </h4>
          <div className="row">
            <img
              alt="weatherIcon"
              width="80"
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            />
            <div className="temp pt-3">{props.temperature} °C </div>
          </div>
          <p className="text-capitalize">{props.description}</p>
          <p>Humidity: {props.humidity}%</p>
        </div>
      </div>
    );
  }
}
export default WeatherCard;
