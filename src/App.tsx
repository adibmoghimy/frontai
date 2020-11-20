import './App.css';
import React from 'react';
import { Register } from './components/Register';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Plain from './components/layouts/Plain';
import { Login } from './components/Login';

const App = ({}) => {
  let routs = [
    {
      path: "/",
      exact: true,
      layout: Plain,
      component: Login,
    },
    {
      path: "/register",
      exact: true,
      layout: Plain,
      component: Register,
    }
  ]
  return(
    <Switch>
        {
          routs.map(rout => (
            <Route
              key={rout.path}
              path={rout.path}
              exact={rout.exact}
              component={(props: any) => (
                <rout.layout {...props}>
                  <rout.component {...props} />
                </rout.layout>
              )}
            />
          ))
        }
      </Switch>
  )
}

export default withRouter(App);