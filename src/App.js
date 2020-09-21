import React from 'react';
import './App.css';
import Searchbar from "./components/Searchbar";

const api = {
  key: "def6901da7e55d9c50a0b2bcfcfe0550",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {

  function receiveTemperature(temperature) {
    if (temperature !== -273) {
      console.log(temperature);
    }
  }

  return (
    <div className="App cold">
      <main>
        <Searchbar api={api} passDataToParent={receiveTemperature}/>
        <header className="App-header">
        </header>
      </main>
    </div>
  );
}

export default App;
