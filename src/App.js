import React, { useState, useEffect } from 'react';
import Routes from './routes-nav/Routes';
import Navigation from './routes-nav/Navigation';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from './api/api.js'
import UserContext from "./user/UserContext";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "token";
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
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [initialToken, setInitialToken] = useState(localStorage.getItem(TOKEN_STORAGE_ID))
  const [isLoading, setIsLoading] = useState(initialToken !== null);

  /**Each time the token is updated,
   * set token to local storage if not already there
   * Get information about the user
   */
  useEffect(function handleTokenAndUser() {
    console.debug('Entered HandleTokenAndUser with token:', initialToken)

    if (initialToken) localStorage.setItem(TOKEN_STORAGE_ID, initialToken)
    const lsToken = localStorage.getItem(TOKEN_STORAGE_ID)
    JoblyApi.token = lsToken
    
    if (lsToken) getCurrentUser();

    async function getCurrentUser() {
      console.debug('Entered getCurrentUser with token', initialToken);
      try {
        setIsLoading(true);
        const username = getTokenPayload(lsToken);
        const currentUser = await JoblyApi.getUser(username);
        setCurrentUser(currentUser)
        setApplicationIds(new Set(currentUser.applications))
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
    localStorage.removeItem(TOKEN_STORAGE_ID)
    setCurrentUser(null);
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Handle job application */
  async function applyToJob(id){
    // console.log('applied to job')
    if (hasAppliedToJob(id)) return;
    await JoblyApi.applyToJob(currentUser.username, id)
    setApplicationIds(new Set([...applicationIds, id]))
  }

  /** Get payload from token */
  function getTokenPayload(token) {
    let payload = jwt.decode(token);
    return payload.username;
  }

  const appDisplay = isLoading ? <h1>Is Loading...</h1> :
    <>
      <UserContext.Provider value={{ currentUser, applyToJob, hasAppliedToJob }}>
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
