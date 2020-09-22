import React, {useState} from 'react';
import './App.css';
import Searchbar from "./components/Searchbar";
import Result from "./components/Result";

const api = {
  key: "def6901da7e55d9c50a0b2bcfcfe0550",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {

  const [weatherData, setWeatherData] = useState({});

  return (
    <div className="App cold">
      <main>
        <Searchbar api={api} passDataToParent={setWeatherData}/>
        {weatherData.location !== "" &&
        <Result data={weatherData}/>
        }
      </main>
    </div>
  );
}

export default App;
