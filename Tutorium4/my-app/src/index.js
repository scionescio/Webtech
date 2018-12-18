import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Rehberge from "./Rehberge";
import Impressum from "./Impressum";
import WeddingBars from "./WeddingBars";
import Contact from "./Contact";
import * as serviceWorker from "./serviceWorker";

import { Switch, BrowserRouter, Route } from "react-router-dom";

var style = { backgroundColor: "#f6f6f6", width: "100%", height: "100%" };

ReactDOM.render(
  <div style={style}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Rehberge" component={Rehberge} />
        <Route exact path="/Bars" component={WeddingBars} />
        <Route exact path="/Impressum" component={Impressum} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
