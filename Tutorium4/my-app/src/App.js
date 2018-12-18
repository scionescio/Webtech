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
        <table>
          <tbody classesName={classes.cell}>
            <tr>
              <td className={classes.cellLeft}>Wedding</td>
              <td className={classes.cellRight}>geil</td>
            </tr>
            <tr>
              <td className={classes.cellLeft}>Wedding</td>
              <td className={classes.cellRight}>geil</td>
            </tr>
            <tr>
              <td className={classes.cellLeft}>Wedding</td>
              <td className={classes.cellRight}>geil</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
    <Footer />
  </div>
);

export default injectSheet(styles)(App);
