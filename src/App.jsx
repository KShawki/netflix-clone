import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/auth.context';
import Register from './pages/Register';
import Account from './pages/Account';
import Login from './pages/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/account'
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
