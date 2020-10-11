import React, {useContext} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from '../jobs/JobList'
import LoginForm from '../auth/LoginForm'
import SignupForm from '../auth/SignupForm'
import ProfileForm from '../user/ProfileForm'
import UserContext from "../user/UserContext";

/**
 * Routes all routes
 * 
 * App --> {Navigation, Routes} -->
 *  '/' --> Homepage
 *  '/companies' --> CompanyList
 *  '/companies/:handle' --> CompanyDetail
 *  '/jobs' --> JobList
 *  '/login' --> LoginForm
 *  '/signup' --> SignupForm
 *  '/profile' --> ProfileForm
 * 
 * State
 * 
 * Props
 *  - login (fn)
 *  - register (fn)
 *  - userEdit (fn)
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
          <Redirect to="/" />
        </Switch>
    </div>
  )

}


export default Routes;