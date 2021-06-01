import { resumeConstants } from "./constants";

export const savePersonalDetails = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.PERSONAL_DETAILS,
      payload: { data },
    });
  };
};

export const saveProfileSummary = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.PROFILE_SUMMARY,
      payload: { data },
    });
  };
};

export const saveExperience = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.EXPERIENCE,
      payload: { data },
    });
  };
};

export const saveEducation = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.EDUCATION,
      payload: { data },
    });
  };
};

export const saveSkills = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.SKILLS,
      payload: { data },
    });
  };
};

export const savePersonalProjects = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.PERSONAL_PROJECTS,
      payload: { data },
    });
  };
};

export const saveLanguages = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.LANGUAGES,
      payload: { data },
    });
  };
};

export const saveVolunteerWork = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.VOLUNTEER_WORK,
      payload: { data },
    });
  };
};

export const saveCertiAwards = (data) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.CERTI_AND_AWARDS,
      payload: { data },
    });
  };
};

export const setResumeFormat = (number) => {
  return async (dispatch) => {
    dispatch({
      type: resumeConstants.RESUME_FORMAT,
      payload: { format: number },
    });
  };
};
