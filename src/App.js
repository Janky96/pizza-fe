import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Payment from "components/payment/Payment";

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
      {/* {!loggedIn ? (
        <Login login={loginHandler} />
      ) : (
        <Home logout={logoutHandler} />
      )} */}
      <Payment />
    </div>
  );
}

export default App;
