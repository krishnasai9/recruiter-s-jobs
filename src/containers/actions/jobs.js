import ApiReq from "../middleware/index";
import * as Actions from "../reducers/jobs";

export const jobs = (data) => async (dispatch) => {
  const req = {
    method: "Get",
    url: "https://naukritube-v3-dev.herokuapp.com/v1/api/recruiters/getAll",
    data
  };

  const response = await ApiReq(req);
  dispatch(Actions.jobs(response));

  return response;
};
