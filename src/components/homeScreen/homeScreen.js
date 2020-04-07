import React from "react";
import {
  makeStyles,
  Typography,
  // Button,
  Box,
  Paper,
  Tabs,
  Tab,
} from "@material-ui/core";

import QuestionPreview from "../questionCard/questionPreview";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column",
  },
  homescreen: {
    // display: "flex"
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function Homescreen(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const questions = useSelector((state) => state.questions);
  const authUser = useSelector((state) => state.users.authUser);

  const unAnsweredQ = [];
  const answeredQ = [];

  questions.forEach((q) => {
    if (
      !q.optionOne.votes.includes(authUser) &&
      !q.optionTwo.votes.includes(authUser)
    ) {
      unAnsweredQ.push(q);
    } else {
      answeredQ.push(q);
    }
  });

  return (
    <Paper className={classes.root}>
      <Paper className={classes.homescreen} square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="Answered/Unanswered Questions"
          centered
        >
          <Tab label="Answered Questions" />
          <Tab label="Unanswered Questions" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {answeredQ.length === 0 && (
          <p>You haven't answered any questions yet!</p>
        )}
        {answeredQ.map((q) => (
          <QuestionPreview
            key={q.id}
            author={q.author}
            previewText={q.optionOne.text}
            id={q.id}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {unAnsweredQ.length === 0 && <p>You have no Unanswered question!</p>}
        {unAnsweredQ.map((q) => (
          <QuestionPreview
            key={q.id}
            author={q.author}
            previewText={q.optionOne.text}
            id={q.id}
          />
        ))}
      </TabPanel>
    </Paper>
  );
}
