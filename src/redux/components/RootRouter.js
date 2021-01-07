import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from "./home/Home";
import UserLayout from "./user/UserLayout";

import UserCreateContainer from "../containers/user/UserCreateContainer";
import NewLayout from "./new/NewLayout";

const RootRouter = () => (
    <Switch>
      <Route path="/new">
        <NewLayout/>
      </Route>
      <Route path="/user/create">
        <UserCreateContainer/>
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