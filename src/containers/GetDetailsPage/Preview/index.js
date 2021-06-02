import React from "react";

const level = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

function Preview(props) {
  const {
    format,
    personalDetails,
    profileSummary,
    experience,
    education,
    skills,
    personalProjects,
    languages,
    volunteerWork,
    certiAwards,
  } = window.store.getState().resume;

  const srcDoc = `
  <html>
  <head>
   <link rel="stylesheet" href=${
     process.env.PUBLIC_URL + "/css/format" + format + ".css"
   }
  </head>

  <body>
    <header>
      <div>
        <h1>${personalDetails.name}</h1>
        <h4>${personalDetails.positionOfResponsibility}</h4>
      </div>
      <div>
        <h3>Personal Info</h3>
        <hr />
        <p><b>Email: </b> ${personalDetails.email} </p>
        <p><b>Phone: </b> ${personalDetails.mobile} </p>
        <p><b>Address: </b> ${personalDetails.address} </p>
        <p><b>LinkedIn: </b> ${personalDetails.linkedin} </p>
        ${
          personalDetails.github && (
            <p>
              <b>GitHub: </b> ${personalDetails.github}{" "}
            </p>
          )
        }
        ${
          personalDetails.twitter && (
            <p>
              <b>Twitter: </b> ${personalDetails.twitter}{" "}
            </p>
          )
        }
      </div>
    </header>

    <div>
      <h3>Profile</h3>
      <hr />
      <p>
        ${profileSummary}
      </p>
    </div>

    <div>
      <h3>Experience</h3>
      <hr />

      ${experience.map((exp) => {
        if (!exp.designation) {
          return null;
        }
        return `<div >
            <h4>${exp.designation}</h4>
            <i>${exp.company}</i>
            <small>${exp.timeperiod}</small>
            <small>${exp.rolesAndResponsibilities}</small>
          </div>`;
      })}
      
    </div>

    <div>
      <h3>Education</h3>
      <hr />
      ${education.map((edu) => {
        if (!edu.course) {
          return null;
        }
        return `<div >
            <h4>${edu.course}</h4>
            <i>${edu.college}</i>
            <small>${edu.timeperiod}</small>
            <small>${edu.achievements}</small>
          </div>`;
      })}
      
    </div>

    <div>
      <h3>Skills</h3>
      <hr />

      ${skills.map((obj) => {
        if (!obj.skill) {
          return null;
        }
        let value = level[obj.level];
        return `<p>${obj.skill}</p>
        <progress value=${Number(value)} min="0" max="100"></progress>`;
      })}
    </div>

    <div>
      <h3>Personal Projects</h3>
      <hr />

      ${personalProjects.map((obj) => {
        if (!obj.title) {
          return null;
        }

        return `<div><p><b>${obj.title}</b></p>
        <p>${obj.details}</p></div>`;
      })}
      

    <div>
      <h3>Languages</h3>
      <hr />
      ${languages.map((name) => `<p>${name}</p>`)}
    </div>

    <div>
      <h3>Volunteer Work</h3>
      <hr />
      ${volunteerWork}
    </div>

    <div>
      <h3>Certificates and Awards</h3>
      <hr/>
      <ul>
        ${certiAwards.map((item) => item && `<li>${item.trim()}</li>`)}
      </ul>
    </div>
  </body>
</html>`;

  if (props.step !== 10) {
    return null;
  }

  return (
    <>
      <iframe
        srcDoc={srcDoc}
        width="768"
        height="450"
        id="resumeFrame"
        title={personalDetails.name + "'s Resume"}
      />
    </>
  );
}

export default Preview;
