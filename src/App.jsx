import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Users from './components/Users'
import Details from './components/Details'

function App() {

  return (
    <>
      
        {/* <Users /> */}
      <Routes>
        
          <Route exact path="/" element={<Users />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/details" element={<Details />} />
        </Routes>
      {/* <Register/> */}
    </>
  );
}

export default App
