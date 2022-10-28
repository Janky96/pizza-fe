import { Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Story from "../story/Story";
import styles from "./Home.module.css";
import Shop from "../../pages/Shop";

const Home = ({ logout }) => {
  return (
    <>
      <Navbar logout={logout} />
      <div className={styles["container"]}>
        <main>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
        </main>
      </div>
    </>
  );
};

export default Home;
