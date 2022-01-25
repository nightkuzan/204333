// import { Component } from 'react';
import React, { Component, useState, useContext ,useEffect,useRef} from "react";
import lot from "./css/lot.css";
import Container from "./Containerf";
import car from "../../src/assets/img/cartest.jpg"
import Time from "./time";

function Lot(props) {

    const txt = props.txt;
    const onSubmit = props.onSubmit;
    const showModal = props.showModal;
    const [num, setNum] = useState(0);
    const [active, setActive] = useState(true);
    const [isOwner, setIsOwner] = useState(false);
    const [opened, setOpened] = useState(false);
    const [closed, setClosed] = useState(false);
    const onFormSubmitted = async ()=> {
       setIsOwner(true);
       setActive(false); 
    }
    const [timer, setTimer] = useState(900);
    const timeInterval = useRef();
    useEffect(() => {
        timeInterval.current = window.setInterval(() => {
            if (isOwner && !active){
            if (timer > 0)
                setTimer(prevTimer => prevTimer - 1);
            else
                window.clearInterval(timeInterval.current);
                }
        }, 1000);
    }, [isOwner,active]);

    useEffect(() => {
        if (opened &&  closed){
            window.clearInterval(timeInterval.current);
        }
    },[opened,closed]);

    return (
        <>
            <div className="lot" onClick={showModal(props.parkinglot,onFormSubmitted)}>
               <h3 className="lot-name">{props.parkinglot}</h3>
                {
                    (isOwner && !active) && (
                        <>
                       {(opened && closed) ?<img src={car}></img> :( <Time timer={timer} />  )}
                        <button onClick={setOpened}>Open</button>
                        <button onClick={setClosed}>Close</button>
                        <button  >Cancel</button>
                        </>
                    )
                }

            </div>

        </>
    )
}

export default  Lot;


