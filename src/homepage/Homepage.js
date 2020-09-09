import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import UserContext from "../user/UserContext";
import "./Homepage.css";

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

  const { currentUser } = useContext(UserContext);

  const welcomeMessage = currentUser ?
    <h1>Welcome, {currentUser.firstName || currentUser.username}!</h1> :
    <div>
      <h4><i>Please log in or register to view jobs</i></h4>
      <Link className="btn btn-primary font-weight-bold mr-3"
            to='/login'>Log in</Link>
      <Link className="btn btn-primary font-weight-bold"
            to='/signup'>Sign up</Link>
    </div>
    

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h3><i>Take the next step with</i></h3>
        <h1 className="mb-4 font-weight-bold text-success">Career Connection</h1>
        {welcomeMessage}
      </div>
    </div>
  )
}


export default Homepage;