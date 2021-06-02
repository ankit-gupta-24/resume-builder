import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveSkills } from "../../../actions/";

function SkillsForm(props) {
  const [skills, setSkills] = useState([
    {
      skill: "",
      level: "",
    },
  ]);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveSkills(skills));
  }, [dispatch, skills]);

  if (props.step !== 5) {
    return null;
  }

  const handleChange = (e, i) => {
    let newArr = [...skills];
    newArr[i][e.target.name] = e.target.value;
    setSkills([...newArr]);
  };

  const addField = () => {
    let values = [...skills];
    values.push({
      skill: "",
      level: "",
    });
    setSkills(values);
    setCount(count + 1);
  };

  const removeField = (i) => {
    let values = [...skills];
    values.splice(i, 1);
    setSkills(values);
    setCount(count - 1);
  };

  const genreateExpForm = (obj, i) => {
    return (
      <div className="form-row" key={i}>
        <div className="inputElem">
          <label>Skill</label>
          <input
            type="text"
            name="skill"
            placeholder="e.g.Python"
            onChange={(e) => handleChange(e, i)}
            value={obj.skill}
          />
        </div>

        <div className="inputElem">
          <label>Level</label>
          <input
            type="text"
            name="level"
            value={obj.level}
            list="data"
            onChange={(e) => handleChange(e, i)}
          />
          <datalist id="data">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </datalist>
          {count >1 && (
            <p onClick={() => removeField(i)} className="remove-btn">
              Remove -
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="title">Skills</h2>
      {skills.map((obj, idx) => genreateExpForm(obj, idx))}
      {count < 5 && (
        <p onClick={addField} className="add-btn">
          Add +
        </p>
      )}
    </>
  );
}
export default SkillsForm;
