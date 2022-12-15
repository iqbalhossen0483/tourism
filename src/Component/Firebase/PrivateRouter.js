import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from './useAuth';

const PrivateRouter = ({ element }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    }
    return user?.email ? element : <Navigate to="/sign-in" state={{ from: location }} />;
};

export default PrivateRouter;