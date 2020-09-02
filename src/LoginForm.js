import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import Alert from './Alert'

/**
 * Renders login form
 * 
 * Routes --> LoginForm --> Alert
 * 
 * State
 * 
 * Props
 * 
 */
function LoginForm({login}) {
  // debugger
  const [formData, setFormData] = useState({});
  const history = useHistory()

  const { username, password } = formData;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => {
      return {
        ...formData,
        [name]: value
      }
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // debugger
    login(username, password)
    history.push('/')
  }

  return (
    <div className='LoginForm'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor = 'username'>Username:</label>
        <input 
          name="username" 
          value = {username} 
          placeholder="username"
          onChange={handleChange} />

        <label htmlFor = 'password'>Password:</label>
        <input 
          name="password" 
          value = {password} 
          placeholder="password"
          onChange={handleChange} />

        <button>Login</button>
      </form>
    </div>
  )
}


export default LoginForm;