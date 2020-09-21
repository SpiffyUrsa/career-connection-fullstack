import React, { useState, useContext } from "react";
import Alert from '../common/Alert'
import UserContext from "./UserContext";
import {useHistory} from 'react-router-dom'

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

  const { currentUser } = useContext(UserContext);
  const history = useHistory()

  const [formData, setFormData] = useState({...currentUser, password: ""});
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
      history.push('/')
    }
    catch (err) {
      console.log('We found an error')
      err.forEach(e => setErrorMessage(m => m+=e))
    }
  }

  return (
    <div className='col-md-8 offset-md-2'>
      <h1>Change your Profile</h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor='username'>Username:</label>
                <input
                  name="username"
                  type='text'
                  value={username}
                  onChange={handleChange}
                  readOnly
                  className='form-control'/>
              </div>

              <div className="form-group">
                <label htmlFor='firstName'>First Name:</label>
                <input
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  className='form-control'/>
              </div>

              <div className="form-group">
                <label htmlFor='lastName'>Last Name:</label>
                <input
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  className='form-control'/>
              </div>

              <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className='form-control'/>
              </div>

              <div className="form-group">
                <label htmlFor='password'>Confirm password to make changes:</label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  className='form-control'/>
              </div>

              <button className="btn btn-primary btn-block mt-4">Save Changes</button>
            </form>
          </div>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}


export default ProfileForm;