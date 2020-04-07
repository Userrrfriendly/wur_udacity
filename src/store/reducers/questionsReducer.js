import {
  LOAD_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION,
} from "../actions/questionsActions";

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return [...action.questions];
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.payload;
      return state.map((q) =>
        q.id === qid
          ? {
              ...q,
              [answer]: {
                ...q[answer],
                votes: q[answer].votes.concat(authedUser),
              },
            }
          : { ...q }
      );
    case SAVE_QUESTION:
      return [...state].concat(action.payload);
    default:
      return state;
  }
}
