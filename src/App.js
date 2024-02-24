import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { Redirect } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginHandler = () => {
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <>
          <Redirect to="/shop" />
          <Login login={loginHandler} />
        </>
      ) : (
        <Home logout={logoutHandler} />
      )}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
