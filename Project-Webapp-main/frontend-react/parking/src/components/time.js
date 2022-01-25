import {useState,useRef,useEffect} from 'react';
function Time(props) {
    const timer = props.timer;
    
    return (
        <h1>{('0'  + Math.floor(timer / 60)).slice(-2)}:{('0' + (timer % 60)).slice(-2)}</h1>
    );
}
export default Time;