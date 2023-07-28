import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full flex p-4 items-center justify-between z-[100] absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLEX
        </h1>
      </Link>
      <div className='text-white'>
        <Link to='/login'>
          <button className='pr-4'>Sign In</button>
        </Link>
        <Link to='/register'>
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
