import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from './JobList'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import ProfileForm from './ProfileForm'
import JoblyApi from "./api";

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
 * 
 */

// TODO: how do we handle error pages/redirects/home,  etc
function Routes({login, register}) {
  
  return (
    <div className='Routes'>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/companies">
            <CompanyList />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>
          <Route exact path="/jobs">
            <JobList />
          </Route>
          <Route exact path="/login">
            <LoginForm login={login}/>
          </Route>
          <Route exact path="/signup">
            <SignupForm register={register} />
          </Route>
          <Route exact path="/profile">
            <ProfileForm />
          </Route>
        </Switch>
    </div>
  )

}


export default Routes;