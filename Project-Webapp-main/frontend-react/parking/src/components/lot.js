// import { Component } from 'react';
import React, { Component, useState, useContext ,useEffect,useRef} from "react";
import lot from "./css/lot.css";
import Container from "./Containerf";
import supercar from "../../src/assets/img/IMG_7321.PNG"
import van from "../../src/assets/img/van.png"
import suv from "../../src/assets/img/kisspng-car-door-dodge-caravan-chrysler-5b383c0979afb0.8134303815304120414984.png"
import sportcar from "../../src/assets/img/NicePng_car-top-view-png_544278.png"
import sedan from "../../src/assets/img/IMG_7315.PNG"
import pickup from "../../src/assets/img/IMG_7305.PNG"
import Time from "./time";
const SERVER_URL = 'http://localhost:5500';

const carImages = {
    'sedan': sedan,'supercar':supercar,'van':van,'suv':suv,'pickup':pickup,'sportcar':sportcar
}

function Lot(props) {

    const txt = props.txt;
    const onSubmit = props.onSubmit;
    const showModal = props.showModal;
    const timestamp = props.createdAt;
    const [active, setActive] = useState(props.available);
    const [isOwner, setIsOwner] = useState(false);
    const [opened, setOpened] = useState(false);
    const [closed, setClosed] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [taken, setTaken] = useState(props.taken === 1);
    const parkingId = useRef(-1);
    
    const prevAvailable = useRef(active);
    const prevTaken = useRef(taken);

    const onFormSubmitted = async (id, isOwner=true) => {
       setIsOwner(isOwner);
       setActive(false); 
       parkingId.current = id;
    }
    // useEffect(() => {
    //     if (!isOwner) {
    //         if (!props.taken && prevAvailable.current && prevTaken.current)
    //             cancelReservation();
            
    //         if (prevAvailable.current !== props.active) {
    //             setActive(props.active);
    //             prevAvailable.current = props.active;
    //         }
    //         if (prevTaken.current !== props.taken) {
    //             setTaken(props.taken);
    //             prevTaken.current = props.taken;
    //         }
    //     }
    // }, [props.available, props.taken]);
    const [timer, setTimer] = useState(900);
    const timeInterval = useRef(null);
    useEffect(() => {
        if (isOwner && !active && timeInterval.current === null) {
            timeInterval.current = window.setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else if (!isOwner && !active && timeInterval.current === null) {
            // "2022-02-22T16:33:06.000Z"
            const pattern = /(\d{4})\-(\d{2})\-(\d{2})T(\d{2})\:(\d{2}):(\d{2})\.(\d{3})Z/;
            const date = new Date(timestamp.replace(pattern, '$1-$2-$3 $4:$5:$6 GMT'));
            setTimer(900 - Math.floor((new Date() - date) / 1000));

            timeInterval.current = window.setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            // timeInterval.current = window.setInterval(() => {
            //     setTimer(prevTimer => prevTimer - 1);
            // }, 1000);
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
            if (parkingId.current !== null)
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
                       {(taken) ?<div className="lotcarimg"><img className="supercar" src={carImages[props.cartype.toLowerCase()]}></img></div> :( <Time timer={timer} />  )}
                        {(!opened)? <button className="btn btn-open"onClick={setOpened}>Open</button>:
                        <button className="btn btn-closed"onClick={() => setClosed(opened)}>Close</button>}
                        {(!taken)&&<button className="btn btn-cancel" onClick={cancelReservation}>Cancel</button>}
                        </>
                    )
                }
                {
                    (!isOwner && !active) && (
                        <> 
                        {taken && <div className="lotcarimg"><img className="cars" src={carImages[props.cartype.toLowerCase()]}></img></div>}
                        {!taken && <Time timer={timer} />}
                        </>
                    )
                }
            </div>

        </>
    )
}

export default  Lot;


