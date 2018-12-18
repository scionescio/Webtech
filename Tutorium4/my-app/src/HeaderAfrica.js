import React from "react";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";
import styles from "./styles";

const HeaderAfrica = ({ classes }) => (
  <div className={classes.backgroundHeader}>
    <Link to="/" className={classes.headerBig}>
      Afrikanisches Viertel
    </Link>
    <div className={classes.outerWrapper}>
      <Link to="/" className={classes.navigation}>
        Intro
      </Link>
      <Link to="/rehberge" className={classes.navigation}>
        Rehberge
      </Link>
      <Link to="/bars" className={classes.navigation}>
        Bars
      </Link>
      <Link to="/impressum" className={classes.navigation}>
        Impressum
      </Link>
    </div>
  </div>
);

export default injectSheet(styles)(HeaderAfrica);
