import styles from "./Payment.module.css";
import Typography from '@mui/material/Typography';

const Payment = () => {


    return <section className={styles["sezione"]}>
        <Typography variant="h2" component="h2" color="#fff" sx={{ paddingTop: "15rem"}}>
            Dettagli Carta
        </Typography>
        <Typography variant="h3" component="h2" color="#fff" sx={{ paddingTop: "15rem"}}>
            Seleziona Carta
        </Typography>
        <div>
            <img src={require("images/icons/maestro.png")} alt="maestro" />
            <img src={require("images/icons/visa.png")} alt="visa" />
            <img src={require("images/icons/paypal.png")} alt="paypal" />
        </div>
    </section>
}

export default Payment;