import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRoles from '../Hooks/useRoles';

const RiderRoute = ({children}) => {
    const { loading,user } = useAuth();
    const { role, roleLoading } = useRoles();

    if (loading || !user|| roleLoading) {
        return <span className="loading loading-ring loading-xl"></span>;
    }

    if (role !== 'rider') {
        return <div>Access is forbidden</div>;
    }

    
    return <>{children}</>;
    
};

export default RiderRoute;