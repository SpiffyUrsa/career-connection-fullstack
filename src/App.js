import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from './api.js'
import UserContext from "./UserContext";

/**
 * Renders App
 * 
 * App --> {Navigation, Routes}
 * 
 * State
 *  Token: A string that holds the token for authentication.
 * currentUser: An object that holds data on the current user.
 * 
 * Props
 * 
 */
//TODO: handle loading page between requests
function App() {
 
  const [currentUser, setCurrentUser] = useState(null);

// TODO: When the token is modified in local storage, find the payload associated with that token
// and get back data on that user from the API.

  // useEffect(function () {
  //   if (currentUser) {
  //     getCurrentUser();
  //   }
  // }, [currentUser])

  // Dependencies need to be related to react State.

  // TODO: Put this in a useEffect so it runs when the token changes. 
  // Have the localStorage set in here.
  async function getCurrentUser() {
    try {
      let username = JoblyApi.getTokenPayload(JoblyApi.token);
      const userResult = await JoblyApi.getUser(username);
      setCurrentUser(userResult)
    } catch (err) {
      throw new Error('User not found')
    }
  }

  async function login(username, password) {
    try {
      await JoblyApi.requestLogin(username, password);
      getCurrentUser();
    } catch (err) {
      throw new Error('Login Failed')
    }
  }

  // Just pass in an object with the data.
  async function register(username, password, firstName, lastName, email) {
    try {
      // Change the joblyApi names to register. No request.
      await JoblyApi.requestRegister(username, password, firstName, lastName, email);
      getCurrentUser();
    } catch (err) {
      throw new Error("Register Failed.");
    }
  }

  function logout() {
    // setToken to null and localstorage removal.
    JoblyApi.clearToken();
    setCurrentUser(null);
  }
  // TODO: Change the Context to contain everything.
  // TODO: If are going to be using context, should we just apply context to all of our components?
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation currentUser={currentUser} logout={logout} />
        <UserContext.Provider value={currentUser}>
          <Routes login={login} register={register} currentUser={currentUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
