import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveVolunteerWork } from "../../../actions/";

function VolunteerWorkForm(props) {
  const [volunteerWork, setVolunteerWork] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveVolunteerWork(volunteerWork));
  }, [dispatch, volunteerWork]);

  if (props.step !== 8) {
    return null;
  }
  return (
    <>
      <h2 className="title">Volunteer Work</h2>
      <div className="inputElem">
        <label>Volunteer Work (max 400 characters)</label>
        <textarea
          type="text"
          name="volunteerWork"
          placeholder="Have you volunteered in any event, orgranization etc.?"
          onChange={(e) => setVolunteerWork(e.target.value)}
          value={volunteerWork}
        />
      </div>
    </>
  );
}

export default VolunteerWorkForm;
