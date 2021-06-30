import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Init from "../components/Init";
import Kitchen from "../components/Kitchen";
import Waiter from "../components/Waiter";
import NotFound from '../components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Init} />
        <Route exact path="/kitchen" component={Kitchen} />
        <Route exact path="/waiter" component={Waiter} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
