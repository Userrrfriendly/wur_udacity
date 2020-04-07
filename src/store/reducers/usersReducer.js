import {
  LOAD_USERS,
  LOADING_USERS,
  SIGN_IN,
  LOG_OUT,
  UPDATE_USER_ANSWERS,
  CREATE_QUESTION_UPDATE,
} from "../actions/usersActions";

const initialState = {
  authUser: null,
  loadingUsers: true,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, users: action.users };
    case LOADING_USERS:
      return { ...state, loadingUsers: action.payload };
    case SIGN_IN:
      return { ...state, authUser: action.user };
    case UPDATE_USER_ANSWERS:
      const { userID, answerID, answer } = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [userID]: {
            ...state.users[userID],
            answers: { ...state.users[userID].answers, [answerID]: answer },
            score: state.users[userID].score + 1,
          },
        },
      };
    case CREATE_QUESTION_UPDATE:
      const { userId, questionId } = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [userId]: {
            ...state.users[userId],
            questions: [...state.users[userId].questions].concat(questionId),
            score: state.users[userId].score + 1,
          },
        },
      };
    case LOG_OUT:
      return { ...state, authUser: null };
    default:
      return state;
  }
}
