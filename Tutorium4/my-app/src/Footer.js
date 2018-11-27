import React from "react";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";
import styles from "./styles";

const Footer = ({ classes }) => (
  <div className={classes.backgroundFooter}>
    <Link to="/contact" className={classes.navigationFooter}>
      Contact
    </Link>
  </div>
);

export default injectSheet(styles)(Footer);
