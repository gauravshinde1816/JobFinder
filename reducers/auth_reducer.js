import { LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/types";
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        token: action.payload,
      };
    case LOGIN_FAILED:
      return {
        token: null,
      };
    default:
      return state;
  }
}
