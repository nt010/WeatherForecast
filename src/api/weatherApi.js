// src/api/weatherApi.js
import axios from 'axios';

const BASE_URL = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/';

export const fetchWeatherData = async (areaCode) => {
  try {
    const response = await axios.get(`${BASE_URL}${areaCode}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
