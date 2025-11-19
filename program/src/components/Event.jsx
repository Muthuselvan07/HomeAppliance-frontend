import {useState,useEffect,useRef} from 'react'

function Event(){
    const[inputValue,setinputValue]=useState('')
        const preValue=useRef('')


    useEffect (()=>{
        preValue.current=inputValue;
    },[inputValue]);

    return(
        <>
        <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)} />
        <h1>current value:{inputValue}</h1>
        <h1>previous value:{preValue.current}</h1>
        </>
    )
    
}
export default Event;