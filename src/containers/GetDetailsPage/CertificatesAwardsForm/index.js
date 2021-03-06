import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveCertiAwards } from "../../../actions";

function CertificatesAwadsForm(props) {
  const [certAward, setCertAward] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveCertiAwards(certAward.split("\n")));
  }, [certAward, dispatch]);

  if (props.step !== 9) {
    return null;
  }
  return (
    <>
      <h2 className="title">Certificates And Awards</h2>
      <div className="inputElem">
        <label>Certificates And Awards (atmost 4)</label>
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
