import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { savePersonalProjects } from "../../../actions/";

function PersonalProjectsForm(props) {
  const [projects, setProjects] = useState([
    {
      title: "",
      detail: "",
    },
  ]);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(savePersonalProjects(projects));
  }, [dispatch, projects]);

  if (props.step !== 6) {
    return null;
  }

  const handleChange = (e, i) => {
    let newArr = [...projects];
    newArr[i][e.target.name] = e.target.value;
    setProjects([...newArr]);
  };

  const addField = () => {
    let values = [...projects];
    values.push({
      title: "",
      detail: "",
    });
    setProjects(values);
    setCount(count + 1);
  };

  const removeField = () => {
    let values = [...projects];
    values.pop();
    setProjects(values);
    setCount(count - 1);
  };

  const genreateExpForm = (obj, i) => {
    return (
      <div className="form-group" key={i}>
        <div className="inputElem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={(e) => handleChange(e, i)}
            value={obj.title}
          />
        </div>

        <div className="inputElem">
          <label>Details</label>
          <textarea
            type="text"
            name="details"
            placeholder="Project Description"
            onChange={(e) => handleChange(e, i)}
            value={obj.achievements}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="title">Personal Projects</h2>
      {projects.map((obj, idx) => genreateExpForm(obj, idx))}
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

export default PersonalProjectsForm;
