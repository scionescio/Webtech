import React from "react";
import styles from "./styles";
import injectSheet from "react-jss";
import HeaderAfrica from "./HeaderAfrica";
import pic from "./image/a-viertel-2.jpg";

const WeddingBars = ({ classes }) => (
  <div className={classes.background}>
    <HeaderAfrica />
    <div className={classes.fcontainer}>
      <div className={classes.fitem}>
        <div className={classes.finnercontainer}>
          <div className={classes.fbar}>Bar</div>
          <img className={classes.fimage} src={pic} alt="Wiki" />
          <div className={classes.finfo}>Adresse: Telefonnummer: </div>
        </div>
      </div>
      <div className={classes.fitem}>
        <div className={classes.finnercontainer}>
          <div className={classes.fbar}>Bar</div>
          <img className={classes.fimage} src={pic} alt="Wiki" />
          <div className={classes.finfo}>Adresse: Telefonnummer: </div>
        </div>
      </div>
      <div className={classes.fitem}>
        <div className={classes.finnercontainer}>
          <div className={classes.fbar}>Bar</div>
          <img className={classes.fimage} src={pic} alt="Wiki" />
          <div className={classes.finfo}>Adresse: Telefonnummer: </div>
        </div>
      </div>
    </div>
  </div>
);

export default injectSheet(styles)(WeddingBars);
