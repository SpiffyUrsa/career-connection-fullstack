import React from "react";
import { Link } from 'react-router-dom'

/**
 * Renders a different homepage based on logged in/out
 * 
 * Routes --> Homepage
 * 
 * State
 * 
 * Props
 * - CurrentUser is obj with logged in username
 */
//TODO: once we have context, update username to be first name
function Homepage({currentUser}) {

  console.log('current user:', currentUser)

  const { username } = currentUser

  const welcomeMessage = username ?
    <h1>Great to have you back, {username}</h1> :
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