import React from "react";
import { useSelector } from "react-redux";
import { Typography, makeStyles, Paper } from "@material-ui/core";
import placeHolderAvatar from "../../assets/avatars/placeholder.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column",
    padding: "1rem",
  },
  playerCard: {
    // minWidth: "50vw",
    // minHeight: "50vh",
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  playerCard__avatar: {
    borderRadius: "100%",
    backgroundImage: `url(${placeHolderAvatar})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "100px",
    minHeight: "100px",
    margin: "1rem",
  },
  playerCard__details: {
    display: "flex",
    padding: "0 1rem 0 1rem",
    flexFlow: "column",
    margin: "1rem",
  },
  playerCard__score: {
    display: "flex",
    flexFlow: "column",
    minHeight: "100px",
    minWidth: "100px",
    alignItems: "center",
    margin: "1rem",
  },
  playerCard__score__header: {
    backgroundColor: "gold",
    width: "100%",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    textAlign: "center",
  },
  playerCard__score__footer: {
    margin: "auto",
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
    fontWeight: "bold",
  },
});

const Score = ({ score }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.playerCard__score}>
      <section className={classes.playerCard__score__header}>
        <Typography variant="h6" component="p">
          Score
        </Typography>
      </section>
      <section className={classes.playerCard__score__footer}>
        <Paper className={classes.playerCard__score__footer_badge}>
          {score}
        </Paper>
      </section>
    </Paper>
  );
};

export default function Leaderboard(props) {
  const classes = useStyles();
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const formatedUsers = Object.values(users).sort((a, b) => b.score - a.score);
  // console.log(formatedUsers);

  // var items = [
  //   { name: 'Edward', value: 21 },
  //   { name: 'Sharpe', value: 37 },
  //   { name: 'And', value: 45 },
  //   { name: 'The', value: -12 },
  //   { name: 'Magnetic', value: 13 },
  //   { name: 'Zeros', value: 37 }
  // ];

  // // sort by value
  // items.sort(function (a, b) {
  //   return a.value - b.value;
  // });

  return (
    <div className={classes.root}>
      {formatedUsers.map((user) => (
        <Paper className={classes.playerCard} key={user.id}>
          <Paper
            className={classes.playerCard__avatar}
            elevation={3}
            style={{ backgroundImage: `url(${user.avatarURL})` }}
          />
          <Paper className={classes.playerCard__details}>
            <Typography variant="h5" component="h1">
              {user.name}
            </Typography>
            <Typography variant="body1" component="p">
              answered questions:
              <span style={{ float: "right", marginLeft: "1.5rem" }}>
                {Object.keys(user.answers).length}
              </span>
            </Typography>
            <hr style={{ width: "100%" }} />
            <Typography variant="body1" component="p">
              created questions:
              <span style={{ float: "right", marginLeft: "1.5rem" }}>
                {user.questions.length}
              </span>
            </Typography>
          </Paper>
          <Score score={user.score} />
        </Paper>
      ))}
    </div>
  );
}
