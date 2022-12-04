import { Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Story from "../story/Story";
import styles from "./Home.module.css";
import Shop from "../../pages/Shop";
import Cart from "pages/Cart";
import { useState } from "react";

const Home = ({ logout }) => {
  const [carrello, setCarrello] = useState([]);

  const addPizzaToCart = (id, name, image, price) => {
    let pizzaAlreadyInCart = false;
    let newCarrello = carrello;
    for (let i = 0; i < newCarrello.length; i++) {
      let pizza = newCarrello[i];
      if (pizza.id === id) {
        pizza.quantity = pizza.quantity + 1;
        pizza.price += price;
        pizzaAlreadyInCart = true;
        setCarrello(newCarrello);
      }
    }
    if (!pizzaAlreadyInCart) {
      newCarrello.push({
        id: id,
        name: name,
        image: image,
        originalPrice: price,
        price: price,
        quantity: 1,
      });
    }
  };

  const reduceQuantity = (id) => {
    let newCarrello = carrello.slice();
    for (let i = 0; i < newCarrello.length; i++) {
      let item = newCarrello[i];
      if (item.id === id && item.quantity !== 0) {
        newCarrello[i] = {
          ...item,
          quantity: item.quantity - 1,
          price: item.price - item.originalPrice,
        };
      }
    }
    setCarrello(newCarrello);
  };

  const addQuantity = (id) => {
    let newCarrello = carrello.slice();
    for (let i = 0; i < newCarrello.length; i++) {
      let item = newCarrello[i];
      if (item.id === id) {
        newCarrello[i] = {
          ...item,
          quantity: item.quantity + 1,
          price: item.price + item.originalPrice,
        };
      }
    }
    setCarrello(newCarrello);
  };

  const deletePizza = (id) => {
    let newCarrello = carrello.slice().filter((item) => item.id !== id);
    setCarrello(newCarrello);
  };

  return (
    <>
      <Navbar logout={logout} />
      <div className={styles["container"]}>
        <main>
          <Route path="/" exact>
            <Redirect to="/shop" />
          </Route>
          <Route path="/shop">
            <Shop addPizzaToCart={addPizzaToCart} />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/cart">
            <Cart
              carrello={carrello}
              reduceQuantity={reduceQuantity}
              addQuantity={addQuantity}
              deletePizza={deletePizza}
            />
          </Route>
        </main>
      </div>
    </>
  );
};

export default Home;
