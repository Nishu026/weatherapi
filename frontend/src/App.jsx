import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState(null); // State to store the weather information
  const [error, setError] = useState(null); // State to store any error message

  async function getWeather() {
    try {
      const res = await axios.get(`http://localhost:3000/weather/getweather/${value}`);
      setWeather(res.data); // Store the weather data in state
      setError(null); // Clear any previous error
    } catch (err) {
      setError("Failed to fetch weather data"); // Handle error
      setWeather(null); // Clear any previous weather data
    }
  }

  return (
    <>
      <div>
        <h2>Get Weather</h2>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={getWeather}>Get Weather</button>

        {error && <h2>{error}</h2>}
        {weather && (
          <div>
            <h2>The temperature of {weather.city} is {weather.temperature} deg C</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
