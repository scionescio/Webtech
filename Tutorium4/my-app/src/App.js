import React from "react";
import pic from "./image/a-viertel-1.jpg";
import pic2 from "./image/a-viertel-2.jpg";
import styles from "./styles";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

const App = ({ classes }) => (
  <div>
    <header>
      <Link to="/" className={classes.header}>
        KIEZAPP Afrikanisches Viertel
      </Link>
    </header>
    <div className={classes.outerWrapper}>
      <Link to="/" className={classes.header2}>
        Intro
      </Link>
      <Link to="/Rehberge" className={classes.header2}>
        Rehberge
      </Link>
    </div>
    <article className={classes.form}>
      <img className={classes.image} src={pic} alt="Wiki" />
      <img className={classes.image} src={pic2} alt="Wiki" />
      <h2 className={classes.header}>About</h2>
      <div>
        The Afrikanisches Viertel (English: African Quarter) is a neighborhood
        in Wedding, a locality of Mitte, Berlin, Germany. It is bounded by
        Müllerstraße, Seestraße, Volkspark Rehberge, Goethepark, and the border
        with the neighboring borough of Reinickendorf. A large number of streets
        have names related to Africa, particularly parts of Africa that were
        involved in the German colonization of Africa. These include
        Afrikanische Straße, Damara Straße, Dualastraße, Ghanastraße,
        Guineastraße, Kameruner Straße, Kongostraße, Lüderitzstraße,
        Mohasistraße, Otawistraße, Petersallee, Sambesistraße, Sansibarstraße,
        Senegalstraße, Swakopmunder Straße, Tangastraße, Togostraße,
        Transvaalstraße, Ugandastraße, Usambarastraße, and Windhuker Straße,
        along with Nachtigalplatz. -- Wikipedia
      </div>
    </article>
  </div>
);

export default injectSheet(styles)(App);
