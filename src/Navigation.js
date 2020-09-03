import React from 'react';
import { NavLink } from 'react-router-dom'

/**
 * Renders nav bar
 * 
 * App --> Navigation
 * 
 * State
 * 
 * Props
 * - CurrentUser is obj with logged in username 
 * - logout is a function that clears the token and currentUser.
 */
function Navigation({ currentUser, logout }) {

  const navDisplay = currentUser ?
    <>
      <NavLink exact to='/companies'>Companies</NavLink>
      <NavLink exact to='/jobs'>Jobs</NavLink>
      <NavLink exact to='/profile'>Profile</NavLink>
      <NavLink exact to='/' onClick={logout}>Log Out {currentUser.username}</NavLink>
    </> :
    <>
      <NavLink exact to='/login'>Login</NavLink>
      <NavLink exact to='/signup'>Sign Up</NavLink>
    </>


  return (
    <nav className="Navigation">
      <NavLink exact to='/'>Jobly</NavLink>
      {navDisplay}
    </nav>
  )
}

export default Navigation;