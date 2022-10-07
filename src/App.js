import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <MainContainer/>
      </Router>
    </div>
  );
}

export default App;
