import styles from "./CartElement.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const CartElement = ({
  id,
  name,
  image,
  quantity = 0,
  reduceQuantity,
  addQuantity,
  deletePizza,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Stack direction="row" justifyContent="space-between">
        <CardMedia
          component="img"
          image={require("images/pizze/margherita.jpg")}
          // image={require(`images/pizze/${name}.jpg`)}
          alt={image}
          sx={{ height: "8rem", width: "8rem" }}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="#000" gutterBottom>
            Margherita
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={reduceQuantity}>
            <RemoveIcon />
          </Button>
          <span>{quantity}</span>
          <Button size="small" onClick={addQuantity}>
            <AddIcon />
          </Button>
          <Button size="small" onClick={deletePizza}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default CartElement;
