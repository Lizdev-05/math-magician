import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Calculator />
  </div>
);

export default App;
