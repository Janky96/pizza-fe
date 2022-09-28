import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CardPizza = ({ id, image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, paddingBottom: "1rem" }}>
      <CardHeader title={title} subheader={description} />
      <CardMedia
        component="img"
        height="194"
        image={require("../../images/pizze/" + image + ".jpg")}
        alt={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Button variant="contained">Compra</Button>
    </Card>
  );
};

export default CardPizza;
