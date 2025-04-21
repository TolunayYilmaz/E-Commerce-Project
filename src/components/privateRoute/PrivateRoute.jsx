import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute({ children, ...rest }) {

  const user = useSelector((state) => state.client.user);
  const isAuthenticated = Boolean(user?.token);
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
