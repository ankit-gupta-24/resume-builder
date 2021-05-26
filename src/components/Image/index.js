import React from "react";

function Image(props) {
  return (
    <div className="imgWrapper">
      <img src={props.src} alt={props.src} />
    </div>
  );
}

export default Image;
