import React, {useContext} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from '../jobs/JobList'
import LoginForm from '../auth/LoginForm'
import SignupForm from '../auth/SignupForm'
import ProfileForm from '../user/ProfileForm'
import JoblyApi from "../api/api";
import UserContext from "../user/UserContext";
import ErrorPage from '../common/ErrorPage';

/**
 * Routes all routes
 * 
 * App --> {Navigation, Routes} -->
 * 
 * route / --> Homepage
 * route /companies --> CompanyList
 * route /companies/:handle --> CompanyDetail
 * route /jobs --> JobList
 * route /login --> LoginForm
 * route /signup --> SignupForm
 * route /profile --> ProfileForm
 * 
 * State
 * 
 * Props
 *  - login (function)
 *  - register (function)
 */

function Routes({login, register, userEdit }) {

  const { currentUser } = useContext(UserContext);
  
  return (
    <div className='Routes'>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/companies">
            {currentUser ? <CompanyList /> : <Redirect to='/login'/>}
          </Route>
          <Route exact path="/companies/:handle">
            {currentUser ? <CompanyDetail /> : <Redirect to='/login'/>}
          </Route>
          <Route exact path="/jobs">
            {currentUser ? <JobList /> : <Redirect to='/login'/>}
          </Route>
          <Route exact path="/login">
            {currentUser ? <Redirect to='/'/> : <LoginForm login={login}/>}
          </Route>
          <Route exact path="/signup">
            {currentUser ? <Redirect to='/'/>  : <SignupForm register={register} />}
          </Route>
          <Route exact path="/profile">
            {currentUser ? <ProfileForm userEdit={userEdit} /> : <Redirect to='/login'/>}
          </Route>
          <Route>
            {/* <ErrorPage /> */}
            Got Here
          </Route>
          {/* <Redirect to="/" /> */}
        </Switch>
    </div>
  )

}


export default Routes;