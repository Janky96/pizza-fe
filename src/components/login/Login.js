import styles from "./Login.module.css";
import { Button, TextField, FormControl } from "@mui/material";
import { useState } from "react";
import axios from "axios";

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

  const submitHandler = (event) => {
    event.preventDefault();
    if (viewLoginButton) {
      loginHandler();
    } else {
      registrationHandler();
    }
  };

  const loginHandler = () => {
    const url = "http://localhost:8080/authenticate";
    axios({
      method: "post",
      url: url,
      data: {
        username: email,
        password: password,
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.status === 200) {
          login();
        }
      })
      .catch((error) => {
        alert("Dati non corretti");
      });
  };

  const registrationHandler = () => {
    const url = "http://localhost:8080/register";
    axios({
      method: "post",
      url: url,
      data: {
        username: email,
        password: password,
      },
    }).then((res) => {
      if (res.status === 200) {
        alert("Utenza creata con successo");
      }
    });
  };

  return (
    <div className={styles["home"]}>
      <img
        src={require("../../images/logo.jpg")}
        alt="logo"
        className={styles["logo"]}
      />
      <form
        className={styles["login"]}
        onSubmit={(event) => submitHandler(event)}
      >
        <TextField
          label="Email"
          onChange={emailHandler}
          inputProps={{ style: { fontSize: "1.6rem" } }} // font size of input text
          InputLabelProps={{ style: { fontSize: "1.6rem" } }} // font size of input label
        />
        <TextField
          label="Password"
          type="password"
          onChange={passwordHandler}
          inputProps={{ style: { fontSize: "1.6rem" } }} // font size of input text
          InputLabelProps={{ style: { fontSize: "1.6rem" } }} // font size of input label
        />
        {viewLoginButton ? (
          <Button
            variant="contained"
            sx={{ width: 120, height: 40, fontSize: "2rem" }}
            type="submit"
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
            type="submit"
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
      </form>
      <img
        src={require("../../images/home.jpg")}
        alt="pizza home"
        className={styles["pizza-home-img"]}
      />
    </div>
  );
};

export default Login;
