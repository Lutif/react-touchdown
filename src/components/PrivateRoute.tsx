import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { AppStateType } from "../types";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const auth = useSelector((state: AppStateType) => state.auth);
  const authenticated = auth.isLoggedIn;

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
