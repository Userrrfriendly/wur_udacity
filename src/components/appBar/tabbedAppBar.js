import React, { useEffect } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Homescreen from "../homeScreen/homeScreen";
import QuestionCard from "../questionCard/questionCard";
import LoginScreen from "../loginScreen/login";

import { useDispatch, useSelector } from "react-redux";
// import { loadUserData } from "../../store/actions/usersActions";
import { loadInitialData } from "../../store/actions/sharedActions";
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "rebeccapurple",
    backgroundColor: "#f7f7f24d",
    height: "100%",
  },
  childrenWrapper: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
}));

export default function TabbedAppBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("login");
  let history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue.toString());
  };

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users.authUser);
  const loadingUsers = useSelector((state) => state.users.loadingUsers);
  const users = useSelector((state) => state.users.users);

  const usersArray = () => {
    const result = [];
    if (users) {
      for (let key in users) {
        result.push(users[key]);
      }
    }

    return result;
  };

  useEffect(() => {
    dispatch(loadInitialData());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="Log in" value="login" {...a11yProps("login")} />
          <Tab
            label="Home"
            value="home"
            {...a11yProps("home")}
            disabled={auth ? false : true}
          />
          <Tab
            label="question-card"
            value="question-card"
            {...a11yProps("question-card")}
            disabled={auth ? false : true}
          />
        </Tabs>
      </AppBar>
      <section className={classes.childrenWrapper}>
        {/* {props.children} */}
        <>
          <TabPanel value={value} index={"login"}>
            <Route path="/login">
              <LoginScreen
                loadingUsers={loadingUsers}
                users={usersArray()}
                changeTab={setValue.bind(this, "home")}
              />
            </Route>
          </TabPanel>
          <TabPanel value={value} index={"home"}>
            <Route path="/home">
              <Homescreen />
            </Route>
          </TabPanel>
          <TabPanel value={value} index={"question-card"}>
            <Route path="/question-card">
              <QuestionCard />
            </Route>
          </TabPanel>
          <Route path="/questions:id">
            <h1>matched route</h1>
          </Route>
        </>
      </section>
    </div>
  );
}
