import React from "react";

const level = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

export class FrameContent extends React.Component {
  constructor(props) {
    super(props);
    require(`../../../../assets/scss/resume/format${this.props.resume.format}.scss`);
  }
  render() {
    let {
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
    } = this.props.resume;

    format = Number(format);

    return (
      <>
        <div
          ref={this.props.reference}
          className={`resume-container-f${format}`}
        >
          <header className={`resume-header-f${format}`}>
            <div>
              <h1 className={`h1-f${format}`}>{personalDetails.name}</h1>
              <h4 className={`h4-f${format}`}>
                {format !== 3 ? personalDetails.positionOfResponsibility : ""}
              </h4>
            </div>
            <div>
              <div>
                <p>
                  {[1, 3, 4].includes(format) && <b>E-mail: &nbsp;&nbsp;</b>}
                  {personalDetails.email}
                </p>
                <p>
                  {[1, 3, 4].includes(format) && <b>Phone: &nbsp;&nbsp;</b>}
                  {personalDetails.mobile}
                </p>
                <p>
                  {[1, 3, 4].includes(format) && <b>Address: &nbsp;&nbsp;</b>}
                  {personalDetails.address}
                </p>
              </div>
              <div>
                {personalDetails.linkedin && [1, 4].includes(format) ? (
                  <p>
                    <b>LinkedIn: </b>&nbsp;&nbsp; {personalDetails.linkedin}
                  </p>
                ) : (
                  ""
                )}
                {personalDetails.github ? (
                  <p>
                    <b>GitHub: </b>&nbsp;&nbsp; {personalDetails.github}
                  </p>
                ) : (
                  ""
                )}
                {[1, 4].includes(format) && personalDetails.twitter ? (
                  <p>
                    <b>Twitter: </b>&nbsp;&nbsp; {personalDetails.twitter}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </header>

          <div className={`profile-f${format}`}>
            <h3 className={`h3-f${format}`}>
              {[2, 3, 5].includes(format) ? "Profile" : ""}
            </h3>
            <p>{profileSummary}</p>
          </div>

          <div className={`experience-f${format}`}>
            <h3 className={`h3-f${format}`}>Experience</h3>
            {experience.map((exp, idx) => {
              if (!exp.designation) {
                return null;
              }
              return (
                <div className={`exp-block-f${format}`} key={idx}>
                  <h4 className={`h4-f${format}`}>{exp.designation}</h4>
                  <p>
                    <i>{exp.company}</i>
                  </p>
                  <p>
                    <small className={`exp-time-f${format}`}>
                      {exp.timeperiod}
                    </small>
                  </p>
                  <ul>
                    {exp.rolesAndResponsibilities
                      .split("\n")
                      .map((item, idx) => {
                        if (idx > 1) return null;

                        return <li key={idx}>{item.trim()}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className={`education-f${format}`}>
            <h3 className={`h3-f${format}`}>Education</h3>
            {education.map((edu) => {
              if (!edu.course) {
                return null;
              }
              return (
                <div className={`edu-block-f${format}`}>
                  <h4 className={`h4-f${format}`}>{edu.course}</h4>
                  <p>
                    <i>{edu.college}</i>
                  </p>
                  <p className={`edu-time-f${format}`}>
                    <small>{edu.timeperiod}</small>
                  </p>
                  <ul>
                    {edu.achievements.split("\n").map((item, idx) => {
                      if (idx > 1) return null;

                      return <li key={idx}>{item.trim()}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className={`skills-f${format}`}>
            <h3 className={`h3-f${format}`}>Skills</h3>

            {skills.map((obj) => {
              if (!obj.skill) {
                return null;
              }
              let value = level[obj.level];
              return (
                <div>
                  <span>
                    <b>{obj.skill}</b>
                  </span>
                  {[1, 4, 5].includes(format) && (
                    <progress
                      value={Number(value)}
                      min="0"
                      max="100"
                    ></progress>
                  )}
                </div>
              );
            })}
          </div>

          {format === 2 ? (
            <div className={`personal-projects-f${format}`}>
              <h3 className={`h3-f${format}`}>Personal Projects</h3>
              {personalProjects.map((obj) => {
                if (!obj.title) {
                  return null;
                }

                return (
                  <div>
                    <p>
                      <b>{obj.title}</b>
                    </p>
                    <p>{obj.detail}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {format === 3 ? (
            <div className={`languages-f${format}`}>
              <h3 className={`h3-f${format}`}>Languages</h3>
              {languages.map((name) => (
                <p>{name}</p>
              ))}
            </div>
          ) : (
            ""
          )}
          {format === 2 ? (
            <div className={`volunteer-work-f${format}`}>
              <h3 className={`h3-f${format}`}>Volunteer Work</h3>
              <p>{volunteerWork}</p>
            </div>
          ) : (
            ""
          )}

          {[1, 3, 4].includes(format) ? (
            <div className={`certi-f${format}`}>
              <h3 className={`h3-f${format}`}>Certificates and Awards</h3>
              <ul>
                {certiAwards.map((item) => item && <li>{item.trim()}</li>)}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default FrameContent;
