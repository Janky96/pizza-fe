import styles from "./Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from 'axios';

const Login = ({ login }) => {
  const [viewLoginButton, setViewLoginButton] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    const url = 'http://localhost:8080/authenticate';
    axios({
      method: 'post',
      url: url,
      data: {
        username: email,
        password: password
      }
    }).then(res => {
      localStorage.setItem("token", res.data.token);
      if(res.status === 200) {
        login();
      }
    });
  };

  const registrationHandler = () => {
    const url = 'http://localhost:8080/register';
    axios({
      method: 'post',
      url: url,
      data: {
        username: email,
        password: password
      }
    }).then(res => {
      if(res.status === 200) {
        alert("Utenza creata con successo");
      }
    });
  }

  return (
    <div className={styles["home"]}>
      <img
        src={require("../../images/logo.jpg")}
        alt="logo"
        className={styles["logo"]}
      />
      <div className={styles["login"]}>
        <TextField
          label="Email"
          error={emailError ? "Email non valida" : null}
          onChange={emailHandler}
        />
        <TextField
          label="Password"
          type="password"
          onChange={passwordHandler}
        />
        {viewLoginButton ? (
          <Button
            variant="contained"
            sx={{ width: 120, height: 40 }}
            onClick={loginHandler}
          >
            <h6>Login</h6>
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              width: 120,
              height: 40,
            }}
            onClick={registrationHandler}
          >
            <h6>Register</h6>
          </Button>
        )}
        <span
          onClick={() => setViewLoginButton(!viewLoginButton)}
          className={styles["change-action"]}
        >
          {viewLoginButton ? "Not registered yet?" : "Already Registered?"}
        </span>
      </div>
      <img
        src={require("../../images/home.jpg")}
        alt="pizza home"
        className={styles["pizza-home-img"]}
      />
    </div>
  );
};

export default Login;
