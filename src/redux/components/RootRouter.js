import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./home/Home";
import UserLayout from "./user/UserLayout";
import UserCreate from "./user/UserCreate";

const RootRouter = () => (
    <Switch>
      <Route path="/user/create">
        <UserCreate/>
      </Route>
      <Route path="/user">
        <UserLayout/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
)

export default RootRouter;