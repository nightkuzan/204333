import React from 'react';
import logo from './logo.svg';
import './App.js';
import './App.css'
import './css/index.css';
import Navbar1 from './components/navbar';
import Btnquiz from './components/btnquiz';
import TextField from '@mui/material/TextField';
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useNavigate,
    useLocation
} from 'react-router-dom';
// import {} from '@mui/system';


function App() {
    const navigate = useNavigate()
    const location = useLocation()
    return ( <
        div className = "containall" >
        <
        Navbar1 / >
        <
        Btnquiz /
        >

        <
        div className = "btnquiz123" >
        <
        Btnquiz /
        >
        <
        /div> <

        /
        div >

    );
}

export default App;