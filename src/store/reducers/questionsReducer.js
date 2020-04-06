import { LOAD_QUESTIONS } from "../actions/questionsActions";

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      console.log(action.questions);
      return [...action.questions];
    default:
      return state;
  }
}
