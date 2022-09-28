import styles from "./Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Login = ({ login }) => {
  const [viewLoginButton, setViewLoginButton] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles["home"]}>
      <img
        src={require("../../images/logo.jpg")}
        alt="logo"
        className={styles["logo"]}
      />
      <div className={styles["login"]}>
        <TextField label="Email" onChange={emailHandler} />
        <TextField
          label="Password"
          type="password"
          onChange={passwordHandler}
        />
        {viewLoginButton ? (
          <Button
            variant="contained"
            sx={{ width: 120, height: 40 }}
            onClick={login}
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
