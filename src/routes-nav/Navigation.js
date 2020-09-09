import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import UserContext from "../user/UserContext";
import "./Navigation.css";


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

  const navDisplay = (currentUser) ?
    <>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" exact to='/companies'>Companies</NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" exact to='/jobs'>Jobs</NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" exact to='/profile'>Profile</NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" exact to='/' onClick={logout}>Log Out {currentUser.username}</NavLink>
      </li>
    </> :
    <>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" exact to='/login'>Login</NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" exact to='/signup'>Sign Up</NavLink>
      </li>
    </>


  return (
    <nav className="Navigation">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" exact to='/'>Career Connection</NavLink>
        </li>
        {navDisplay}
      </ul>
    </nav>
  )
}

export default Navigation;