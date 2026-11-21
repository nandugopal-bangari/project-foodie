import axios from "axios";
import React, { useState } from "react";

function Weather() {
  let [location, setLocation] = useState();
  let [data, setData] = useState();

  let API_KEY = "adcc84b8f19a2982e52ebaf0b680f45a";

  let getWeatherLogics = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`,
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Weather Report Details</h1>
      <input
        type="text"
        placeholder="Enter City Name"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={getWeatherLogics}>Get Weather</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Weather;