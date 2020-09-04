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
 *  - initialToken: A string that holds the token for authentication.
 *  - currentUser: An object that holds data on the current user.
 *  - isLoading: A boolean based off whether the initialToken state is defined. Determines whether
 *    or not to show the Loading message or the routes.
 * 
 * Props
 * 
 */
function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [initialToken, setInitialToken] = useState(localStorage.getItem('token'))
  const [isLoading, setIsLoading] = useState(initialToken !== null);

  /**Each time the token is updated,
   * set token to local storage if not already there
   * Get information about the user
   */
  useEffect(function handleTokenAndUser() {

    console.debug('Entered HandleTokenAndUser with token:', initialToken)
    if (initialToken) localStorage.setItem('token', initialToken)
    const lsToken = localStorage.getItem('token')
    JoblyApi.token = lsToken

    async function getCurrentUser() {
      console.debug('Entered getCurrentUser with lsToken:', lsToken)
      console.debug('Entered getCurrentUser with token', initialToken);
      try {
        setIsLoading(true);
        let username = JoblyApi.getTokenPayload(lsToken);
        const userResult = await JoblyApi.getUser(username);
        setCurrentUser(userResult)
        setIsLoading(false);
      } catch (err) {
        throw new Error('User not found')
      }
    }
    if (lsToken) getCurrentUser();
  }, [initialToken])

  /**Handle Login Request*/
  async function login(username, password) {
    try {
      setIsLoading(true);
      const token = await JoblyApi.login(username, password);
      setInitialToken(token)
    } catch (err) {
      throw new Error('Login Failed')
    }
  }

  /**Handle Register Request */
  async function register(userData) {
    try {
      setIsLoading(true);
      const token = await JoblyApi.register(userData);
      setInitialToken(token)
    } catch (err) {
      throw new Error("Register Failed.");
    }
  }

  /** handle user edit */
  async function userEdit(userData) {
    try {
      setIsLoading(true);
      const user = await JoblyApi.editUser(userData);
      setCurrentUser(user);
      setIsLoading(false);
    } catch (err) {
      throw new Error("User edit data is invalid.");
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
        <Routes login={login} register={register} userEdit={userEdit} />
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
