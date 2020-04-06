import { LOAD_USERS, LOADING_USERS, SIGN_IN } from "../actions/usersActions";

const initialState = {
  authUser: null,
  loadingUsers: true
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, users: action.users };
    case LOADING_USERS:
      return { ...state, loadingUsers: action.payload };
    case SIGN_IN:
      return { ...state, authUser: action.user };
    case "LOG_OUT":
      return state;
    default:
      return state;
  }
}
