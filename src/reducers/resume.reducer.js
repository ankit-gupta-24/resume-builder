import { resumeConstants } from "../actions/constants";

const initialState = {
  format: null,
  personalDetails: {},
  profileSummary: "",
  experience: [],
  education: [],
  skills: [],
  personalProjects: [],
  languages: [],
  volunteerWork: "",
  certiAwards: [],
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case resumeConstants.RESUME_FORMAT:
      state = {
        ...state,
        format: action.payload.format,
      };
      break;
    case resumeConstants.PERSONAL_DETAILS:
      state = {
        ...state,
        personalDetails: action.payload.data,
      };
      break;
    case resumeConstants.PROFILE_SUMMARY:
      state = {
        ...state,
        profileSummary: action.payload.data,
      };
      break;
    case resumeConstants.EXPERIENCE:
      state = {
        ...state,
        experience: action.payload.data,
      };
      break;
    case resumeConstants.EDUCATION:
      state = {
        ...state,
        education: action.payload.data,
      };
      break;
    case resumeConstants.SKILLS:
      state = {
        ...state,
        skills: action.payload.data,
      };
      break;
    case resumeConstants.PERSONAL_PROJECTS:
      state = {
        ...state,
        personalProjects: action.payload.data,
      };
      break;
    case resumeConstants.LANGUAGES:
      state = {
        ...state,
        languages: action.payload.data,
      };
      break;
    case resumeConstants.VOLUNTEER_WORK:
      state = {
        ...state,
        volunteerWork: action.payload.data,
      };
      break;
    case resumeConstants.CERTI_AND_AWARDS:
      state = {
        ...state,
        certiAwards: action.payload.data,
      };
      break;

    default:
      break;
  }
  return state;
};

export default resumeReducer;
