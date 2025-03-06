// components/WeatherInfo.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/WeatherInfo.css';

const WeatherInfo = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`
                );
                setWeather(response.data);
            } catch (err) {
                setError("Failed to fetch weather data.");
            }
        };
        fetchWeather();
    }, []);

    return (
        <div className="weather">
            {error ? <p>{error}</p> : weather && (
                <p>Weather: {weather.main.temp}°C, {weather.weather[0].description}</p>
            )}
        </div>
    );
};

export default WeatherInfo;
