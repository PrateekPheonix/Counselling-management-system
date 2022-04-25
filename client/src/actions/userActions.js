import Axios from "axios";
import Cookie from 'js-cookie';
import {
  USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT
} from "../constants/userConstants";

const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("http://localhost:5000/login", { email, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    Cookie.set('userRole', data.user.role);
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }
}

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post("http://localhost:5000/signup", { name, email, password });
    console.log(data.user.role)
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userRole', data.user.role);
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}
export { login, register, logout };