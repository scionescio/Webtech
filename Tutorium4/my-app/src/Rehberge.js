import React from "react";
import styles from "./styles";
import injectSheet from "react-jss";
import HeaderAfrica from "./HeaderAfrica";

const Rehberge = ({ classes }) => (
  <div className={classes.background}>
    <HeaderAfrica />
    <article className={classes.form}>
      <h2 className={classes.header}>About</h2>
    </article>
  </div>
);

export default injectSheet(styles)(Rehberge);
