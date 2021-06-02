import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveEducation } from "../../../actions/";

function EducationForm(props) {
  const [education, setEducation] = useState([
    {
      course: "",
      college: "",
      timeperiod: "",
      achievements: "",
    },
  ]);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveEducation(education));
  }, [dispatch, education]);

  if (props.step !== 4) {
    return null;
  }

  const handleChange = (e, i) => {
    let newArr = [...education];
    newArr[i][e.target.name] = e.target.value;
    setEducation([...newArr]);
  };

  const addField = () => {
    let values = [...education];
    values.push({
      course: "",
      college: "",
      timeperiod: "",
      achievements: "",
    });
    setEducation(values);
    setCount(count + 1);
  };

  const removeField = () => {
    let values = [...education];
    values.pop();
    setEducation(values);
    setCount(count - 1);
  };

  const genreateExpForm = (obj, idx) => {
    return (
      <div className="form-group" key={idx}>
        <div className="inputElem">
          <label>Course</label>
          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            onChange={(e) => handleChange(e, idx)}
            value={obj.course}
          />
        </div>
        <div className="inputElem">
          <label>College</label>
          <input
            type="text"
            name="college"
            placeholder="College Name"
            onChange={(e) => handleChange(e, idx)}
            value={obj.college}
          />
        </div>
        <div className="inputElem">
          <label>Time Period</label>
          <input
            type="text"
            name="timeperoid"
            placeholder="e.g. 05/2000 - 10/2005"
            onChange={(e) => handleChange(e, idx)}
            value={obj.timeperiod}
          />
        </div>
        <div className="inputElem">
          <label>Achievements Throughout Course (atmost 2)</label>
          <textarea
            type="text"
            name="achievements"
            placeholder="Achievements Throughout Course like prizes, events, etc."
            onChange={(e) => handleChange(e, idx)}
            value={obj.achievements}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="title">Education</h2>
      {education.map((obj, idx) => genreateExpForm(obj, idx))}
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

export default EducationForm;
