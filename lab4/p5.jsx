import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Example from "./components/example/Example";
import States from "./components/states/States";
//hash router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/main.css";
ReactDOM.render(
  <Router>
    <div>
      <Header />
      <div className="link">
        <ul>
          <li>
            <Link to="/states">States</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/states" component={States} />
        <Route path="/example" component={Example} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("reactapp")
);
