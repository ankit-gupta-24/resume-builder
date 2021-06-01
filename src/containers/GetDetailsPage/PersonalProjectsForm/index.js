import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { savePersonalProjects } from "../../../actions/";

function PersonalProjectsForm(props) {
  const [projects, setProjects] = useState([
    {
      title: "",
      detail: "",
    },
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

  const range = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };

  const handleChange = (e, i) => {
    let newArr = projects;
    newArr[i][e.target.name] = e.target.value;
    setProjects([...newArr]);
    console.log(e.target.value);
  };
  const genreateExpForm = (i) => {
    return (
      <div className="form-group" key={i}>
        <div className="inputElem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={(e) => handleChange(e, i)}
            value={projects[i].title}
          />
        </div>

        <div className="inputElem">
          <label>Details</label>
          <textarea
            type="text"
            name="details"
            placeholder="Project Description"
            onChange={(e) => handleChange(e, i)}
            value={projects[i].achievements}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="title">Personal Projects</h2>
      {range(count).map((i) => genreateExpForm(i))}
      {count < projects.length && (
        <p onClick={() => setCount(count + 1)} className="add-btn">
          Add +
        </p>
      )}
    </>
  );
}

export default PersonalProjectsForm;
