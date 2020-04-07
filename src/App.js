import React, { useEffect } from "react";
import ButtonAppBar from "./components/appBar/appBar";
import Routes from "./components/routes";
import Login from "./components/loginScreen/login";
import { useSelector, useDispatch } from "react-redux";
import { loadInitialData } from "./store/actions/sharedActions";

function App() {
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

  const mainStyle = {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingTop: "1.25rem",
  };

  return (
    <div className="App">
      <ButtonAppBar />
      <main style={mainStyle}>
        {!auth && <Login loadingUsers={loadingUsers} users={usersArray()} />}
        {auth && <Routes></Routes>}
      </main>
    </div>
  );
}

export default App;
