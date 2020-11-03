import axios from "axios";

export const getBorrowBookAPI = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/borrow_books");
};

export const postBorrowBookAPI = (body) => {
  return axios.post(process.env.REACT_APP_API_URL + "/borrow_books", body);
};

export const deleteBorrowBookAPI = (id) => {
  return axios.delete(process.env.REACT_APP_API_URL + `/borrow_books?id=${id}`);
};
