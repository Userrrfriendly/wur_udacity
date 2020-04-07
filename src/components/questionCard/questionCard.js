import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Typography,
  Button,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  makeStyles,
} from "@material-ui/core";
import Error404 from "../404error/error404";
import ResultCard from "../resultCard/resultCard";
import { saveQuestionAnswer } from "../../store/actions/sharedActions";
import placeHolderAvatar from "../../assets/avatars/placeholder.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexFlow: "column",
    marginTop: "1rem",
  },
  header: {
    backgroundColor: "gold",
    // borderRadius is set to the same value of parent (<Paper>)
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottom: "2px solid black",
    "& h1": {
      marginLeft: "1rem",
    },
  },
  cardBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "1rem 0",
    // padding: '0 1rem'
  },
  avatarSection: {
    borderRadius: "100%",
    backgroundImage: `url(${placeHolderAvatar})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "100px",
    minHeight: "100px",
    margin: "1.5rem",
  },

  questionSection: {
    borderLeft: "1px solid black",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1.5rem",
  },
  radioGroup: {
    alignSelf: "flex-start",
  },
  submitBtn: {
    width: "100%",
    margin: "1rem 1rem 0 1rem",
  },
});

export default function QuestuinCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const urlID = useParams();
  const authUser = useSelector((state) => state.users.authUser);
  const allQuestions = useSelector((state) => state.questions);
  const question = allQuestions.filter((q) => q.id === urlID.id);
  const users = useSelector((state) => state.users.users);
  const formatedQuestion = () => {
    if (question.length > 0) {
      let authUserVote, optionOneVotes, optionTwoVotes, totalVotes;
      const author = users[question[0].author];
      const answered =
        !question[0].optionOne.votes.includes(authUser) &&
        !question[0].optionTwo.votes.includes(authUser)
          ? false
          : true;
      if (answered) {
        authUserVote = question[0].optionOne.votes.includes(authUser)
          ? "optionOne"
          : "optionTwo";
        optionOneVotes = question[0].optionOne.votes.length;
        optionTwoVotes = question[0].optionTwo.votes.length;
        totalVotes = optionOneVotes + optionTwoVotes;
      }
      return {
        name: author.name,
        avatarURL: author.avatarURL,
        optionOneText: question[0].optionOne.text,
        optionTwoText: question[0].optionTwo.text,
        answered: answered,
        id: question[0].id,
        authUserVote, // "string",
        optionOneVotes, //: "number",
        optionTwoVotes, //: "number",
        totalVotes, //: "number",
      };
    } else {
      return undefined;
    }
  };

  const [value, setValue] = useState("optionOne");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const q = formatedQuestion();
  const handleSubmitAnswer = (e) => {
    // authedUser, qid, and answer = "optionOne" or "optionTwo"
    const result = { authedUser: authUser, qid: q.id, answer: value };
    dispatch(saveQuestionAnswer(result));
  };

  return (
    <div>
      {!q && <Error404 />}
      {q ? (
        !q.answered ? (
          <Paper className={classes.root}>
            <section className={classes.header}>
              <Typography
                align="left"
                variant="h4"
                component="h1"
                className={classes.heading}
              >
                {`${q.name} asks:`}
              </Typography>
            </section>
            <section className={classes.cardBody}>
              <Paper
                className={classes.avatarSection}
                style={{ backgroundImage: `url(${q.avatarURL})` }}
              />
              <section className={classes.questionSection}>
                <Typography align="left" variant="h4" component="h2">
                  Would you rather...
                </Typography>
                <FormControl
                  component="fieldset"
                  className={classes.radioGroup}
                >
                  <RadioGroup
                    aria-label="answer"
                    name="answer"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="optionOne"
                      control={<Radio />}
                      label={q.optionOneText}
                    />
                    <FormControlLabel
                      value="optionTwo"
                      control={<Radio />}
                      label={q.optionTwoText}
                    />
                  </RadioGroup>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitBtn}
                  onClick={handleSubmitAnswer}
                >
                  Submit
                </Button>
              </section>
            </section>
          </Paper>
        ) : (
          <ResultCard {...q} />
        )
      ) : (
        ""
      )}
    </div>
  );
}
