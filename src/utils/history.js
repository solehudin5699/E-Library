import axios from "axios";

export const getHistoryAPI = () => {
  return axios.get("http://localhost:2300/history");
};

export const postHistoryAPI = (body) => {
  return axios.post("http://localhost:2300/history", body);
};
