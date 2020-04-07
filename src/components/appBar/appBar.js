import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { LOG_OUT } from "../../store/actions/usersActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "flex-end",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  authUserIcon: {
    display: "flex",
    flexGrow: "1",
  },
  authUserText: {
    margin: "0",
    padding: "0 1rem",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const auth = users.authUser;
  const handleLogOut = () => {
    dispatch({
      type: LOG_OUT,
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {auth && (
            <>
              <div className={classes.authUserIcon}>
                <AccountCircle />
                <p className={classes.authUserText}>{users.users[auth].name}</p>
              </div>
              <Link to="/" className={classes.link}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/leaderboard" className={classes.link}>
                <Button color="inherit">Leaderboard</Button>
              </Link>
              <Link to="/add" className={classes.link}>
                <Button color="inherit">New Question</Button>
              </Link>
              <Button color="inherit" onClick={handleLogOut}>
                LogOut
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
