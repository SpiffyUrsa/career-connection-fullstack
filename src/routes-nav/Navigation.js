import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import UserContext from "../user/UserContext";

/**
 * Renders nav bar
 * 
 * App --> Navigation
 * 
 * State
 * 
 * Props
 * - logout is a function that clears the token and currentUser.
 */
function Navigation({ logout }) {

  const { currentUser } = useContext(UserContext);
  // console.log('user is', user);

  const navDisplay = (currentUser) ?
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