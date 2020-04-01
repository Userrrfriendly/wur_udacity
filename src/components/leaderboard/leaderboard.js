import React from "react";
import { Typography, makeStyles, Paper } from "@material-ui/core";
import rickAvatar from "../../assets/avatars/rick2.png";
import mortyAvatar from "../../assets/avatars/morty.png";
import jeryAvatar from "../../assets/avatars/jerry.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column",
    padding: "1rem"
  },
  playerCard: {
    // minWidth: "50vw",
    // minHeight: "50vh",
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  playerCard__avatar: {
    borderRadius: "100%",
    backgroundImage: `url(${mortyAvatar})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "100px",
    minHeight: "100px",
    margin: "1rem"
  },
  playerCard__details: {
    display: "flex",
    padding: "0 1rem 0 1rem",
    flexFlow: "column",
    margin: "1rem"
  },
  playerCard__score: {
    display: "flex",
    flexFlow: "column",
    minHeight: "100px",
    minWidth: "100px",
    alignItems: "center",
    margin: "1rem"
  },
  playerCard__score__header: {
    backgroundColor: "gold",
    width: "100%",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    textAlign: "center"
  },
  playerCard__score__footer: {
    margin: "auto"
  },
  playerCard__score__footer_badge: {
    borderRadius: "100%",
    backgroundColor: "#5700ff",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold"
  }
});

const Score = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.playerCard__score}>
      <section className={classes.playerCard__score__header}>
        <Typography variant="h6" component="p">
          Score
        </Typography>
      </section>
      <section className={classes.playerCard__score__footer}>
        <Paper className={classes.playerCard__score__footer_badge}> 10 </Paper>
      </section>
    </Paper>
  );
};

export default function Leaderboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.playerCard}>
        <Paper className={classes.playerCard__avatar} elevation={3} />
        <Paper className={classes.playerCard__details}>
          <Typography variant="h5" component="h1">
            Morty
          </Typography>
          <Typography variant="body1" component="p">
            answered questions:
            <span style={{ float: "right", marginLeft: "1.5rem" }}>5</span>
          </Typography>
          <hr style={{ width: "100%" }} />
          <Typography variant="body1" component="p">
            created questions:
            <span style={{ float: "right", marginLeft: "1.5rem" }}>5</span>
          </Typography>
        </Paper>
        <Score />
      </Paper>
      <Paper className={classes.playerCard}>
        <Paper
          className={classes.playerCard__avatar}
          elevation={3}
          style={{ backgroundImage: `url(${rickAvatar})` }}
        />
        <Paper className={classes.playerCard__details}>
          <Typography variant="h5" component="h1">
            Morty
          </Typography>
          <Typography variant="body1" component="p">
            answered questions:
            <span style={{ float: "right", marginLeft: "1.5rem" }}>5</span>
          </Typography>
          <hr style={{ width: "100%" }} />
          <Typography variant="body1" component="p">
            created questions:
            <span style={{ float: "right", marginLeft: "1.5rem" }}>5</span>
          </Typography>
        </Paper>
        <Score />
      </Paper>
      <Paper className={classes.playerCard}>
        <Paper
          className={classes.playerCard__avatar}
          elevation={3}
          style={{ backgroundImage: `url(${jeryAvatar})` }}
        />
        <Paper className={classes.playerCard__details}>
          <Typography variant="h5" component="h1">
            Morty
          </Typography>
          <Typography variant="body1" component="p">
            answered questions:
            <span style={{ float: "right", marginLeft: "1.5rem" }}>5</span>
          </Typography>
          <hr style={{ width: "100%" }} />
          <Typography variant="body1" component="p">
            created questions:
            <span style={{ float: "right", marginLeft: "1.5rem" }}>5</span>
          </Typography>
        </Paper>
        <Score />
      </Paper>
    </div>
  );
}
