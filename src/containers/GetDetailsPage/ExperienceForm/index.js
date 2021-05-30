import React, { useState, useEffect } from "react";
import { saveExperience } from "../../../actions/";
import { useDispatch } from "react-redux";

function ExperienceForm(props) {
  const [experience, setExperience] = useState([
    {
      designation: "",
      company: "",
      timeperiod: "",
      rolesAndResponsibilities: "",
    },
    {
      designation: "",
      company: "",
      timeperiod: "",
      rolesAndResponsibilities: "",
    },
  ]);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    saveExperience(experience);
  }, [dispatch, experience]);

  if (props.step !== 3) {
    return null;
  }

  const range = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };

  const handleChange = (e, i) => {
    let newArr = experience;
    newArr[i][e.target.name] = e.target.value;
    setExperience([...newArr]);
  };
  const genreateExpForm = (i) => {
    return (
      <div className="form-group" key={i}>
        <div className="inputElem">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            placeholder="Enter Designation"
            onChange={(e) => handleChange(e, i)}
            value={experience[i].designation}
          />
        </div>
        <div className="inputElem">
          <label>Company</label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={(e) => handleChange(e, i)}
            value={experience[i].company}
          />
        </div>
        <div className="inputElem">
          <label>Time Period</label>
          <input
            type="text"
            name="timeperoid"
            placeholder="e.g. 05/2000 - 10/2005"
            onChange={(e) => handleChange(e, i)}
            value={experience[i].timeperoid}
          />
        </div>
        <div className="inputElem">
          <label>
            Roles and Responsibilities (atmost 3 seperated by dollar ($))
          </label>
          <textarea
            type="text"
            name="rolesAndResponsibilities"
            placeholder="Tasks you have performed there"
            onChange={(e) => handleChange(e, i)}
            value={experience[i].rolesAndResponsibilities}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="title">Experience</h2>
      {range(count).map((i) => genreateExpForm(i))}
      {count < experience.length && (
        <p onClick={() => setCount(count + 1)} className="add-btn">
          Add +
        </p>
      )}
    </>
  );
}

export default ExperienceForm;
