import * as DATA from "../../data/_DATA";
export const LOAD_USERS = "LOAD_USERS";
export const LOADING_USERS = "LOADING_USERS";
export const SIGN_IN = "SIGN_IN";

export function loadUserData() {
  return dispatch => {
    DATA._getUsers().then(data => {
      const users = [];
      for (let key in data) {
        users.push(data[key]);
      }
      dispatch({
        type: "LOAD_USERS",
        users
      });
      dispatch({
        type: LOADING_USERS,
        payload: false
      });
    });
  };
}

export function signInUser(user) {
  return {
    type: SIGN_IN,
    user
  };
}
