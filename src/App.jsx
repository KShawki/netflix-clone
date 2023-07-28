import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/auth.context';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
