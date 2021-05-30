import React from "react";
import { NavLink } from "react-router-dom";

function Image(props) {
  return (
    <NavLink className="imgWrapper" to={`/format/${props.format}`}>
      <img src={props.src} alt={props.src} />
    </NavLink>
  );
}

export default Image;
