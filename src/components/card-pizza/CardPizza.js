import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CardPizza = ({ id, image, name, ingredients, price, addToCart }) => {

  const compraHandler = () => {
    addToCart(id)
  }

  return (
    <Card sx={{ maxWidth: 345, paddingBottom: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <CardHeader title={`Pizza ${name}`}/>
        <CardMedia
          component="img"
          height="194"
          image={require("../../images/pizze/" + image + ".jpg")}
          alt={image}
        />
        <CardContent>
          {ingredients.filter((ingredient) => (ingredient !== "impasto")
            ).map((ingredient) => {
              return(
              <Typography variant="subtitle1" color="text.secondary"
                sx={{ textAlign: "left"}}>
                -{ingredient}
              </Typography>)
            })
          }
          
        </CardContent>
      </div>
      <div>
        <Typography sx={{ fontSize: "20px", textAlign: "left", marginLeft: "20px"}}>€{price}</Typography>
        <Button variant="contained" onClick={compraHandler}>Compra</Button>
      </div>
    </Card>
  );
};

export default CardPizza;
