import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3004/api/weather/${location}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching weather data');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div className="weather-data">
          <h2>Weather for {location}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
