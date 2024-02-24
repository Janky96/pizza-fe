import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Typography } from "@mui/material";

const Navbar = ({ logout }) => {
  return (
    <AppBar position="static" sx={{ position: "relative" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button>
          {" "}
          <img
            src={require("../../images/logo-withoutbg.png")}
            alt="logo"
            className={styles["logo"]}
          />
        </Button>
        <Stack
          className={styles["nav-bar"]}
          sx={{ flexDirection: "row", gap: "3rem" }}
        >
          <Button variant="h2" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/story">
              <Typography variant="h5">Storia</Typography>
            </NavLink>
          </Button>
          <Button variant="h2" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/shop">
              <Typography variant="h5">Pizze</Typography>
            </NavLink>
          </Button>
          <Button variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/cart">
              <Typography variant="h5">Carrello</Typography>
            </NavLink>
          </Button>
          <Button variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/orders">
              <Typography variant="h5">Ordini</Typography>
            </NavLink>
          </Button>
        </Stack>
        <Button variant="h4" color="secondary" onClick={logout}>
          <Typography variant="h5">Logout</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
