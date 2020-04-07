import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuIcon,
} from "@material-ui/core";
import { LOG_OUT } from "../../store/actions/usersActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users.authUser);

  const handleLogOut = () => {
    dispatch({
      type: LOG_OUT,
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {auth && (
            <>
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
