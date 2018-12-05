import React from "react";
import pic from "./image/a-viertel-2.jpg";
import styles from "./styles";
import injectSheet from "react-jss";
import HeaderAfrica from "./HeaderAfrica";
import Footer from "./Footer";

const App = ({ classes }) => (
  <div className={classes.background}>
    <HeaderAfrica />
    <article className={classes.form}>
      <img className={classes.image} src={pic} alt="Wiki" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur
        aut, enim neque blanditiis, fugit dolorum nemo eligendi quis nisi
        possimus natus quaerat, recusandae quidem? Reiciendis doloribus sunt
        incidunt repellat.
      </div>
    </article>
    <Footer />
  </div>
);

export default injectSheet(styles)(App);
