import * as DATA from "../../data/_DATA";
export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function loadQuestions() {
  return (dispatch) => {
    DATA._getQuestions().then((data) => {
      // console.log(data);
      const questions = [];
      for (let key in data) {
        questions.push(data[key]);
      }
      dispatch({
        type: LOAD_QUESTIONS,
        questions,
      });
    });
  };
}

// export function saveQuestionAnswer(obj) {
//   return (dispatch) => {
//     DATA._saveQuestionAnswer(obj).then((data) => {
//       // console.log(data);
//       dispatch({
//         type: SAVE_QUESTION_ANSWER,
//         payload: obj,
//       });
//     });
//   };
// }

// export function saveQuestion(obj) {
//   return (dispatch) => {
//     DATA._saveQuestion(obj).then((data) => {
//       console.log(data);
//       dispatch({
//         type: SAVE_QUESTION,
//         payload: data,
//       });
//     });
//   };
// }
