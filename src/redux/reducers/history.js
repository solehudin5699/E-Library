import { historyAPICreator, postHistoryAPICreator} from "../actions/history";

const initialState = {
  dataHistory: [],
  error: undefined,
  isPending: false,
  isFulFilled: false,
  isRejected: false,

  dataPost: [],
  errorPost: undefined,
  isPostPending: false,
  isPostFulFilled: false,
  isPostRejected: false,
};

const historyAPIReducer = (prevState = initialState, action) => {
  switch (action.type) {
    //GET
    case String(historyAPICreator.pending):
      return {
        ...prevState,
        isPending: true,
      };
    case String(historyAPICreator.fulfilled):
      let data;
      if(action.payload.status===200){
        data=action.payload.data;
      } else if(action.payload.status===500){
        data=[];
      }
      return {
        ...prevState,
        dataHistory: data,
        error: undefined,
        isPending: false,
        isFulFilled: true,
        isRejected: false,
      };
    case String(historyAPICreator.rejected):
      return {
        ...prevState,
        error: action.payload,
        isRejected: true,
        isPending: false,
        isFulFilled: false,
      };
    
    //POST
    case String(postHistoryAPICreator.pending):
      return {
        ...prevState,
        isPostPending: true,
      };
    case String(postHistoryAPICreator.fulfilled):
      let dataPost;
      if(action.payload.status===200){
        dataPost=action.payload.data;
      } else if(action.payload.status===500){
        dataPost=undefined;
      }
      return {
        ...prevState,
        dataPost: dataPost,
        errorPost: undefined,
        isPostPending: false,
        isPostFulFilled: true,
        isPostRejected: false,
      };
    case String(postHistoryAPICreator.rejected):
      return {
        ...prevState,
        errorPost: action.payload,
        isPostRejected: true,
        isPostPending: false,
        isPostFulFilled: false,
      };
    default:
      return prevState;
  }
};

export default historyAPIReducer;
