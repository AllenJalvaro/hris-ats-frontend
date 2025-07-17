import React from 'react';

const Header = ({ title, description }) => (

    <div
    //z-50
      className="w-full bg-gray-100 sticky top-0  border-gray-200 px-8 py-4"
    >
      <p className="m-0 text-2xl font-bold">{title}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>

);
export default Header;