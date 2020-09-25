import React, {createContext, useState} from 'react';
import './App.css';
import Searchbar from "./components/Searchbar";
import Result from "./components/Result";

const api = {
  key: "def6901da7e55d9c50a0b2bcfcfe0550",
  base: "https://api.openweathermap.org/data/2.5/"
};

export const weatherContext = createContext({});

function App() {

  const [weatherData, setWeatherData] = useState({});

  const { Provider } = weatherContext;

  return (
    <Provider value={{ weatherData, setWeatherData }}>
      <div className={(typeof weatherData.temperature != "undefined") ? ((weatherData.temperature > 16) ? "App warm" : "App") : "App"}>
        <main>
          <Searchbar api={api} />
          {weatherData.location !== "" &&
          <Result />
          }
        </main>
      </div>
    </Provider>
  );
}

export default App;
