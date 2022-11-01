import CartElement from "components/cart-element/CartElement";
import Payment from "components/payment/Payment";
import Box from "@mui/material/Box";

const Cart = () => {
  return (
    <Box display="grid" gridTemplateColumns="3fr 1fr" gap={4}>
      <div>
        <CartElement />
      </div>
      <Payment />
    </Box>
  );
};

export default Cart;
