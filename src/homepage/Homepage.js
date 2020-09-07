import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import UserContext from "../user/UserContext";

/**
 * Renders a different homepage based on logged in/out
 * 
 * Routes --> Homepage
 * 
 * State
 * 
 * Props
 * 
 */

function Homepage() {

  const user = useContext(UserContext);

  const welcomeMessage = user ?
    <h1>Great to have you back, {user.firstName}!</h1> :
    <div>
      <h2>Please log in or register to view jobs!</h2>
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>Sign up</Link>
    </div>
    

  return (
    <div className="Homepage">
      <h2>Welcome to Jobly!</h2>
      {welcomeMessage}      
    </div>
  )
}


export default Homepage;