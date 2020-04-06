import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
} from "@material-ui/core";
import heroImage from "../../assets/hero-logo.png";
import { signInUser } from "../../store/actions/usersActions";
import { useDispatch } from "react-redux";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexFlow: "column",
    minWidth: "60%",
    minHeight: "50vh",
    marginTop: "1rem",
  },
  header: {
    backgroundColor: "gold",
    // borderRadius is set to the same value of parent (<Paper>)
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottom: "2px solid black",
  },
  signSection: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    marginTop: "1rem",
  },
  formControl: {
    margin: "1rem 0",
  },
  select: {
    minWidth: "10rem",
  },
});

export default function LoginScreen(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = React.useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleLogIn = () => {
    if (user) {
      props.changeTab(); //change tab to homescreen
      history.push("home");
      dispatch(signInUser(user));
    } else {
      alert("Please Select a User");
    }
  };

  return (
    <div>
      <Paper className={classes.root}>
        <section className={classes.header}>
          <Typography align="center" variant="h4" component="h1">
            Wellcome to the Would You Rather App
          </Typography>
          <Typography align="center" variant="subtitle1" component="p">
            please Sign in to continue
          </Typography>
        </section>
        <section className={classes.signSection}>
          <img src={heroImage} alt="" />
          {!props.loadingUsers ? (
            <>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="select-user">User</InputLabel>
                <Select
                  labelId="select-user"
                  className={classes.select}
                  value={user}
                  onChange={handleChange}
                  label="Age"
                >
                  {props.users &&
                    props.users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                style={{ marginBottom: "1rem" }}
                onClick={handleLogIn}
              >
                Sign In
              </Button>
            </>
          ) : (
            <LinearProgress
              style={{ width: "90%", margin: "2rem", height: "0.5rem" }}
            />
          )}
        </section>
      </Paper>
    </div>
  );
}
