import React, {useState} from "react";
import "../App.css";

function Searchbar(props) {

  const [query, setQuery] = useState("");

  const searchLocalisation = evt => {
    if (evt.key === "Enter") {
      fetch(`${props.api.base}weather?q=Krakow&appid=${props.api.key}`)
        .then(response => response.json())
        .then(data => console.log(data));
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