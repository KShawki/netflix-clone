import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex p-4 items-center justify-between z-[100] absolute'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
        NETFLEX
      </h1>
      <div className='text-white'>
        <button className='pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
