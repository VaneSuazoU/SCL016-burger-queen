import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Init from "../pages/Init";
import Kitchen from "../pages/Kitchen";
import Waiter from "../pages/Waiter";
import Table from "../pages/Table";
import NotFound from "../pages/NotFound";
import productsMenu from '../data/menu.json';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Init} />
        <Route exact path="/kitchen" component={Kitchen} />
        <Route exact path="/waiter" component={Waiter} />
        <Route exact path="/table">
          <Table productsMenu={productsMenu}/>
          </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
