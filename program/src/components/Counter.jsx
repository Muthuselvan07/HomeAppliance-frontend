import { useState } from "react";


function Counter(){
   
        // const[count,setCounter] =useState(0);
        
           let c=0;
           c=c+1;
        
    return(
    

       /* {/<h1>counter</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCounter(count+1)}>increment</button>
        <button onClick={()=>setCounter(count-1)}>decrement</button>
        <button onClick={()=>setCounter(0)}>reset</button>
    
        }*/
        <>
       <h1>Counter</h1>
            <p>{count}</p>
        <button onclick= {Counter}>click</button>
        </>
    )
}
export default Counter;