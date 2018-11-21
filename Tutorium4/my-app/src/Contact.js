import React from "react";
import styles from "./styles";
import injectSheet from "react-jss";
import HeaderAfrica from "./HeaderAfrica";

const Contact = ({ classes }) => (
  <div>
    <HeaderAfrica />
    <div className={classes.form}>
      <div className={classes.outerWrapper}>
        <div className={classes.innerWrapper}>
          <form>
            <p>
              <label className={classes.skill} />
              <select id="gender" className={classes.select} require="true">
                <option className={classes.select} value="Mr">
                  Mr
                </option>
                <option className={classes.select} value="Mrs">
                  Mrs
                </option>
              </select>
            </p>
            <label />
            <input
              type="text"
              className={classes.inputAndOption}
              placeholder="Name"
              require="true"
            />
            <p>
              <label />
              <input
                type="text"
                className={classes.inputAndOption}
                placeholder="Email"
                require="true"
              />
            </p>
            <p>
              <label />
              <input
                type="text"
                className={classes.inputAndOption}
                onChange={autoComplete}
                placeholder="Borough"
              />
            </p>
            <p>
              <label />
              <input
                type="text"
                className={classes.inputAndOption}
                placeholder="Telephone Number"
              />
            </p>
            <p>
              <label />
              <input
                type="text"
                className={classes.inputAndOption}
                placeholder="Subject"
                require="true"
              />
            </p>
            <p>
              <label />
              <textarea
                type="text"
                className={classes.inputAndOption}
                placeholder="Content"
                require="true"
              />
            </p>
            <button type="button" className={classes.button}>
              Submit
            </button>
            <button type="button" className={classes.button}>
              Return
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const autoComplete = event => {
  const incomingWord = event.target.value || "";
  const foundBorough =
    boroughNames.filter(x =>
      x.toUpperCase().startsWith(incomingWord.toUpperCase())
    )[0] || "";
  console.log(foundBorough);
  return foundBorough;
};

const boroughNames = [
  "Mitte",
  "Friedrichshain-Kreuzberg",
  "Pankow",
  "Charlottenburg-Wilmersdorf",
  "Spandau",
  "Steglitz-Zehlendorf",
  "Tempelhof-Schöneberg",
  "Neukölln",
  "Treptow-Köpenick",
  "Marzahn-Hellersdorf",
  "Lichtenberg",
  "Reinickendorf"
];

export default injectSheet(styles)(Contact);
