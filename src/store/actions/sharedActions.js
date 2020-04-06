import * as DATA from "../../data/_DATA";
import { LOAD_QUESTIONS } from "./questionsActions";
import { LOAD_USERS, LOADING_USERS } from "./usersActions";

export function loadInitialData() {
  return (dispatch) => {
    Promise.all([DATA._getUsers(), DATA._getQuestions()]).then(
      ([usersData, questionsData]) => {
        // console.log(questionsData);

        // const users = [];
        // for (let key in usersData) {
        //   users.push(usersData[key]);
        // }
        const questions = [];
        for (let key in questionsData) {
          questions.push(questionsData[key]);
        }
        dispatch({
          type: LOAD_USERS,
          users: usersData,
        });
        dispatch({
          type: LOAD_QUESTIONS,
          questions,
        });
        dispatch({
          type: LOADING_USERS,
          payload: false,
        });
      }
    );
  };
}

export function AAAloadInitialData() {
  return Promise.all([DATA._getUsers(), DATA._getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}
// export function loadInitialData() {
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
