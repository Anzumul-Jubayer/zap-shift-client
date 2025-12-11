import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-1">
        <img src={logo} alt="ZapShift Logo" className="h-10 w-auto" />
        <h3 className="font-bold text-xl md:text-3xl">
          zapShift
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
