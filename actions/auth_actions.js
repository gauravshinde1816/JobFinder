import { LOGIN_SUCCESS, LOGIN_FAILED } from "./types";
import { AsyncStorage } from "react-native";
import axios from "axios";
export const Login = (user) => async (dispatch) => {
  console.log("Login Actions");
  let token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });
  } else {
    try {
      const res = await axios.post(
        "http://192.168.42.102:5000/api/auth/",
        user
      );
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: error,
      });
    }
  }
};
