import axios from "axios";

export const loginAPI = (body) => {
  return axios.post("http://localhost:2300/auth/login", body);
};
export const validateTokenAPI = () => {
  return axios.post("http://localhost:1000/auth/validate", null, {
    headers: { "x-access-token": `bearer ${localStorage.getItem("token")}` },
  });
};
export const registrationAPI = (body) => {
  return axios.post("http://localhost:2300/auth/register", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
