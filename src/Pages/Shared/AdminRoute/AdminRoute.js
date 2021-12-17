import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,admin , IsLodding} = useAuth();
    if(IsLodding){return <Spinner animation="border" variant="primary" /> }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        admin && user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;