import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import questionReducer from "./questionsReducer";

export default combineReducers({
  users: userReducer,
  questions: questionReducer,
});
