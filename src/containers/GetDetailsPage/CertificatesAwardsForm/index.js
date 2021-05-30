import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveCertiAwards } from "../../../actions";

function CertificatesAwadsForm(props) {
  const [certAward, setCertAward] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    saveCertiAwards(certAward);
  }, [certAward, dispatch]);

  if (props.step !== 9) {
    return null;
  }
  return (
    <>
      <h2 className="title">Certificates And Awads</h2>
      <div className="inputElem">
        <label>Certificates And Awads (atmost 4 seperated by dollar($))</label>
        <textarea
          type="text"
          name="certAward"
          placeholder="Do you have any certicate or award?"
          onChange={(e) => setCertAward(e.target.value)}
          value={certAward}
        />
      </div>
    </>
  );
}

export default CertificatesAwadsForm;
