import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      {/* <Home/>
    <Course/> */}
      <div className='dark:bg-black dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
      <Toaster />
      </div>
    </>
  )
}

export default App
