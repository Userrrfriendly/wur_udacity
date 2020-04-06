import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import ReduxThunk from "redux-thunk";

//FAKE Middlware
const logger = store => next => action => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return result;
};

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

export default store;
