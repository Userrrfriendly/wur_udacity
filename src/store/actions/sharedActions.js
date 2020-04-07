import * as DATA from "../../data/_DATA";
import {
  LOAD_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION,
} from "./questionsActions";
import {
  LOAD_USERS,
  LOADING_USERS,
  UPDATE_USER_ANSWERS,
  CREATE_QUESTION_UPDATE,
} from "./usersActions";

export function loadInitialData() {
  return (dispatch) => {
    Promise.all([DATA._getUsers(), DATA._getQuestions()]).then(
      ([usersData, questionsData]) => {
        const users = {};
        for (let key in usersData) {
          const userWithScore = {
            ...usersData[key],
            score:
              usersData[key].questions.length +
              Object.keys(usersData[key].answers).length,
          };
          users[key] = userWithScore;
        }
        const questions = [];
        for (let key in questionsData) {
          questions.push(questionsData[key]);
        }
        dispatch({
          type: LOAD_USERS,
          users: users,
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

export function saveQuestionAnswer(obj) {
  return (dispatch) => {
    DATA._saveQuestionAnswer(obj).then((data) => {
      dispatch({
        type: SAVE_QUESTION_ANSWER,
        payload: obj,
      });
      dispatch({
        type: UPDATE_USER_ANSWERS,
        payload: {
          userID: obj.authedUser,
          answerID: obj.qid,
          answer: obj.answer,
        },
      });
    });
  };
}

export function saveQuestion(obj) {
  return (dispatch) => {
    DATA._saveQuestion(obj).then((data) => {
      dispatch({
        type: SAVE_QUESTION,
        payload: data,
      });
      dispatch({
        type: CREATE_QUESTION_UPDATE,
        payload: { questionId: data.id, userId: data.author },
      });
    });
  };
}
