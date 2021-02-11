import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { Login, Register, Landing, Home } from "./pages";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => (
  <Router>
    <Switch>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </ChakraProvider>
      </Provider>
    </Switch>
  </Router>
);
