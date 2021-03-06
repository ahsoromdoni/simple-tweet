import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth';

const AuthRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AuthContext);
    // function print(obj) {
    //     for (var i in obj)
    //         console.log(i + " - ini adalah objex => " + obj[i]);
    // }

    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    user ? <Redirect to="/" /> : <Component {...props} />
                )
            }}
        />
    )
}

export default AuthRoute;