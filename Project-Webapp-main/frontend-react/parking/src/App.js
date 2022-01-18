import logo from "./logo.svg";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component, useState, useRef } from "react";
import Navbarparking from "./components/navbar";
import Lot from './components/lot';
import Forms from "./components/forms";
import { Container } from './components/Containerf';
// function App() {
//   // const [num, setNum] = useState(0);
//   // setNum(new value);
//   // num
//   // const num2 = useRef(0);
//   // num2.current = new value;
//   // num2.current
//   // const inputElement = useRef();
//   // const [inputTxt, setInputTxt] = useState('');

//   // const arr = 5;
//   // const arrComponents = [
//   //   <p>text 1</p>,
//   //   <p>text 2</p>,
//   //   <p>text 3</p>,
//   //   <p>text 4</p>,
//   //   <p>text 5</p>,
//   //   <p>text 6</p>,

//   // ];

//   // const inputChange = e => setInputTxt(e.target.value);
//   // const buttonClick = e => { inputElement.current.focus(); };

//   // const [arrState, setArrState] = useState([0, 1, 2, 3]);
//   // console.log(arrState);

//   return (
//     <>
//       <Navbarparking />
//       {/* <button onClick={buttonClick} className='btn btn-primary'>Click me!</button>
//       <input type="text" ref={inputElement} onChange={inputChange} />
//       <p>{inputTxt}</p>
//       {
//         arrState.map(el => <Lot txt={el} key={el} />)
//       } */}
//       <Lot/>
//       {/* {
//         Lot.map(el => <Lot txt={el} key={el} />)
        
//       } */}
//       <Forms/>  
//       </>
//   );
// }

// export default App;
const App = () => {
  
  return (
    <div className="App">
      <Navbarparking />
      <Container  />
      {/* <Lot triggerText ={triggerText} onSubmit={onSubmit} /> */}
    </div>
  );
};

export default App;