import Navbar from "../navbar/Navbar";
// import data from "../../data";
import CardPizza from "../card-pizza/CardPizza";
import styles from "./Home.module.css";
import Story from "../story/Story";

const Home = ({ logout }) => {
  const data = [
    {
      id: 1,
      title: "Pizza Margherita",
      description: "La pizza originale",
      image: "margherita",
    },
    {
      id: 2,
      title: "Pizza Diavola",
      description: "La pizza originale",
      image: "diavola",
    },
  ];

  return (
    <>
      <Navbar logout={logout} />
      <div className={styles["container"]}>
        {/* {data.map((pizza) => {
          return <CardPizza {...pizza} />;
        })} */}
        <Story />
      </div>
    </>
  );
};

export default Home;
