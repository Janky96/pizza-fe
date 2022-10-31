import styles from "./Payment.module.css";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const Payment = () => {
  const metodiDiPagamentoArray = ["maestro", "visa"];
  const [metodiDiPagamentoActive, setMetodiDiPagamentoActive] = useState(
    new Array(metodiDiPagamentoArray.length).fill(false)
  );

  const metodoDiPagamentoClickHandler = (index) => {
    let newArray = new Array(metodiDiPagamentoArray.length).fill(false);
    newArray[index] = true;
    setMetodiDiPagamentoActive(newArray);
  };

  const metodiDiPagamento = metodiDiPagamentoArray.map((metodo, index) => (
    <img
      className={`${styles["icon"]} ${
        styles[metodiDiPagamentoActive[index] ? "" : "icon--inactive"]
      }`}
      src={require(`images/icons/${metodo}.png`)}
      alt={metodo}
      onClick={() => {
        metodoDiPagamentoClickHandler(index);
      }}
    />
  ));

  return (
    <section className={styles["sezione"]}>
      <Typography
        variant="h2"
        component="h2"
        color="#fff"
        sx={{ paddingTop: "10rem" }}
      >
        Dettagli Carta
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        color="#fff"
        sx={{ paddingTop: "10rem" }}
      >
        Seleziona Carta
      </Typography>
      <div className={styles["icon-container"]}>{metodiDiPagamento}</div>
      {metodiDiPagamentoActive.includes(true) && (
        <TextField
          required
          id="outlined"
          label="Numero Carta"
          color="white"
          focused
          sx={{ paddingTop: "2rem" }}
        />
      )}
    </section>
  );
};

export default Payment;
