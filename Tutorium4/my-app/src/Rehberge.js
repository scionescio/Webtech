import React from "react";
import styles from "./styles";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

const Rehberge = ({ classes }) => (
  <div>
    <header>
      <Link to="/" className={classes.header}>
        KIEZAPP Afrikanisches Viertel
      </Link>
    </header>
    <Link to="/" className={classes.header2}>
      Intro
    </Link>
    <Link to="/Rehberge" className={classes.header2}>
      Rehberge
    </Link>
    <article className={classes.form}>
      <h2 className={classes.header}>About</h2>
      <div>
        Volkspark Rehberge is a public park in Wedding, a locality of Mitte,
        Berlin, Germany. The park was created and constructed from 1922–1929.
        The park covers approximately 78 hectares (190 acres). Together with
        Goethepark, which is located immediately south-east of the park, the
        total park landscape is approximately 115 hectares (280 acres). To the
        south-west is the Plötzensee and its surrounding park. The park borders
        on the Afrikanisches Viertel. In addition to large meadows and
        pedestrian and bicycle paths, the park also offers animal enclosures,
        playgrounds, a toboggan run with a 20 metres (66 ft) height difference,
        sports fields, concessions, and an open-air theatre. Since 1953,
        portions of the parks have been designated as a protected nature
        area.[2] The landscape of the park dates back to the Last Glacial
        Maximum (ca. 20,000 years ago), containing inland dunes and a
        post-glacial iceway, which is now a chain of three long, narrow lakes.
        The park also contains several larger sporting areas. Stadion Rehberge
        is the home stadium for BSC Rehberge 1945, a Berlin sports club. The
        park also lends its name to the nearby subway station Rehberge.
      </div>
    </article>
  </div>
);

export default injectSheet(styles)(Rehberge);
