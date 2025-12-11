import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen'>
            <Logo/>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <Outlet/>
                </div>
                <div className='flex-1 bg-[#fafdf0] '>
                  <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;