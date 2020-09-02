import React from 'react';
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

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
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
