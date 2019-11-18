import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Route to="/" component={() => <h1>this is routes</h1>} />
    </Router>
  );
};

export default Routes;
