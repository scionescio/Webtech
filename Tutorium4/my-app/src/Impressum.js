import React from "react";
import styles from "./styles";
import injectSheet from "react-jss";
import HeaderAfrica from "./HeaderAfrica";
import Iframe from "react-iframe";

const Impressum = ({ classes }) => (
  <div className={classes.background}>
    <HeaderAfrica />
    <div>
      <Iframe
        width="200"
        height="100"
        url="https://www.youtube.com/embed/i3w8ncSViTc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
);

export default injectSheet(styles)(Impressum);
