import * as DATA from "../../data/_DATA";
export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function loadQuestions() {
  return (dispatch) => {
    DATA._getQuestions().then((data) => {
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
