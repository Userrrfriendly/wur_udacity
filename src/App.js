import React from "react";
import { Route, Redirect } from "react-router-dom";
import TabbedAppBar from "./components/appBar/tabbedAppBar";
// import Login from "./components/loginScreen/login";
// import QuestionCard from "./components/questionCard/questionCard";
// import ResultCard from "./components/resultCard/resultCard";
// import NewQuestionForm from "./components/newQuestionForm/newQuestionForm";
// import Leaderboard from "./components/leaderboard/leaderboard";

import { useSelector } from "react-redux";
// import { loadInitialData } from "./store/actions/sharedActions";

// import { loadQuestions } from "./store/actions/questionsActions";
// import { loadUserData } from "./store/actions/usersActions";

function App() {
  // const dispatch = useDispatch();
  const auth = useSelector((state) => state.authUser);
  // console.log(auth)
  // useEffect(() => {
  //   dispatch(loadUserData());
  // });
  // const hanldeClick = () => {
  //   dispatch(loadInitialData());
  // };

  // const handleQestions = () => {
  //   dispatch(loadQuestions());
  // };

  return (
    <div className="App">
      {/* <button test={auth} onClick={hanldeClick}>
        LOAD
      </button>
      <button onClick={handleQestions}>LOAD QUESTIONS</button> */}
      {!auth && <Redirect to="/login" />}

      <TabbedAppBar></TabbedAppBar>
    </div>
  );
}

export default App;
