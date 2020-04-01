import React from "react";
import {
  Paper,
  Typography,
  TextareaAutosize,
  makeStyles,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexFlow: "column",
    marginTop: "1rem",
    minWidth: "50vw",
    minHeight: "30vh",
    alignItems: "center",
    padding: "1rem 0"
  },
  paper__textWrapper: {
    width: "90%"
  },
  textArea: {
    border: "1px solid teal",
    borderRadius: "4px",
    width: "90%",
    resize: "none",
    margin: "1rem 0",
    boxSizing: "border-box"
  },
  hrWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "90%",
    alignItems: "center"
  },
  hr: {
    height: "2px",
    width: "90%",
    backgroundColor: "#a5a5a5"
  },
  hr__or: {
    margin: "0 1rem"
  }
});

export default function NewQuestionForm() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <div className={classes.paper__textWrapper}>
          <Typography align="left" variant="subtitle1" component="p">
            Complete The Question
          </Typography>
          <Typography align="left" variant="subtitle2" component="p">
            Would You Rather...
          </Typography>
        </div>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          className={classes.textArea}
        />
        <div className={classes.hrWrapper}>
          <div className={classes.hr}></div>
          <Typography
            align="center"
            variant="subtitle2"
            component="p"
            className={classes.hr__or}
          >
            OR
          </Typography>
          <div className={classes.hr}></div>
        </div>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          className={classes.textArea}
        />
        <Button variant="contained" color="primary" style={{ width: "90%" }}>
          Submit
        </Button>
      </Paper>
    </div>
  );
}
