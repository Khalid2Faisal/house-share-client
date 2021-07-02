import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Host, Listing, Listings, NotFound, User } from "./sections";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/host" component={Host} />
        <Route exact path="/listing/:id" component={Listing} />
        <Route exact path="/listings/:location?" component={Listings} />
        <Route exact path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
