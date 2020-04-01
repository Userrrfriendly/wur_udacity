import React from "react";
import {
  makeStyles,
  Typography,
  // Button,
  Box,
  Paper,
  Tabs,
  Tab
} from "@material-ui/core";

import QuestionPreview from "../questionCard/questionPreview";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column"
  },
  homescreen: {
    // display: "flex"
  }
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab label="Anwered Questions" />
          <Tab label="Unanswered Questions" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <QuestionPreview style={{ backgroundColor: "red" }} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuestionPreview />
      </TabPanel>
    </Paper>
  );
}
