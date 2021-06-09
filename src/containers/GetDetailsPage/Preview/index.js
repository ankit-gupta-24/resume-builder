import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import FrameContent from "./FrameContent";

function Preview(props) {
  const resume = useSelector((state) => state.resume);
  const printCompRef = useRef();

  if (props.step !== 10) {
    return null;
  }

  return (
    <div>
      <ReactToPrint
        trigger={() => <button className="print-btn">Print</button>}
        content={() => printCompRef.current}
      />
      <FrameContent resume={resume} reference={printCompRef} />
    </div>
  );
}

export default Preview;
