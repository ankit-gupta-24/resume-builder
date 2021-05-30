import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveLanguages } from "../../../actions/";

function LanguagesForm(props) {
  const [languages, setLanguages] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    saveLanguages(languages);
  }, [dispatch, languages]);

  if (props.step !== 7) {
    return null;
  }
  return (
    <>
      <h2 className="title">Languages</h2>
      <div className="inputElem">
        <label>Languages (atmost 3 seperated by comma (,))</label>
        <input
          type="text"
          placeholder="e.g. hindi, english"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />
      </div>
    </>
  );
}

export default LanguagesForm;
