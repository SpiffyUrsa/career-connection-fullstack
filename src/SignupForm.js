import React, { useState } from "react";
import Alert from './Alert'

/**
 * Renders signup form
 * 
 * Routes --> SignupForm --> Alert
 * 
 * State
 * 
 * Props
 * 
 */
function SignupForm() {
  const [formData, setFormData] = useState({});

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

  function handleSubmit(evt) {
    // Do something with the parent component function.
    //include some condition to render the alert
  }

  return (
    <div className='SignupForm'>
      <h1>Sign up!</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor = 'username'>Username:</label>
        <input 
          name="username" 
          value = {username} 
          onChange={handleChange} />

        <label htmlFor = 'password'>Password:</label>
        <input 
          name="password" 
          value = {password} 
          onChange={handleChange} />
        
        <label htmlFor = 'firstName'>First Name:</label>
        <input 
          name="firstName" 
          value = {firstName}
          onChange={handleChange} />

        <label htmlFor = 'lastName'>Last Name:</label>
        <input 
          name="lastName" 
          value = {lastName} 
          onChange={handleChange} />

        <label htmlFor = 'email'>Email:</label>
        <input 
          name="email" 
          value = {email} 
          onChange={handleChange} />

        <button>Submit</button>
      </form>
    </div>
  )
}


export default SignupForm;