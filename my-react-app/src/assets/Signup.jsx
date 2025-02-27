import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useNavigation } from 'react-router-dom'
const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')    
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>console.log(result))
    navigate('/login')
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className="bg-white p-3 rounded w-100" style={{ maxWidth: '400px' }}>
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Name:</strong>
            </label>
            <input type='text' 
            className='form-control rounded-0' 
            autoComplete='off' name="name" 
            placeholder='Enter your name' 
            onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email:</strong>
            </label>
            <input type='email' 
            className='form-control rounded-0' 
            autoComplete='off' name="email" 
             onChange={(e)=>setEmail(e.target.value)} 
             placeholder='Enter your email' />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password:</strong>
            </label>
            <input type='password' 
            className='form-control rounded-0'
            onChange={(e)=>setPassword(e.target.value)} autoComplete='off' name="password" placeholder='Enter your password' />
          </div>
          <button type='submit'
           className='btn btn-warning w-100 rounded-0'>Register</button>
          <p className='text-muted '>Did you have account?</p>
          </form>
          <Link to='/Login' type='button' 
          className='btn btn-primary w-100 rounded-0'>Login
          </Link>
        
      </div>
    </div>
  )
}

export default Signup
