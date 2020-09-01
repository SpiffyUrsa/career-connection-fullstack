import React from 'react';
import {Link, NavLink} from 'react-router-dom'

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
function Navigation(){
  return(
    <nav>
      <NavLink exact to='/'>Jobly</NavLink>
      <NavLink exact to='/companies'>Companies</NavLink>
      <NavLink exact to='/jobs'>Jobs</NavLink>
      <NavLink exact to='/profile'>Profile</NavLink>
      <NavLink exact to='/'>Log Out</NavLink>
      <NavLink exact to='/login'>Login</NavLink>
      <NavLink exact to='/signup'>Sign Up</NavLink>
    </nav>
  )
}

export default Navigation;