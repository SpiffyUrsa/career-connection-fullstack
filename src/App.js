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
 * 
 * Props
 * 
 */
//TODO: handle loading page between requests
function App() {

  const [token, setToken] = useState('')
  const [currentUser, setCurrentUser] = useState({});
  //TODO: Perhaps we include the token as state and useEffect to track changes?

  //TODO: Do we need to do anything more with token to ensure changes are re-rendered? 

  // useEffect(function handleTokenChange(token, currentUser) {
  //   // console.log('Entered our useeffect')
  //   // async function getCurrentUser(){
  //   //   console.log('getCurrentUser is running')
  //   //   try{
  //   //     const userResult = await JoblyApi.getUser(token, currentUser);
  //   //     setCurrentUser(userResult)
  //   //   } catch(err){
  //   //     throw new Error('User not found')
  //   //   }
  //   // }
  //   // if(Object.values(currentUser).length > 0) getCurrentUser()
  //   // console.log('TOKEN IS', token)
  //   // console.log('Current User is:', currentUser)
  //   if (token !== '' && token !== undefined) getCurrentUser()
  // }, [token])

  // console.log('CurrentUser', currentUser)
  // console.log('token', token)

  useEffect(function(){
    if (token !== '' && token !== undefined) getCurrentUserRequest(token, currentUser.username)
  }, [token, currentUser.username])

  function getCurrentUserRequest(token, username) {
    async function getCurrentUser() {
      try {
        const userResult = await JoblyApi.getUser(token, username);
        setCurrentUser(userResult)
      } catch (err) {
        throw new Error('User not found')
      }
    } getCurrentUser()
  }

  function login(username, password) {
    async function handleLogin() {
      try {
        const loginResult = await JoblyApi.requestLogin(username, password);
        setToken(loginResult);
        getCurrentUserRequest(loginResult, username)
      } catch (err) {
        throw new Error('Login Failed')
      }
    }
    handleLogin()
  }

  function register(username, password, firstName, lastName, email) {
    async function handleRegister() {
      try {
        const registerResult = await JoblyApi.requestRegister(username, password, firstName, lastName, email);
        setToken(registerResult);
        setCurrentUser({ username });
      } catch (err) {
        throw new Error("Register Failed.");
      }
    }
    handleRegister();
  }

  function logout() {
    setToken('')
    setCurrentUser({})
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
