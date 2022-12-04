import styles from "./Payment.module.css";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Payment = ({ prezzoFinale, order }) => {
  const metodiDiPagamentoArray = ["maestro", "visa"];
  const [metodiDiPagamentoActive, setMetodiDiPagamentoActive] = useState(
    new Array(metodiDiPagamentoArray.length).fill(false)
  );
  const [dateValue, setDateValue] = useState("");

  const metodoDiPagamentoClickHandler = (index) => {
    let newArray = new Array(metodiDiPagamentoArray.length).fill(false);
    newArray[index] = true;
    setMetodiDiPagamentoActive(newArray);
  };

  const metodiDiPagamento = metodiDiPagamentoArray.map((metodo, index) => (
    <img
      key={index}
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
        sx={{ paddingTop: "3rem" }}
      >
        Pagamento
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        color="#fff"
        sx={{ paddingTop: "4rem" }}
      >
        Seleziona Carta
      </Typography>
      <div className={styles["icon-container"]}>{metodiDiPagamento}</div>
      {metodiDiPagamentoActive.includes(true) && (
        <Stack spacing={4} sx={{ margin: "0 auto", width: "80%" }}>
          <TextField
            required
            id="outlined"
            label="Numero Carta"
            color="white"
            focused
            sx={{
              marginTop: "2rem",
              input: { color: "#fff" },
            }}
          />
          <Box display="grid" gridTemplateColumns="3fr 1fr" gap={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="DD/MM/YYYY"
                color="white"
                value={dateValue}
                onChange={(newValue) => {
                  setDateValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="white"
                    focused
                    sx={{
                      input: { color: "#fff" },
                      svg: { color: "#fff" },
                      fontSize: "1rem",
                    }}
                  />
                )}
                focused
              />
            </LocalizationProvider>
            <TextField
              id="outlined"
              label="CVV"
              type="number"
              color="white"
              focused
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                input: {
                  /* jshint ignore:start*/
                  color: "#fff",
                  "&[type=number]": {
                    "-moz-appearance": "textfield",
                  },
                  "&::-webkit-outer-spin-button": {
                    "-webkit-appearance": "none",
                    margin: 0,
                  },
                  "&::-webkit-inner-spin-button": {
                    "-webkit-appearance": "none",
                    margin: 0,
                  },
                  /* jshint ignore:end */
                },
              }}
            />
          </Box>
          <Typography
            variant="h4"
            component="h4"
            color="#fff"
            sx={{ paddingTop: "4rem" }}
          >
            €{prezzoFinale}
          </Typography>
          <Button
            sx={{ border: "solid 1px #E54E20" }}
            onClick={() => {
              order();
            }}
          >
            Ordina ora
          </Button>
        </Stack>
      )}
    </section>
  );
};

export default Payment;
