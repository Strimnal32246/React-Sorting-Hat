import React from "react";
import gryffindor from "../../../Imgs/Gryffindor.jpeg";
import ravenclaw from "../../../Imgs/ravenclaw.jpeg";
import slytherin from "../../../Imgs/slytherin.jpg";
import hufflepuff from "../../../Imgs/hufflepuff.jpeg";

const Results = props => {
  return (
    <div className="results">
      {props.choices}
      {checker(props.choices)}
    </div>
  );
};

const checker = string => {
  if (string === "Gryffindor") {
    return <img src={gryffindor} />;
  } else if (string === "Ravenclaw") {
    return <img src={ravenclaw} />;
  } else if (string === "Hufflepuff") {
    return <img src={hufflepuff} />;
  } else if (string === "Slytherin") {
    return <img src={slytherin} />;
  }
};
export default Results;
