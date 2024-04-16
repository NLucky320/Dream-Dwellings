import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
   const location = useLocation();
    console.log(location.pathname)
    if (loading) {
    return <span className="loading loading-spinner text-primary"></span>
}


    if (user) {
        return children;
}
return <Navigate state={location?.pathname} to='/login'> </Navigate>
 
};
export default PrivateRoute;
