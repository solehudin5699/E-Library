import axios from "axios";

export const loginAPI = (body) => {
  return axios.post(process.env.REACT_APP_API_URL + "/auth/login", body);
};
export const validateTokenAPI = () => {
  return axios.post(process.env.REACT_APP_API_URL + "/auth/validate", null, {
    headers: { "x-access-token": `bearer ${localStorage.getItem("token")}` },
  });
};
export const registrationAPI = (body) => {
  return axios.post(process.env.REACT_APP_API_URL + "/auth/register", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
