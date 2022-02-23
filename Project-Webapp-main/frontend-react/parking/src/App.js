import logo from "./logo.svg";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from 'bootstrap';
import "./App.css";
import React, { Component, useState, useRef } from "react";
import Navbarparking from "./components/navbar";
import Lot from './components/lot';
import Forms from "./components/forms";
import Container  from './components/Containerf';
import HomePage from "./components/HomePage";
import {BrowserRouter,Link, Route, Routes} from "react-router-dom"

function App() {
  
  return (
    

    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/parkingcar_floor1" element={<Container/>} />
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;