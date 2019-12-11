import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navbar/Navbar';
import DashBoard from './pages/dashboard/DashBoard';

function App() {
  return (
    <div className="App">
        <Navbar />
        <DashBoard />
    </div>
  );
}

export default App;
