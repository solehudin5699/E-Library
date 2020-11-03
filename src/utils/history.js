import axios from "axios";

export const getHistoryAPI = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/history");
};

export const postHistoryAPI = (body) => {
  return axios.post(process.env.REACT_APP_API_URL + "/history", body);
};
