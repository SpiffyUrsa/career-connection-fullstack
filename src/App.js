import React, { useState } from 'react';
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
function App() {

  const [token, setToken] = useState('')
  const [currentUser, setCurrentUser] = useState({});
  //TODO: Perhaps we include the token as state and useEffect to track changes?

  function login(username, password) {
    async function handleLogin() {
      try {
        const loginResult = await JoblyApi.requestLogin(username, password);
        setToken(loginResult);
        setCurrentUser({ username });
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

  // TODO: If are going to be using context, should we just apply context to all of our components?
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation currentUser={currentUser} />
        <Routes login={login} register={register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
