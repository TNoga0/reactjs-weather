import React, {useContext, useEffect, useState} from "react";
import "../App.css";
import {weatherContext} from "../App";

function Result() {

  const { weatherData } = useContext(weatherContext);

  return(
    <div className="Result">
      <div className="Location">
        {weatherData.location}
      </div>
      {Object.keys(weatherData).length !== 0 &&
        <div className="Temperature">
          {weatherData.temperature + "\u00B0C"}
        </div>
      }
      <div className="Overall">
        {weatherData.overall}
      </div>
    </div>
  );

}

export default Result;
