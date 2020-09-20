import React, {useState} from "react";
import "../App.css";

function Searchbar() {

  const [query, setQuery] = useState("");

  const searchLocalisation = evt => {
    if (evt.key === "Enter") {
      console.log(query);
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