import React, {useEffect, useState} from "react";
import "../App.css";

function Result(props) {

  useEffect(() => {console.log(props.data)}, [props.data]);

  return(
    <div className="Result">
      <div className="Location">
        <h2>
          {props.data.temperature}
        </h2>
      </div>
    </div>
  );

}

export default Result;
