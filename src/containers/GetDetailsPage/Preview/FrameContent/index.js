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
  }
  render() {
    return (
      <>
        <div ref={this.props.reference}>
          <link
            rel="stylesheet"
            href={`${process.env.PUBLIC_URL}/css/format${this.props.resume.format}.css`}
          />
          <header>
            <div>
              <h1>{this.props.resume.personalDetails.name}</h1>
              <h4>
                {Number(this.props.resume.format) !== 3
                  ? this.props.resume.personalDetails.positionOfResponsibility
                  : ""}
              </h4>
            </div>
            <div>
              <h3>Personal Info</h3>
              <hr />
              <p>
                <b>Email: </b> {this.props.resume.personalDetails.email}
              </p>
              <p>
                <b>Phone: </b> {this.props.resume.personalDetails.mobile}
              </p>
              <p>
                <b>Address: </b> {this.props.resume.personalDetails.address}
              </p>
              {this.props.resume.personalDetails.linkedin &&
              [1, 4].includes(Number(this.props.resume.format)) ? (
                <p>
                  <b>LinkedIn: </b> {this.props.resume.personalDetails.linkedin}
                </p>
              ) : (
                ""
              )}
              {this.props.resume.personalDetails.github ? (
                <p>
                  <b>GitHub: </b> {this.props.resume.personalDetails.github}
                </p>
              ) : (
                ""
              )}
              {[1, 4].includes(Number(this.props.resume.format)) &&
              this.props.resume.personalDetails.twitter ? (
                <p>
                  <b>Twitter: </b> {this.props.resume.personalDetails.twitter}
                </p>
              ) : (
                ""
              )}
            </div>
          </header>

          <div>
            <h3>
              {[2, 3, 5].includes(Number(this.props.resume.format))
                ? "Profile"
                : ""}
            </h3>
            <hr />
            <p>{this.props.resume.profileSummary}</p>
          </div>

          <div>
            <h3>Experience</h3>
            <hr />

            {this.props.resume.experience.map((exp) => {
              if (!exp.designation) {
                return null;
              }
              return (
                <div>
                  <h4>{exp.designation}</h4>
                  <i>{exp.company}</i>
                  <small>{exp.timeperiod}</small>
                  <small>{exp.rolesAndResponsibilities}</small>
                </div>
              );
            })}
          </div>

          <div>
            <h3>Education</h3>
            <hr />
            {this.props.resume.education.map((edu) => {
              if (!edu.course) {
                return null;
              }
              return (
                <div>
                  <h4>{edu.course}</h4>
                  <i>{edu.college}</i>
                  <small>{edu.timeperiod}</small>
                  <small>{edu.achievements}</small>
                </div>
              );
            })}
          </div>

          <div>
            <h3>Skills</h3>
            <hr />

            {this.props.resume.skills.map((obj) => {
              if (!obj.skill) {
                return null;
              }
              let value = level[obj.level];
              return (
                <>
                  <p>{obj.skill}</p>
                  <progress value={Number(value)} min="0" max="100"></progress>
                </>
              );
            })}
          </div>

          {Number(this.props.resume.format) === 2 ? (
            <div>
              <h3>Personal Projects</h3>
              <hr />
              {this.props.resume.personalProjects.map((obj) => {
                if (!obj.title) {
                  return null;
                }

                return (
                  <div>
                    <p>
                      <b>{obj.title}</b>
                    </p>
                    <p>{obj.details}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {Number(this.props.resume.format) === 3 ? (
            <div>
              <h3>Languages</h3>
              <hr />
              {this.props.resume.languages.map((name) => (
                <p>{name}</p>
              ))}
            </div>
          ) : (
            ""
          )}
          {Number(this.props.resume.format) === 2 ? (
            <div>
              <h3>Volunteer Work</h3>
              <hr />
              {this.props.resume.volunteerWork}
            </div>
          ) : (
            ""
          )}

          {[1, 3, 4].includes(Number(this.props.resume.format)) ? (
            <div>
              <h3>Certificates and Awards</h3>
              <hr />
              <ul>
                {this.props.resume.certiAwards.map(
                  (item) => item && <li>{item.trim()}</li>
                )}
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
