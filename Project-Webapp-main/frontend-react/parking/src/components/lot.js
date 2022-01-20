// import { Component } from 'react';
import React, { Component, useState, useContext } from "react";
import lot from "./css/lot.css";
import Container from "./Containerf";
// class Lot extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             txt: props.txt,
//             num: 0,
//         }

//         this.setState({
//             txt: 'hello world',
//             num: 1,
//         });
//     }

//     render() {
//         const newtxt = this.state.txt + 'blabla';

//         return (
//             <>
//                 <div>
//                     {newtxt}
//                 </div>
//             </>
//         );
//     }
// }

function Lot(props) {

    const txt = props.txt;
    const onSubmit = props.onSubmit;
    const showModal = props.showModal;
    const [num, setNum] = useState(0);

    // console.log(props.parkinglot);

    return (
        <>
            <div className="lot" onClick={showModal(props.parkinglot)}>
                
            </div>
        </>
    )
}

export default  Lot;