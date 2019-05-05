import axios from "axios";
import { getRedirectPath } from "../util";
const REGISTER_SCUUESS = "REGISTER_SCUUESS";
const ERROR_MSG = "ERROR_MSG";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const initState = {
  redirectTo: "",
  isAuth: false,
  msg: "",
  user: "",
  pwd: "",
  type: ""
};
// reducer function

export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SCUUESS:
      return {
        ...state,
        isAuth: true,
        redirectTo: getRedirectPath({ ...action.payload }),
        msg: "",
        ...action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        redirectTo: getRedirectPath({ ...action.payload }),
        msg: "",
        ...action.payload
      };
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg };
    default:
      return state;
  }
}
// action function
export function registerSuccess(data) {
  return { type: REGISTER_SCUUESS, payload: data };
}
export function errMsg(msg) {
  return { msg, type: ERROR_MSG };
}
export function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, payload: data };
}
export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd || !type) {
    return errMsg("用户名密码必须输入");
  }
  if (pwd !== repeatpwd) {
    return errMsg("两次输入密码不一致");
  }
  return dispatch => {
    axios.post("/user/register", { user, pwd, type }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(registerSuccess({ user, pwd, type }));
      } else {
        dispatch(errMsg(res.data.msg));
      }
    });
  };
}
export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errMsg("用户名密码必须输入");
  }
  return dispatch => {
    axios.post("/user/login", { user, pwd }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(loginSuccess(res.data.data));
      } else {
        dispatch(errMsg(res.data.msg));
      }
    });
  };
}
