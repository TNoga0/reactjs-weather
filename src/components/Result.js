import React, {useEffect, useState} from "react";
import "../App.css";

function Result(props) {

  useEffect(() => {console.log(props.data)}, [props.data]);

  return(
    <div className="Result">
      <div className="Location">
        {props.data.location}
      </div>
      {Object.keys(props.data).length !== 0 &&
        <div className="Temperature">
          {props.data.temperature + "\u00B0C"}
        </div>
      }
      <div className="Overall">
        {props.data.overall}
      </div>
    </div>
  );

}

export default Result;
