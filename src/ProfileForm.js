import React, { useState } from "react";
import Alert from './Alert'


/**
 * Renders Profile form
 * 
 * Routes --> ProfileForm --> Alert
 * 
 * State
 * 
 * Props
 * 
 */
function ProfileForm() {
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
    <div className='ProfileForm'>
      <h1>Change your Profile</h1>
      <form onSubmit={handleSubmit}>
        
        {/* TODO: make sure the username is hardcoded */}
        <label htmlFor = 'username'>Username:</label>
        <input 
          name="username" 
          type= 'text'
          value = {username} 
          onChange={handleChange}
          readOnly />

        
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

        <label htmlFor = 'password'>Confirm password to make changes:</label>
        <input 
          name="password" 
          value = {password} 
          onChange={handleChange} />

        <button>Save Changes</button>
      </form>
    </div>
  )
}


export default ProfileForm;