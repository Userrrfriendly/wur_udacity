import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { HowToVoteRounded } from "@material-ui/icons";
// import rickAvatar from "../../assets/avatars/rick2.png";
import mortyAvatar from "../../assets/avatars/morty.png";
// import jeryAvatar from "../../assets/avatars/jerry.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexFlow: "column",
    marginTop: "1rem"
  },
  header: {
    backgroundColor: "gold",
    // borderRadius is set to the same value of parent (<Paper>)
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottom: "2px solid black",
    "& h1": {
      marginLeft: "1rem"
    }
  },
  cardBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "1rem 0"
  },
  avatarSection: {
    borderRadius: "100%",
    backgroundImage: `url(${mortyAvatar})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "100px",
    minHeight: "100px",
    margin: "1.5rem"
  },

  questionSection: {
    borderLeft: "1px solid black",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1.5rem"
  },
  question: {
    minWidth: "150px",
    minHeight: "100px",
    width: "100%",
    height: "45%",
    marginBottom: "1rem",
    padding: "1rem"
  },
  popularQuestion: {
    backgroundColor: "#80bdbd"
  },
  progressContainer: {
    width: "100%",
    height: "2rem",
    border: "1px solid #025050",
    borderRadius: "4px",
    marginTop: "1rem",
    textAlign: "center",
    lineHeight: "2rem"
  },
  progress: {
    backgroundColor: "teal",
    width: "30%",
    height: "100%"
  },
  yourVote: {
    // position: "absolute",
    // width: "3rem",
    // height: "3rem",
    // borderRadius: "100%"
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function ResultCard() {
  const classes = useStyles();

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
            Superman asks
          </Typography>
        </section>
        <section className={classes.cardBody}>
          <Paper className={classes.avatarSection} />
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
            <Paper className={classes.question}>
              <Typography align="left" variant="subtitle2" component="p">
                Would you rather wrestle a bear?
              </Typography>
              <div className={classes.progressContainer}>
                <div className={classes.progress}>30%</div>
              </div>
              <Typography align="center" variant="subtitle2" component="p">
                3 out of 10 votes
              </Typography>
            </Paper>
            {/*  */}
            <Paper className={`${classes.question} ${classes.popularQuestion}`}>
              <Typography align="left" variant="subtitle2" component="p">
                Would you rather wrestle a Donald Trump?
              </Typography>
              <div className={classes.progressContainer}>
                <div className={classes.progress} style={{ width: "70%" }}>
                  70%
                </div>
              </div>
              <Typography align="center" variant="subtitle2" component="p">
                7 out of 10 votes
              </Typography>

              <div className={classes.yourVote}>
                <HowToVoteRounded style={{ marginRight: "0.5rem" }} />

                <Typography
                  align="center"
                  variant="subtitle2"
                  component="p"
                  color="primary"
                  // style={{ color: "red" }}
                >
                  -Your vote-
                </Typography>
              </div>
            </Paper>
          </section>
        </section>
      </Paper>
    </div>
  );
}
