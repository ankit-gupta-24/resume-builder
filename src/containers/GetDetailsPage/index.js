import React, { useState } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import LanguagesForm from "./LanguagesForm";
import CertificatesAwardsForm from "./CertificatesAwardsForm";
import PersonalProjectsForm from "./PersonalProjectsForm";
import ProfileSummaryForm from "./ProfileSummaryForm";
import SkillsForm from "./SkillsForm";
import VolunteerWorkForm from "./VolunteerWorkForm";
import StatusBar from "../../components/StatusBar";
import { NavLink } from "react-router-dom";
import "../../assets/scss/form.scss";

function GetDetailsPage(props) {
  const [step, setStep] = useState(1);

  const prev = () => {
    setStep(step - 1);
  };

  const next = () => {
    setStep(step + 1);
  };

  const getPrevButton = () => {
    if (step < 2) {
      return null;
    }
    return <button onClick={prev}>Prev</button>;
  };
  const getNextButton = () => {
    if (step > 8) {
      return <NavLink to="/preview" className="print-btn" >Print</NavLink>;
    }
    return <button onClick={next}>Next</button>;
  };

  return (
    <div className="form">
      <StatusBar completedSteps={step} setStep={setStep} />
      <div className="form-content">
        <PersonalDetailsForm step={step} />
        <ProfileSummaryForm step={step} />
        <ExperienceForm step={step} />
        <EducationForm step={step} />
        <SkillsForm step={step} />
        <PersonalProjectsForm step={step} />
        <LanguagesForm step={step} />
        <VolunteerWorkForm step={step} />
        <CertificatesAwardsForm step={step} />

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {getPrevButton()}
          {getNextButton()}
        </div>
      </div>
    </div>
  );
}

export default GetDetailsPage;
