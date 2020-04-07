import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./homeScreen/homeScreen";
import Question from "./questionCard/questionCard";
import Leaderboard from "./leaderboard/leaderboard";
import NewQuestionForm from "./newQuestionForm/newQuestionForm";
import Error404 from "./404error/error404";

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
        <Error404 />
      </Route>
    </Switch>
  );
}
