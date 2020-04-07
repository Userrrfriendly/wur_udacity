import * as DATA from "../../data/_DATA";
export const LOAD_USERS = "LOAD_USERS";
export const LOADING_USERS = "LOADING_USERS";
export const SIGN_IN = "SIGN_IN";
export const LOG_OUT = "LOG_OUT";
export const GENERATE_USERS_SCORE = "GENERATE_USERS_SCORE";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";
export const CREATE_QUESTION_UPDATE = "CREATE_QUESTION_UPDATE";

// export function loadUserData() {
//   return dispatch => {
//     DATA._getUsers().then(data => {
//       const users = [];
//       for (let key in data) {
//         users.push(data[key]);
//       }
//       dispatch({
//         type: "LOAD_USERS",
//         users
//       });
//       dispatch({
//         type: LOADING_USERS,
//         payload: false
//       });
//     });
//   };
// }
export function createQuestionUpdate(obj) {
  //obj = {userID, questionID}
  return {
    type: CREATE_QUESTION_UPDATE,
    payload: obj,
  };
}

export function updateUserAnswers(obj) {
  //obj = userID,answerID,answer
  return {
    type: UPDATE_USER_ANSWERS,
    payload: obj,
  };
}

export function signInUser(user) {
  return {
    type: SIGN_IN,
    user,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
