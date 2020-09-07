import { loginAPICreator, registrationAPICreator } from "../actions/auth";

const initialState = {
  statusLogin: undefined,
  dataLogin: {},
  errorLogin: undefined,
  isLoginPending: false,
  isLoginFulFilled: false,
  isLoginRejected: false,

  statusRegist: undefined,
  dataRegist: [],
  errorRegist: undefined,
  isRegistPending: false,
  isRegistFulFilled: false,
  isRegistRejected: false,

  // tokenStatus: {},
};

const authAPIReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case String(loginAPICreator.pending):
      return {
        ...prevState,
        isLoginPending: true,
      };
    case String(loginAPICreator.fulfilled):
      let datalogin;
      let status;
      if (Number(action.payload.status) === 200) {
        localStorage.setItem("name", action.payload.data.name);
        localStorage.setItem("user_id", action.payload.data.user_id);
        localStorage.setItem("level_id", action.payload.data.level_id);
        localStorage.setItem("token", action.payload.data.token);
        datalogin = action.payload.data;
        status = 200;
      } else {
        status = 500;
      }

      return {
        ...prevState,
        statusLogin: status,
        dataLogin: datalogin,
        errorLogin: undefined,
        isLoginPending: false,
        isLoginFulFilled: true,
        isLoginRejected: false,
        // tokenStatus: { ...prevState.tokenStatus, token: status },
      };
    case String(loginAPICreator.rejected):
      return {
        ...prevState,
        statusLogin: 500,
        errorLogin: action.payload,
        isLoginRejected: true,
        isLoginPending: false,
        isLoginFulFilled: false,
      };

    case String(registrationAPICreator.pending):
      return {
        ...prevState,
        isRegistPending: true,
      };
    case String(registrationAPICreator.fulfilled):
      return {
        ...prevState,
        statusRegist: action.payload.status,
        dataRegist: action.payload.data,
        errorRegist: undefined,
        isRegistPending: false,
        isRegistFulFilled: true,
        isRegistRejected: false,
      };
    case String(registrationAPICreator.rejected):
      return {
        ...prevState,
        statusRegist: 500,
        errorRegist: action.payload,
        isRegistRejected: true,
        isRegistPending: false,
        isRegistFulFilled: false,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...prevState,
        dataLogin: [],
        statusLogin: undefined,
        errorLogin: undefined,
        isLoginPending: false,
        isLoginFulFilled: false,
        isLoginRejected: false,
        statusRegist: undefined,
        dataRegist: [],
        errorRegist: undefined,
        isRegistPending: false,
        isRegistFulFilled: false,
        isRegistRejected: false,
        // tokenStatus: false,
      };
    default:
      return prevState;
  }
};

export default authAPIReducer;
