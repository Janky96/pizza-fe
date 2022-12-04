import CardPizza from "../components/card-pizza/CardPizza";
import styles from "./Shop.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Shop = ({ addPizzaToCart }) => {
  const [pizze, setPizze] = useState([]);

  useEffect(() => {
    axios({
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      method: "get",
      url: "http://localhost:8080/pizza",
    }).then((res) => {
      if (res.status === 200) {
        setPizze(res.data);
      }
    });
  }, []);

  return (
    <div className={styles["pizza"]}>
      {pizze.map((pizza) => {
        return (
          <CardPizza key={pizza.id} {...pizza} addToCart={addPizzaToCart} />
        );
      })}
    </div>
  );
};

export default Shop;
