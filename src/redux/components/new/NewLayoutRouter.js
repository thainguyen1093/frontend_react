import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import ForgotPassword from "./ForgotPassword";
import RegisterContainer from "../../containers/new/RegisterContainer";

const NewLayoutRouter = () => {
  let {path, url} = useRouteMatch();
  return (
      <Switch>
        <Route path={`${path}/login`}>
          <Login/>
        </Route>
        <Route path={`${path}/register`}>
          <RegisterContainer/>
        </Route>
        <Route path={`${path}/forgot-password`}>
          <ForgotPassword/>
        </Route>
        <Route path={`${path}/logout`}>
          <Logout/>
        </Route>
        <Route path={`${path}`}>
          <Redirect to={`${path}/login`}/>
        </Route>
      </Switch>
  );
}

export default NewLayoutRouter;