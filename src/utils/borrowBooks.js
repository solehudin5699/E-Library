import axios from "axios";

export const getBorrowBookAPI = () => {
  return axios.get("http://localhost:2300/borrow_books");
};

export const postBorrowBookAPI = (body) => {
  return axios.post("http://localhost:2300/borrow_books", body);
};

export const deleteBorrowBookAPI = (id) => {
  return axios.delete(`http://localhost:2300/borrow_books?id=${id}`);
};