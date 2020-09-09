import React, { useState } from "react";
import Alert from '../common/Alert'
import {useHistory} from "react-router-dom";

/**
 * Renders signup form
 * 
 * Routes --> SignupForm --> Alert
 * 
 * State
 * 
 * Props
 * -register: A function that handles the registering of the user.
 */
function SignupForm({register}) {
  const [formData, setFormData] = useState({
      username:"", 
      password:"", 
      firstName:"", 
      lastName:"", 
      email:""
    });
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory();
  const { username, password, firstName, lastName, email } = formData;

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
      await register(formData);
      history.push("/");
    }
    catch (err) {
      err.forEach(e => setErrorMessage(m => m+=e))
    }
  }

  return (
    <div className='SignupForm'>
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 className="mb-3">Sign up!</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor = 'username'>Username:</label>
            <input
              className="form-control" 
              name="username" 
              value = {username} 
              onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor = 'password'>Password:</label>
            <input
              className="form-control"
              name="password"
              type="password" 
              value = {password} 
              onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor = 'firstName'>First Name:</label>
            <input 
              className="form-control"
              name="firstName" 
              value = {firstName}
              onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor = 'lastName'>Last Name:</label>
            <input
              className="form-control"
              name="lastName" 
              value = {lastName} 
              onChange={handleChange} />
          </div>
          <div>
            <label htmlFor = 'email'>Email:</label>
            <input
              className="form-control"
              name="email" 
              value = {email} 
              onChange={handleChange} />
          </div>
          <button>Submit</button>
        </form>
        {errorMessage && <div>{errorMessage}</div>}
      
      </div>
    </div>
  )
}


export default SignupForm;