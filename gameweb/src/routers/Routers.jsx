import React from "react";
import { Switch, Route } from "react-router-dom";
import Detailpage from "../page/Detailpage";
import Homepage from "../page/Homepage";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/detail/:id">
        <Detailpage />
      </Route>
    </Switch>
  );
};

export default Routers;
