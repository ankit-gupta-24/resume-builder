import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveSkills } from "../../../actions/";

function SkillsForm(props) {
  const [skills, setSkills] = useState([
    {
      skill: "",
      level: "",
    },
    {
      skill: "",
      level: "",
    },
    {
      skill: "",
      level: "",
    },
    {
      skill: "",
      level: "",
    },
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

  const range = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };

  const handleChange = (e, i) => {
    let newArr = skills;
    newArr[i][e.target.name] = e.target.value;
    setSkills([...newArr]);
    console.log(e.target.value);
  };

  const genreateExpForm = (i) => {
    return (
      <div className="form-row" key={i}>
        <div className="inputElem">
          <label>Skill</label>
          <input
            type="text"
            name="skill"
            placeholder="e.g.Python"
            onChange={(e) => handleChange(e, i)}
            value={skills[i].skill}
          />
        </div>

        <div className="inputElem">
          <label>Level</label>
          <input
            type="text"
            name="level"
            value={skills[i].level}
            list="data"
            onChange={(e) => handleChange(e, i)}
          />
          <datalist id="data">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </datalist>
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="title">Skills</h2>
      {range(count).map((i) => genreateExpForm(i))}
      {count < skills.length && (
        <p onClick={() => setCount(count + 1)} className="add-btn">
          Add +
        </p>
      )}
    </>
  );
}
export default SkillsForm;
