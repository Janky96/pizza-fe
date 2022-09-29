import styles from "./Story.module.css";

const Story = () => {
  return (
    <div className={styles["story-section"]}>
      <div className={styles["container"]}>
        <div>
          <div className={styles["titolo"]}>Perché noi</div>
          <p className={styles["paragrafo"]}>
            Crediamo che il cuore di ogni ristorante sia la cucina. La nostra
            pizzeria è aperta per tutti gli ospiti. Il modo in cui il cibo viene
            preparato è importante. E se potessi davvero vedere come viene
            creato il tuo piatto dai nostri chef? Puoi vederlo! Abbiamo una
            cucina a vista, il che significa che tutta l'azione è lì e puoi
            godertela quando sei seduto al tuo tavolo. Il nostro menù è
            versatile. Hai fantastici piatti di carne, insalate e pasta. Abbiamo
            le pizze? Certo che sì! In realtà ne abbiamo di davvero speciali.
            Vieni a provare!
          </p>
        </div>
        <img
          src={require("../../images/story/spaghetti.jpg")}
          alt="immagine spaghetti"
          className={styles["immagine"]}
        />
      </div>
      <div className={styles["container"]}>
        <img
          src={require("../../images/story/pizza-baking.jpg")}
          alt="immagine impasto"
          className={styles["immagine"]}
        />
        <div>
          <div className={styles["titolo"]}>Ideali</div>
          <p className={styles["paragrafo"]}>
            Fondata sullo spirito della famiglia, Pizzeria Paradiso evoca il
            calore che si prova a casa. La nostra visione era di lpoter mangiare
            della buona pizza in un ambiente amorevole, accogliente e "di casa".
            L'idea di creare un posto di lavoro carino, rispettoso e buono è
            alla base della Pizzeria "In Famiglia" e, ancora, guida il personale
            e influenza i nostri clienti. Alla Pizzeria "In Famiglia", le
            persone nella nostra comunità cambiano, ma la sensazione che la
            nostra comunità crea rimane fedele alla nostra visione. Vieni a
            sentirti a casa!
          </p>
        </div>
      </div>
      <div className={styles["container"]}>
        <div>
          <div className={styles["titolo"]}>Storia</div>
          <p className={styles["paragrafo"]}>
            Abbiamo scelto di creare questa attività in famiglia, per mantenere
            l’idea di unità e affetto tipico del nostro essere. Proveniamo da un
            piccolo paesino tra i monti, situato in provincia di Cosenza. La
            nostra idea iniziale è nata dalla grande passione per la pizza, che
            ci ha portato a diffondere la nostra arte in un piccolo paese in
            provincia di Pavia. Abbiamo iniziato con una piccola pizzeria
            d’asporto nel 2016, che fin da subito ha avuto successo. I prodotti
            della nostra terra e le tecniche di impasto hanno reso la nostra
            pizza soffice e gustosa.
          </p>
        </div>
        <img
          src={require("../../images/story/paesino.jpg")}
          alt="paesino"
          className={styles["immagine"]}
        />
      </div>
    </div>
  );
};

export default Story;
