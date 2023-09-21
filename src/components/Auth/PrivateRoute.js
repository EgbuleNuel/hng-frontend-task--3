import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user !== null ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}

export default PrivateRoute;
