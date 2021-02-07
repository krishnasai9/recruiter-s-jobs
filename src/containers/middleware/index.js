import axios from "axios";

const ApiReq = async (req) => {
  try {
    const response = await axios(req);

    return {
      response: response?.data,
      status: response.status,
    };
  } catch (error) {
    return {
      response: error?.response || {},
      status: error?.response?.status || null,
    };
  }
};

export default ApiReq;
