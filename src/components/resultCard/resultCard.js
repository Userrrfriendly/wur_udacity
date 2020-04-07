import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { HowToVoteRounded } from "@material-ui/icons";
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
    padding: "0 1rem",
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
    padding: "0 2.5rem",
  },
  question: {
    minWidth: "150px",
    minHeight: "100px",
    width: "100%",
    height: "45%",
    marginBottom: "1rem",
    padding: "1rem",
  },
  usersAnswer: {
    backgroundColor: "#80bdbd",
  },
  progressContainer: {
    width: "100%",
    height: "2rem",
    border: "1px solid #025050",
    borderRadius: "4px",
    marginTop: "1rem",
    textAlign: "center",
    lineHeight: "2rem",
  },
  progress: {
    backgroundColor: "teal",
    height: "100%",
  },
  yourVote: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function ResultCard(props) {
  const classes = useStyles();
  const optionOnePercent =
    ((100 * props.optionOneVotes) / props.totalVotes).toFixed(0) + "%";
  const optionTwoPercent =
    ((100 * props.optionTwoVotes) / props.totalVotes).toFixed(0) + "%";

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
            {`${props.name} asked:`}
          </Typography>
        </section>
        <section className={classes.cardBody}>
          <Paper
            className={classes.avatarSection}
            style={{ backgroundImage: `url(${props.avatarURL})` }}
          />
          <section className={classes.questionSection}>
            <Typography
              align="left"
              variant="h6"
              component="h2"
              gutterBottom
              style={{ alignSelf: "flex-start" }}
            >
              RESULTS:
            </Typography>
            <Paper
              className={`${classes.question} ${
                props.authUserVote === "optionOne" ? classes.usersAnswer : ""
              }`}
            >
              <Typography align="left" variant="subtitle2" component="p">
                {props.optionOneText}
              </Typography>
              <div className={classes.progressContainer}>
                <div
                  className={classes.progress}
                  style={{ width: optionOnePercent }}
                >
                  {optionOnePercent}
                </div>
              </div>
              <Typography align="center" variant="subtitle2" component="p">
                {`${props.optionOneVotes} out of ${props.totalVotes}`}
              </Typography>
              {props.authUserVote === "optionOne" && (
                <div className={classes.yourVote}>
                  <HowToVoteRounded style={{ marginRight: "0.5rem" }} />
                  <Typography
                    align="center"
                    variant="subtitle2"
                    component="p"
                    color="primary"
                  >
                    -Your vote-
                  </Typography>
                </div>
              )}
            </Paper>
            {/*  */}
            <Paper
              className={`${classes.question} ${
                props.authUserVote === "optionTwo" ? classes.usersAnswer : ""
              }`}
            >
              <Typography align="left" variant="subtitle2" component="p">
                {props.optionTwoText}
              </Typography>
              <div className={classes.progressContainer}>
                <div
                  className={classes.progress}
                  style={{ width: optionTwoPercent }}
                >
                  {optionTwoPercent}
                </div>
              </div>
              <Typography align="center" variant="subtitle2" component="p">
                {`${props.optionTwoVotes} out of ${props.totalVotes}`}
              </Typography>

              {props.authUserVote === "optionTwo" && (
                <div className={classes.yourVote}>
                  <HowToVoteRounded style={{ marginRight: "0.5rem" }} />
                  <Typography
                    align="center"
                    variant="subtitle2"
                    component="p"
                    color="primary"
                  >
                    -Your vote-
                  </Typography>
                </div>
              )}
            </Paper>
          </section>
        </section>
      </Paper>
    </div>
  );
}
