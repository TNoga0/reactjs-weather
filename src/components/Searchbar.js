import React, {useState, useEffect, useContext} from "react";
import "../App.css";
import {weatherContext} from "../App";

function Searchbar(props) {

  const [query, setQuery] = useState("");
  const [locationData, setData] = useState(-273);

  const { setWeatherData } = useContext(weatherContext);
  useEffect(() => {setWeatherData(locationData)}, [locationData]);

  const searchLocalisation = evt => {
    if (evt.key === "Enter") {
      fetch(`${props.api.base}weather?q=${query}&appid=${props.api.key}`)
        .then(response => response.json())
        .then(data => {setData({
          temperature: (data.main.temp - 273.15).toFixed(0),
          location: data.name + ", " +  data.sys.country,
          overall: data.weather[0].main,
        })
      })
    }
  };

  return(
    <div className="Searchbar">
      <input
        id="localisation"
        type="search"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        onKeyPress={searchLocalisation}
      />
    </div>
  );
}

export default Searchbar;