import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import placeHolderAvater from "../../assets/avatars/placeholder.png";

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
  },
  avatarSection: {
    borderRadius: "100%",
    backgroundImage: `url(${placeHolderAvater})`,
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

  submitBtn: {
    width: "100%",
    margin: "1rem 1rem 0 1rem",
  },
});

export default function QuestionCard({ author, previewText, id }) {
  const user = useSelector((state) => state.users.users[author]);
  const classes = useStyles();
  const history = useHistory();
  const handleViewPollClick = () => {
    console.log(id);
    console.log(history.location);
    history.push(`/questions:${id}`);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <section className={classes.header}>
          <Typography
            align="left"
            variant="h4"
            component="h1"
            className={classes.heading}
          >
            {`${user.name} asks:`}
          </Typography>
        </section>
        <section className={classes.cardBody}>
          <Paper
            className={classes.avatarSection}
            style={{ backgroundImage: `url(${user.avatarURL})` }}
          />
          <section className={classes.questionSection}>
            <Typography align="left" variant="h4" component="h2">
              Would you rather...
            </Typography>
            <Typography
              align="left"
              variant="body1"
              component="p"
              style={{ alignSelf: "flex-start" }}
              noWrap
            >
              {previewText}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.submitBtn}
              onClick={handleViewPollClick}
            >
              View Poll
            </Button>
          </section>
        </section>
      </Paper>
    </div>
  );
}
