import CartElement from "components/cart-element/CartElement";
import Payment from "components/payment/Payment";
import Box from "@mui/material/Box";
import axios from "axios";

const Cart = ({ carrello = [], reduceQuantity, addQuantity, deletePizza }) => {
  const prezzoFinale = carrello.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const order = () => {
    console.log(carrello);
    axios({
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      method: "post",
      url: "http://localhost:8080/orders",
      data: [...carrello],
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Il tuo ordine è stato elaborato con successo");
        }
      })
      .catch((err) => {
        alert("Il tuo ordine non è stato elaborato con successo");
      });
  };

  return (
    <Box display="grid" gridTemplateColumns="3fr 1fr" gap={4}>
      {carrello.length > 0 ? (
        <>
          <div>
            {carrello.sort().map((item) => {
              return (
                <CartElement
                  key={item.id}
                  {...item}
                  reduceQuantity={reduceQuantity}
                  addQuantity={addQuantity}
                  deletePizza={deletePizza}
                />
              );
            })}
          </div>
          <Payment prezzoFinale={prezzoFinale} order={order} />
        </>
      ) : (
        <>Carrello vuoto</>
      )}
    </Box>
  );
};

export default Cart;
