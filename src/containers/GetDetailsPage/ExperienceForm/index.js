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
  ]);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveExperience([...experience]));
  }, [dispatch, experience]);

  if (props.step !== 3) {
    return null;
  }

  const handleChange = (e, i) => {
    let newArr = [...experience];
    newArr[i][e.target.name] = e.target.value;
    setExperience([...newArr]);
  };

  const addField = () => {
    let values = [...experience];
    values.push({
      designation: "",
      company: "",
      timeperiod: "",
      rolesAndResponsibilities: "",
    });
    setExperience(values);
    setCount(count + 1);
  };

  const removeField = () => {
    let values = [...experience];
    values.pop();
    setExperience(values);
    setCount(count - 1);
  };

  const genreateExpForm = (obj, idx) => {
    return (
      <div className="form-group" key={idx}>
        <div className="inputElem">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            placeholder="Enter Designation"
            onChange={(e) => handleChange(e, idx)}
            value={obj.designation}
          />
        </div>
        <div className="inputElem">
          <label>Company</label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={(e) => handleChange(e, idx)}
            value={obj.company}
          />
        </div>
        <div className="inputElem">
          <label>Time Period</label>
          <input
            type="text"
            name="timeperiod"
            placeholder="e.g. 05/2000 - 10/2005"
            onChange={(e) => handleChange(e, idx)}
            value={obj.timeperiod}
          />
        </div>
        <div className="inputElem">
          <label>Roles and Responsibilities (atmost 2)</label>
          <textarea
            name="rolesAndResponsibilities"
            placeholder="Tasks you have performed there"
            onChange={(e) => handleChange(e, idx)}
            value={obj.rolesAndResponsibilities}
            rows={3}
            cols={100}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="title">Experience</h2>
      {/* {range(count).map((i) => genreateExpForm(i))} */}
      {experience.map((obj, idx) => genreateExpForm(obj, idx))}
      {count < 2 && (
        <p onClick={addField} className="add-btn">
          Add +
        </p>
      )}
      {count > 1 && (
        <p onClick={removeField} className="remove-btn">
          Remove -
        </p>
      )}
    </>
  );
}

export default ExperienceForm;
