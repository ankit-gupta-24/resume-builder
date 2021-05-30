import React, { useState } from "react";

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

  if (props.step !== 1) {
    return null;
  }

  const handleChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <h2 className="title">Personal Details</h2>
      <div className="form-row">
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div>
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
      <div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={state.email}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Position Of Responsibility or Area Of Interest</label>
          <input
            type="text"
            name="positionOfResponsibility"
            placeholder="Enter Position Of Responsibility or Area Of Interest"
            onChange={handleChange}
            value={state.positionOfResponsibility}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            onChange={handleChange}
            value={state.address}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Linkedin URL</label>
          <input
            type="text"
            name="linkedin"
            placeholder="Enter LinkedIn URL"
            onChange={handleChange}
            value={state.linkedin}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Twitter URL</label>
          <input
            type="text"
            name="twitter"
            placeholder="Enter Twitter URL"
            onChange={handleChange}
            value={state.twitter}
          />
        </div>
      </div>
      <div>
        <div>
          <label>GitHub URL</label>
          <input
            type="text"
            name="github"
            placeholder="Enter GitHub URL"
            onChange={handleChange}
            value={state.github}
          />
        </div>
      </div>
    </>
  );
}

export default PersonalDetailsForm;
