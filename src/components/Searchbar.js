import React, {useState, useEffect} from "react";
import "../App.css";

function Searchbar(props) {

  const [query, setQuery] = useState("");
  const [locationTemperature, setTemperature] = useState(-273);

  useEffect(() => {passData()}, [locationTemperature]);

  function passData(){
    props.passDataToParent(locationTemperature);
  }

  const searchLocalisation = evt => {
    if (evt.key === "Enter") {
      fetch(`${props.api.base}weather?q=${query}&appid=${props.api.key}`)
        .then(response => response.json())
        .then(data => {setTemperature((data.main.temp - 273.15).toFixed(0))})
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