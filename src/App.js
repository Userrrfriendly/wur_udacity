import React from "react";
import TabbedAppBar from "./components/appBar/tabbedAppBar";
// import Login from "./components/loginScreen/login";
// import QuestionCard from "./components/questionCard/questionCard";
// import ResultCard from "./components/resultCard/resultCard";
// import NewQuestionForm from "./components/newQuestionForm/newQuestionForm";
import Leaderboard from "./components/leaderboard/leaderboard";

function App() {
  return (
    <div className="App">
      <TabbedAppBar>
        {/* <Login /> */}
        {/* <QuestionCard /> */}
        {/* <ResultCard /> */}
        {/* <NewQuestionForm /> */}
        <Leaderboard />
      </TabbedAppBar>
    </div>
  );
}

export default App;
