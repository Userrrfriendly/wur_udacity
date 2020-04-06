import * as DATA from "../../data/_DATA";
export const LOAD_QUESTIONS = "LOAD_QUESTIONS";

export function loadQuestions() {
  return dispatch => {
    DATA._getQuestions().then(data => {
      console.log(data);
      const questions = [];
      for (let key in data) {
        questions.push(data[key]);
      }
      dispatch({
        type: LOAD_QUESTIONS,
        questions
      });
    });
  };
}
