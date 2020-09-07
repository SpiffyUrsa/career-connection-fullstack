import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './routes-nav/Routes';
import Navigation from './routes-nav/Navigation';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from './api/api.js'
import UserContext from "./user/UserContext";

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
// CR: add a variable of the current token - pass that as the variable.
//use one variable for initial token to use across the board
 
function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
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
    
    if (lsToken) getCurrentUser();

    async function getCurrentUser() {
      console.debug('Entered getCurrentUser with lsToken:', lsToken)
      console.debug('Entered getCurrentUser with token', initialToken);
      try {
        setIsLoading(true);
        const username = JoblyApi.getTokenPayload(lsToken);
        const userResult = await JoblyApi.getUser(username);
        setCurrentUser(userResult)
        setIsLoading(false);
      } catch (err) {
        throw new Error('User not found')
      }
    }
  }, [initialToken])

  /**Handle Login Request*/
  async function login(username, password) {
      const token = await JoblyApi.login(username, password);
      setInitialToken(token)
  }

  /**Handle Register Request */
  async function register(userData) {
      const token = await JoblyApi.register(userData);
      setInitialToken(token)
  }

  /**Handle user edit */
  async function userEdit(userData) {
      const user = await JoblyApi.editUser(userData);
      setCurrentUser(user);
  }

  /**Handle Logout */
  function logout() {
    localStorage.removeItem('token')
    setCurrentUser(null);
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Handle job application */
  function applyToJob(id){
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id)
    setApplicationIds(new Set([...applicationIds, id]))
  }

  const appDisplay = isLoading ? <h1>Is Loading...</h1> :
    <>
      <UserContext.Provider value={{ currentUser, applyToJob }}>
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
