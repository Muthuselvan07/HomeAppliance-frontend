// import {useState,useEffect} from "react"


// const Count =() =>{
//     const [count, setCount]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((count)=>count+1);

//         },1000);
//     },[])
//     return (<h1>counted {count}</h1>)
// }
// export default Count;
import { useEffect } from "react";

function Count() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Tick");
    },1000);

    return () => {
      clearInterval(id); // cleanup when unmounted
    };
  }, []);

  return <h1>Timer Running...</h1>;
}
export default Count;