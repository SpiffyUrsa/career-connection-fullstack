import React from 'react';
import { Link, NavLink } from 'react-router-dom'

/**
 * Renders nav bar
 * 
 * App --> Navigation
 * 
 * State
 * 
 * Props
 * 
 */
function Navigation({ currentUser }) {

  const { username } = currentUser;

  const navDisplay = username ?
    <div>
      <NavLink exact to='/companies'>Companies</NavLink>
      <NavLink exact to='/jobs'>Jobs</NavLink>
      <NavLink exact to='/profile'>Profile</NavLink>
      <NavLink exact to='/'>Log Out {username}</NavLink>
    </div> :
    <div>
      <NavLink exact to='/login'>Login</NavLink>
      <NavLink exact to='/signup'>Sign Up</NavLink>
    </div>


  return (
    <nav className="Navigation">
      <NavLink exact to='/'>Jobly</NavLink>
      {navDisplay}
    </nav>
  )
}

export default Navigation;