import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Components/PrivateRoutes';

import { GlobalStyle } from './globalStyle';
import LoginPage from './Pages/Sign/Login';
import RegisterPage from './Pages/Sign/Register';
import HomePage from './Pages/HomePage';
import ListPage from './Pages/ListPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/list" component={ListPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
