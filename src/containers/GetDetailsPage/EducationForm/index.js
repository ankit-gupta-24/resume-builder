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

  const range = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };

  const handleChange = (e, i) => {
    let newArr = education;
    newArr[i][e.target.name] = e.target.value;
    setEducation([...newArr]);
    console.log(e.target.value);
  };
  const genreateExpForm = (i) => {
    return (
      <div className="form-group" key={i}>
        <div className="inputElem">
          <label>Course</label>
          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            onChange={(e) => handleChange(e, i)}
            value={education[i].course}
          />
        </div>
        <div className="inputElem">
          <label>College</label>
          <input
            type="text"
            name="college"
            placeholder="College Name"
            onChange={(e) => handleChange(e, i)}
            value={education[i].college}
          />
        </div>
        <div className="inputElem">
          <label>Time Period</label>
          <input
            type="text"
            name="timeperoid"
            placeholder="e.g. 05/2000 - 10/2005"
            onChange={(e) => handleChange(e, i)}
            value={education[i].timeperiod}
          />
        </div>
        <div className="inputElem">
          <label>
            Achievements Throughout Course (atmost 2 seperated by dollar ($)){" "}
          </label>
          <textarea
            type="text"
            name="achievements"
            placeholder="Achievements Throughout Course like prizes, events, etc."
            onChange={(e) => handleChange(e, i)}
            value={education[i].achievements}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="title">Education</h2>
      {range(count).map((i) => genreateExpForm(i))}
      {count < education.length && (
        <p onClick={() => setCount(count + 1)} className="add-btn">
          Add +
        </p>
      )}
    </>
  );
}

export default EducationForm;
