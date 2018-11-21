import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Rehberge from "./Rehberge";
import Impressum from "./Impressum";
import Contact from "./Contact";
import * as serviceWorker from "./serviceWorker";

import { Switch, BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Rehberge" component={Rehberge} />
      <Route exact path="/Impressum" component={Impressum} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
