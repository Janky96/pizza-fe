import CardPizza from "../components/card-pizza/CardPizza";
import styles from "./Shop.module.css";
import { useState, useEffect } from "react";
import axios from 'axios'

const Shop = () => {
  const [pizze, setPizze] = useState([]);
  const [carrello, setCarrello] = useState([]);

  useEffect(() => {
    axios({
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      method: 'get',
      url: 'http://localhost:8080/pizza'
    }).then(res => {
      if(res.status === 200) {
        setPizze(res.data);
      }
    });
  }, []);

  const addPizzaToCart = (id) => {
    let pizzaAlreadyInCart = false;
    let newCarrello = carrello;
    for(let i = 0; i < newCarrello.length; i++) {
      let pizza = newCarrello[i];
      if(pizza.id === id) {
        pizza.quantity = pizza.quantity + 1;
        pizzaAlreadyInCart = true
        setCarrello(newCarrello)
      }
    }
    if(!pizzaAlreadyInCart) {
      newCarrello.push({
        id: id,
        quantity: 1
      })
    }
    console.log(carrello);
  }


  return (
    <div className={styles["pizza"]}>
       {pizze.map((pizza) => {
         return <CardPizza key={pizza.id} {...pizza} addToCart={addPizzaToCart}/>;
       })}
    </div>
  );
};

export default Shop;
