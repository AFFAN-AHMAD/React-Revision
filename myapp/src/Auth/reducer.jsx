import {  Login_Success, Login_Failure, LogOut} from "./action";
const initState = {
  isAuth: false,
  token: "",
};
export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case Login_Success: {
      return {
        ...state,
        token: payload,
        isAuth: true,
      };
    }
    case Login_Failure: {
      return {
        ...state,
        token: "",
        isAuth: false,
      };
      }
      case LogOut: {
        return {
            ...state,
            token: "",
            isAuth: false,
          };
          
          }
    default: {
      return state;
    }
  }
};
