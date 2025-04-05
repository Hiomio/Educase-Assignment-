import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ProfilePage from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingScreen from './pages/LandingScreen'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();


  useEffect(() => {

    if (location.pathname === '/login' || location.pathname === '/signup') {

      sessionStorage.setItem('formTimestamp', Date.now().toString());
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path='/login' element={<Login key={location.pathname === '/login' ? Date.now() : 'login'} />} />
        <Route path='/signup' element={<Signup key={location.pathname === '/signup' ? Date.now() : 'signup'} />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
