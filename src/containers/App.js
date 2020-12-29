import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MarketDetail from "../components/MarketDetail";
import Home from "../components/Home";
/* Style */
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/markets/:id"
            render={(props) => <MarketDetail {...props} />}
          ></Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
