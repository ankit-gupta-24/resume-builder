import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { savePersonalDetails } from "../../../actions/";

function PersonalDetailsForm(props) {
  const [state, setState] = useState({
    name: "",
    positionOfResponsibility: "",
    email: "",
    mobile: "",
    address: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    dispatch(savePersonalDetails(state));
  }, [state, dispatch]);

  if (props.step !== 1) {
    return null;
  }

  return (
    <>
      <h2 className="title">Personal Details</h2>
      <div className="form-row">
        <div className="inputElem">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div className="inputElem">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            onChange={handleChange}
            value={state.mobile}
            inputMode="numeric"
          />
        </div>
      </div>

      <div className="inputElem">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={state.email}
        />
      </div>

      <div className="inputElem">
        <label>Position Of Responsibility or Area Of Interest</label>
        <input
          type="text"
          name="positionOfResponsibility"
          placeholder="Enter Position Of Responsibility or Area Of Interest"
          onChange={handleChange}
          value={state.positionOfResponsibility}
        />
      </div>

      <div className="inputElem">
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          onChange={handleChange}
          value={state.address}
        />
      </div>

      <div className="inputElem">
        <label>Linkedin URL</label>
        <input
          type="text"
          name="linkedin"
          placeholder="Enter LinkedIn URL"
          onChange={handleChange}
          value={state.linkedin}
        />
      </div>

      <div className="inputElem">
        <label>Twitter URL</label>
        <input
          type="text"
          name="twitter"
          placeholder="Enter Twitter URL"
          onChange={handleChange}
          value={state.twitter}
        />
      </div>

      <div className="inputElem">
        <label>GitHub URL</label>
        <input
          type="text"
          name="github"
          placeholder="Enter GitHub URL"
          onChange={handleChange}
          value={state.github}
        />
      </div>
    </>
  );
}

export default PersonalDetailsForm;
