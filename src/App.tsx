import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { Login, Register, Landing, Home } from "./pages";
import { PrivateRoute } from "./components";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
        </ChakraProvider>
      </Provider>
    </Switch>
  </Router>
);
