// import { Component } from 'react';
import React, { Component, useState, useContext ,useEffect,useRef} from "react";
import lot from "./css/lot.css";
import Container from "./Containerf";
import car from "../../src/assets/img/IMG_7321.PNG"
import Time from "./time";
const SERVER_URL = 'http://localhost:5500';

function Lot(props) {

    const txt = props.txt;
    const onSubmit = props.onSubmit;
    const showModal = props.showModal;
    const [num, setNum] = useState(0);
    const [active, setActive] = useState(props.available);
    const [isOwner, setIsOwner] = useState(false);
    const [opened, setOpened] = useState(false);
    const [closed, setClosed] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [taken, setTaken] = useState(false);
    const parkingId = useRef(-1);
    const onFormSubmitted = async (id, isOwner=true) => {
       setIsOwner(isOwner);
       setActive(false); 
       parkingId.current = id;
    }
    const [timer, setTimer] = useState(10);
    const timeInterval = useRef(null);
    useEffect(() => {
        if (isOwner && !active && timeInterval.current === null) {
            timeInterval.current = window.setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }
    }, [isOwner,active]);
    const cancelReservation = () => {
        window.clearInterval(timeInterval.current);
            setActive(true);
            setIsOwner(false);
            setOpened(false);
            setClosed(false);
            setTaken(false);
            setTimer(900);
            timeInterval.current = null;
            props.sendCancelRequest(parkingId.current);
    }
    useEffect(() => {
        if (timer <= 0) {
            cancelReservation();
            
            timeInterval.current = null;
        }
    }, [timer]);

    useEffect(() => {
        if (!taken){
            if (opened &&  closed){
                window.clearInterval(timeInterval.current);
                setTaken(true);
                setClosed(false);
                setOpened(false);
                
                (async() => {
                const url = `${SERVER_URL}/reserveconfirm/${parkingId.current}`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                })();
            }
        
        }else{
            if (opened &&  closed){
                cancelReservation();
            }
        }
    },[opened,closed]);

    return (
        <>
            <div className={`lot ${active && 'lot-notactive'}`} onClick={active && showModal(props.parkinglot,onFormSubmitted)}>
               <div className="time"><h3 className="lot-name">{props.parkinglot}</h3></div>
                {
                    (isOwner && !active) && (
                        <>
                       {(taken) ?<div className="lotcarimg"><img className="cars" src={car}></img></div> :( <Time timer={timer} />  )}
                        {(!opened)? <button className="btn btn-open"onClick={setOpened}>Open</button>:
                        <button className="btn btn-closed"onClick={() => setClosed(opened)}>Close</button>}
                        {(!taken)&&<button className="btn btn-cancel" onClick={cancelReservation}>Cancel</button>}
                        </>
                    )
                }
                {
                    (!isOwner && !active) && (
                        <> 
                        <div className="lotcarimg"><img className="cars" src={car}></img></div>
                        </>
                    )
                }
            </div>

        </>
    )
}

export default  Lot;


