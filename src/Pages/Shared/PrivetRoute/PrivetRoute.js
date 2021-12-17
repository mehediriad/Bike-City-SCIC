import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user,isLoading} = useAuth();
    
    
    if(isLoading){
      return (
        <div className="lodding-box">
          <Spinner animation="border" variant="primary" />
        </div>
      )  
    }
    
    return (
    <Route
      {...rest}
      render={({ location }) =>
      
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              prevPath: location.pathname,
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRoute;