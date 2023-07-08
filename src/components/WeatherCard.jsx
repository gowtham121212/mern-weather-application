import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ temperature, description, humidity, wind }) => {
  return (
    <div className="weather-card">
      <div className="weather-info">
        <h2 className="temperature">{temperature}°C</h2>
        <p className="description">{description}</p>
      </div>
      <div className="weather-details">
        <div className="detail">
          <p className="label">Humidity</p>
          <p className="value">{humidity}%</p>
        </div>
        <div className="detail">
          <p className="label">Wind</p>
          <p className="value">{wind} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

