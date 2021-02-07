import ApiReq from "../middleware/index";
import * as Actions from "../reducers/signUp";

export const SignUpForm = (data) => async (dispatch) => {
  const req = {
    method: "POST",
    url: "https://naukritube-v3-dev.herokuapp.com/v1/api/auth/recruiter/signup",
    data
  };

  const response = await ApiReq(req);
  dispatch(Actions.signUp(response));

  return response;
};
