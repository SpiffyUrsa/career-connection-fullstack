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
  
  const [formData, setFormData] = useState({username: "", password:""});
  const [errorMessage, setErrorMessage] = useState(null)

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

  //make our login an await so that the page doesn't change if it's unsuccessfull
  //need to remove the errors on the app - display the errors from the backend
  //TODO: DO the same thing for register
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(username, password)
      history.push('/')
    } catch(err){
      setErrorMessage(err[0])
    }
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
          type="password" 
          value = {password} 
          placeholder="password"
          onChange={handleChange} />

        <button>Login</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}


export default LoginForm;