import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    // If authentication is still in progress, show loading spinner
    // if (loading) {
    //     return <Loading />;
    // }

    // If not loading and user is not authenticated, redirect to login page
    if (!user) {
        
        return <Navigate to="/login" state={  location?.pathname } />;
    }
  
  
    // If user is authenticated, render the children components
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
