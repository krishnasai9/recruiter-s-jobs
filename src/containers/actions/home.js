import ApiReq from "../middleware/index";
import * as Actions from "../reducers/home";

export const getAlbums = () => async (dispatch) => {
  const req = {
    method: "GET",
    url: "https://reqres.in/api/users?page=1"
  };

  const response = await ApiReq(req);
  dispatch(Actions.getAlbums(response));

  return response;
};
