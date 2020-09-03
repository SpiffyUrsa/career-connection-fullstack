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
 *  - Token: A string that holds the token for authentication.
 *  - currentUser: An object that holds data on the current user.
 *  - isLoading: displays loading message while requests are made
 * 
 * Props
 * 
 */
function App() {
 
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  /**Each time the token is updated,
   * set token to local storage if not already there
   * Get information about the user
   */
  useEffect(function handleTokenAndUser() {
    console.debug('Entered HandleTokenAndUser with token:', token)
    if (token) localStorage.setItem('token', token)
    const lsToken = localStorage.getItem('token')

    JoblyApi.token = lsToken

    async function getCurrentUser() {
      console.debug('Entered getCurrentUser with token:', token)
      try {
        let username = JoblyApi.getTokenPayload(lsToken);
        const userResult = await JoblyApi.getUser(username);
        setCurrentUser(userResult)
        setIsLoading(false);
      } catch (err) {
        throw new Error('User not found')
      }
    }
    if(lsToken) getCurrentUser()
  }, [token])

  /**Handle Login Request*/
  async function login(username, password) {
    try {
      setIsLoading(true);
      const token = await JoblyApi.login(username, password);
      setToken(token)
    } catch (err) {
      throw new Error('Login Failed')
    }
  }

  /**Handle Register Request */
  async function register(userData) {
    try {
      setIsLoading(true);
      const token = await JoblyApi.register(userData);
      setToken(token)
    } catch (err) {
      throw new Error("Register Failed.");
    }
  }

  /**Handle Logout */
  function logout() {
    localStorage.removeItem('token')
    setCurrentUser(null);
  }

  const appDisplay = isLoading ? <h1>Is Loading...</h1> :
    <>
      <UserContext.Provider value={currentUser}>
        <Navigation logout={logout} />
        <Routes login={login} register={register}/>
      </UserContext.Provider>
    </>

  return (
    <div className="App">
      <BrowserRouter>
        {appDisplay}
      </BrowserRouter>
    </div>
  );
}

export default App;
