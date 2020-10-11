import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import Alert from '../common/Alert'

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
  const [errorMessages, setErrorMessages] = useState([])

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

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(username, password)
      history.push('/')
    } catch(err){
      setErrorMessages(err)
    }
  }

  return (
    <div className='LoginForm'>
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 className="mb-3">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor = 'username'>Username:</label>
            <input
              className="form-control"
              name="username" 
              value = {username} 
              placeholder="username"
              onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor = 'password'>Password:</label>
            <input
              className="form-control"
              name="password"
              type="password" 
              value = {password} 
              placeholder="password"
              onChange={handleChange} />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
        <div>
          {errorMessages.length ?
            <Alert messages={errorMessages}/> :
            null }
        </div>
      </div>
    </div>
  )
}


export default LoginForm;