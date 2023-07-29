import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/auth.context';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full flex p-4 items-center justify-between z-[100] absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLEX
        </h1>
      </Link>
      {user?.email ? (
        <div className='text-white'>
          <Link to='/account'>
            <button className='pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer'>
            Logout
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
