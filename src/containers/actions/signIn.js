import ApiReq from "../middleware/index";
import * as Actions from "../reducers/signIn";

export const SignInForm = (data) => async (dispatch) => {
  const req = {
    method: "POST",
    url: "https://naukritube-v3-dev.herokuapp.com/v1/api/auth/recruiter/signin",
    data
  };

  const response = await ApiReq(req);
  dispatch(Actions.signIn(response));

  return response;
};
