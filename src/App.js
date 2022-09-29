import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Story from "./components/story/Story";
import CardPizza from "./components/card-pizza/CardPizza";
import "./App.css";
import { useState } from "react";

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
        <Login login={loginHandler} />
      ) : (
        <Home logout={logoutHandler} />
      )}
    </div>
  );
}

export default App;
