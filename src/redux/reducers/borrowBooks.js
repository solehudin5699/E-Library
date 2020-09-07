import { getBorrowBookAPICreator, postBorrowBookAPICreator, deleteBorrowBookAPICreator } from "../actions/borrowBooks";

const initialState = {
  dataGet: [],
  errorGet: undefined,
  isGetPending: false,
  isGetFulFilled: false,
  isGetRejected: false,

  dataPost: [],
  errorPost: undefined,
  isPostPending: false,
  isPostFulFilled: false,
  isPostRejected: false,

  dataDel: [],
  errorDel: undefined,
  isDelPending: false,
  isDelFulFilled: false,
  isDelRejected: false,

};

const borrowBooksAPIReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case String(getBorrowBookAPICreator.pending):
      return {
        ...prevState,
        isGetPending: true,
      };
    case String(getBorrowBookAPICreator.fulfilled):
      let dataGet;
      if (Number(action.payload.status) === 200) {
        dataGet = action.payload.data;
      } else {
        dataGet = [];
      }
      return {
        ...prevState,
        dataGet: dataGet,
        errorGet: undefined,
        isGetPending: false,
        isGetFulFilled: true,
        isGetRejected: false,
      };
    case String(getBorrowBookAPICreator.rejected):
      return {
        ...prevState,
        errorGet: action.payload,
        isGetRejected: true,
        isGetPending: false,
        isGetFulFilled: false,
      };

    //POST
    case String(postBorrowBookAPICreator.pending):
      return {
        ...prevState,
        isPostPending: true,
      };
    case String(postBorrowBookAPICreator.fulfilled):
      let dataPost;
      if (Number(action.payload.status) === 200) {
        dataPost = action.payload.data;
      } else {
        dataPost = [];
      }
      return {
        ...prevState,
        dataPost: dataPost,
        errorPost: undefined,
        isPostPending: false,
        isPostFulFilled: true,
        isPostRejected: false,
      };
    case String(postBorrowBookAPICreator.rejected):
      return {
        ...prevState,
        errorPost: action.payload,
        isPostRejected: true,
        isPostPending: false,
        isPostFulFilled: false,
      };

    //DELETE
    case String(deleteBorrowBookAPICreator.pending):
      return {
        ...prevState,
        isDelPending: true,
      };
    case String(deleteBorrowBookAPICreator.fulfilled):
      let dataDel;
      if (Number(action.payload.status) === 200) {
        dataDel = action.payload.data;
      } else {
        dataDel = [];
      }
      return {
        ...prevState,
        dataDel: dataDel,
        errorDel: undefined,
        isDelPending: false,
        isDelFulFilled: true,
        isDelRejected: false,
      };
    case String(deleteBorrowBookAPICreator.rejected):
      return {
        ...prevState,
        errorDel: action.payload,
        isDelRejected: true,
        isDelPending: false,
        isDelFulFilled: false,
      };
    default:
      return prevState;
  }
};

export default borrowBooksAPIReducer;
