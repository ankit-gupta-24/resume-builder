import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProfileSummary } from "../../../actions";

function ProfileSummaryForm(props) {
  const [summary, setSummary] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    saveProfileSummary(summary);
  }, [dispatch, summary]);

  if (props.step !== 2) {
    return null;
  }
  return (
    <>
      <h2 className="title">Profile Summary</h2>
      <div className="inputElem">
        <label>Summary (max 400 characters)</label>
        <textarea
          type="text"
          name="summary"
          placeholder="Express your professional summary, expertise etc."
          onChange={(e) => setSummary(e.target.value)}
          value={summary}
        />
      </div>
    </>
  );
}

export default ProfileSummaryForm;
