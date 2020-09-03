import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from './api.js'

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
  // TODO: Move the token to the API. 
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function(){
    if (currentUser) {
      getCurrentUserRequest(currentUser.username)
    } 
  }, [currentUser])

  //TODO: Change the name of this function to fit what it actually does.
  function getCurrentUserRequest(username) {
    async function getCurrentUser() {
      try {
        const userResult = await JoblyApi.getUser(username);
        setCurrentUser(userResult)
      } catch (err) {
        throw new Error('User not found')
      }
    } getCurrentUser()
  }

  // TODO: Don't need to wrap this in a non async function.
  function login(username, password) {
    async function handleLogin() {
      try {
        await JoblyApi.requestLogin(username, password);
        getCurrentUserRequest(username)
      } catch (err) {
        throw new Error('Login Failed')
      }
    }
    handleLogin()
  }

  function register(username, password, firstName, lastName, email) {
    async function handleRegister() {
      try {
        await JoblyApi.requestRegister(username, password, firstName, lastName, email);
        getCurrentUserRequest(username);
      } catch (err) {
        throw new Error("Register Failed.");
      }
    }
    handleRegister();
  }

  function logout() {
    setToken('')
    setCurrentUser(null)
  }

  // TODO: If are going to be using context, should we just apply context to all of our components?
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation currentUser={currentUser} logout={logout} />
        <Routes login={login} register={register} currentUser={currentUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
