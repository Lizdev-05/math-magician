import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculator />} />

      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
