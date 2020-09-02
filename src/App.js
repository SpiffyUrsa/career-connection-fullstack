import React, {useState} from 'react';
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import { BrowserRouter, Redirect } from 'react-router-dom';
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
  //TODO: Perhaps we include the token as state and useffect to track changes?

  function login(username, password){
    async function handleLogin(){
      try {
        const loginResult = await JoblyApi.requestLogin(username, password);
        setToken(loginResult);
      } catch(err){
        throw new Error('Login Failed')
      }
    }
    handleLogin()
  }
  console.log('token:', token)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes login={login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
