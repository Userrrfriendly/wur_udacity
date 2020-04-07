import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./homeScreen/homeScreen";
// import QuestionPreview from "./questionCard/questionPreview";
import Question from "./questionCard/questionCard";
import Leaderboard from "./leaderboard/leaderboard";
import NewQuestionForm from "./newQuestionForm/newQuestionForm";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/questions/:id">
        <Question />
      </Route>
      <Route path="/leaderboard">
        <Leaderboard />
      </Route>
      <Route path="/add">
        <NewQuestionForm />
      </Route>
      <Route>
        <h1>404 Error, the page you are looking for doesn't exist</h1>
      </Route>
    </Switch>
  );
}
