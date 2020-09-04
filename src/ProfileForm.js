import React, { useState, useContext } from "react";
import Alert from './Alert'
import UserContext from "./UserContext";

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
function ProfileForm({ userEdit }) {

  const user = useContext(UserContext);
  const [formData, setFormData] = useState({...user, password: ""});
  const [errorMessage, setErrorMessage] = useState('')

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
      await userEdit(formData);
    }
    catch (err) {
      err.forEach(e => setErrorMessage(m => m+=e))
    }
  }

  return (
    <div className='ProfileForm'>
      <h1>Change your Profile</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor='username'>Username:</label>
        <input
          name="username"
          type='text'
          value={username}
          onChange={handleChange}
          readOnly />

        <label htmlFor='firstName'>First Name:</label>
        <input
          name="firstName"
          value={firstName}
          onChange={handleChange} />

        <label htmlFor='lastName'>Last Name:</label>
        <input
          name="lastName"
          value={lastName}
          onChange={handleChange} />

        <label htmlFor='email'>Email:</label>
        <input
          name="email"
          value={email}
          onChange={handleChange} />

        <label htmlFor='password'>Confirm password to make changes:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange} />

        <button>Save Changes</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}


export default ProfileForm;