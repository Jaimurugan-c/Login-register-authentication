import React from 'react'
  import { useState } from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css' 
import Signup from './assets/Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Home from './assets/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
