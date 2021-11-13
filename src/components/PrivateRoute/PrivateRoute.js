import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    const email= sessionStorage.getItem("email");
  


    return (
        <Route
            {...rest}
            render={({ location }) => email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;