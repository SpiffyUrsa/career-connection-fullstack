import React, {useContext} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from './JobList'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import ProfileForm from './ProfileForm'
import JoblyApi from "./api";
import UserContext from "./UserContext";
import ErrorPage from './ErrorPage';

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

function Routes({login, register }) {

  const user = useContext(UserContext);

  return (
    <div className='Routes'>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/companies">
            {user ? <CompanyList /> : <Redirect to='/login'/>}
          </Route>
          <Route exact path="/companies/:handle">
            {user ? <CompanyDetail/> : <Redirect to='/login'/>}
          </Route>
          <Route exact path="/jobs">
            {user ? <JobList /> : <Redirect to='/login'/>}
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to='/'/> : <LoginForm login={login}/>}
          </Route>
          <Route exact path="/signup">
            {user ? <Redirect to='/'/>  : <SignupForm register={register} />}
          </Route>
          <Route exact path="/profile">
            {user ? <ProfileForm /> : <Redirect to='/login'/>}
          </Route>
          <Route>
            <ErrorPage />
          </Route>
          <Redirect to="/" />
        </Switch>
    </div>
  )

}


export default Routes;