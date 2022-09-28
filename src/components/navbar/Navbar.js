import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import styles from "./Navbar.module.css";

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
        <Stack sx={{ flexDirection: "row", gap: "3rem" }}>
          <Button variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <h6>Storia</h6>
          </Button>
          <Button variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <h6>Ingredienti</h6>
          </Button>
          <Button variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <h6>Pizze</h6>
          </Button>
          <Button variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <h6>Carrello</h6>
          </Button>
        </Stack>
        <Button variant="h4" color="secondary" onClick={logout}>
          <h6>Logout</h6>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
