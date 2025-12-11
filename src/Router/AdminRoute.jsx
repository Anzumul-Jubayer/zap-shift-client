import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRoles from '../Hooks/useRoles';

const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRoles();

    if (loading || roleLoading) {
        return <span className="loading loading-ring loading-xl"></span>;
    }

    if (role !== 'admin') {
        return <div>Access is forbidden</div>;
    }

    // ✅ wrap children in fragment
    return <>{children}</>;
};

export default AdminRoute;
