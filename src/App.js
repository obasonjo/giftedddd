import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element= {<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
