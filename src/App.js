import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import TabbedAppBar from "./components/appBar/tabbedAppBar";
import ButtonAppBar from "./components/appBar/appBar";
import Routes from "./components/routes";
import Login from "./components/loginScreen/login";
// import QuestionCard from "./components/questionCard/questionCard";
// import ResultCard from "./components/resultCard/resultCard";
// import NewQuestionForm from "./components/newQuestionForm/newQuestionForm";
// import Leaderboard from "./components/leaderboard/leaderboard";

import { useSelector, useDispatch } from "react-redux";
import { loadInitialData } from "./store/actions/sharedActions";

// import { loadQuestions } from "./store/actions/questionsActions";
// import { loadUserData } from "./store/actions/usersActions";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users.authUser);
  const loadingUsers = useSelector((state) => state.users.loadingUsers);
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const usersArray = () => {
    const result = [];
    if (users) {
      for (let key in users) {
        result.push(users[key]);
      }
    }

    return result;
  };

  useEffect(() => {
    dispatch(loadInitialData());
  }, [dispatch]);

  // const hanldeClick = () => {
  //   dispatch(loadInitialData());
  // };

  // const handleQestions = () => {
  //   dispatch(loadQuestions());
  // };
  const mainStyle = {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingTop: "1.25rem",
  };

  return (
    <div className="App">
      <ButtonAppBar />
      <main style={mainStyle}>
        {!auth && <Login loadingUsers={loadingUsers} users={usersArray()} />}
        {auth && <Routes></Routes>}
      </main>
      {/* <button test={auth} onClick={hanldeClick}>
        LOAD
      </button>
      <button onClick={handleQestions}>LOAD QUESTIONS</button> */}
      {/* <TabbedAppBar></TabbedAppBar> */}
    </div>
  );
}

export default App;
