import Navbar from "../navbar/Navbar";
import data from "../../data";
import CardPizza from "../card-pizza/CardPizza";
import styles from "./Home.module.css";
import Story from "../story/Story";

const Home = ({ logout }) => {
  // const data = [
  //   {
  //     id: 1,
  //     title: "Pizza Margherita",
  //     description: "La pizza originale",
  //     image: "margherita",
  //   },
  //   {
  //     id: 2,
  //     title: "Pizza Diavola",
  //     description: "La pizza originale",
  //     image: "diavola",
  //   },
  //   {
  //     id: 3,
  //     title: "Pizza Quattro stagioni",
  //     description: "La pizza originale",
  //     image: "quattro-stagioni",
  //   },
  // ];

  return (
    <>
      <Navbar logout={logout} />
      <div className={styles["container"]}>
        <div className={styles["pizza"]}>
          {data.map((pizza) => {
            return <CardPizza {...pizza} />;
          })}
        </div>
        {/* <Story /> */}
      </div>
    </>
  );
};

export default Home;
