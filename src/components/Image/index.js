import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setResumeFormat } from "../../actions";

function Image(props) {
  const dispatch = useDispatch();

  return (
    <NavLink
      className="imgWrapper"
      to={`/format/${props.format}`}
      onClick={() => dispatch(setResumeFormat(props.format))}
    >
      <img src={props.src} alt={props.src} />
    </NavLink>
  );
}

export default Image;
