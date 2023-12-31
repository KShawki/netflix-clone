import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/auth.context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='/home-bg.jpeg'
          alt=''
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[680px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Login</h1>

              {error ? <p className='p-3 my-4 bg-red-600'>{error}</p> : null}

              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded '
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded '
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-red-500 py-3 my-6'>Log In</button>
                <div className='flex flex-row justify-between items-center text-sm text-gray-500'>
                  <p>
                    <input type='checkbox' className='mr-2' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600 mr-2'>New to Netflix?</span>
                  <Link to='/register'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
