import { useState } from "react";
import hand from '/assets/like.png';
import dislike from '/assets/dislike.png'
import mixed from '/assets/mixed.png'
import total from '/assets/total.png'

function Feedback(){
    const [good, setGood]=useState(0);
    const [bad ,setBad]=useState(0);
    const [neu,setNeu]=useState(0);
    return(
        <div className=" flex justify-center flex-col  items-center gap-3 mt-40 bg-gradient-to-r from-blue-500 to-green-400 w-full h-full">
            <h1 className="bg-blue-500 text-5xl py-3 px-7 rounded-[3px]">FEEDBack</h1>
            <div className="flex flex-row items-center gap-4">
                <div>
                <button className="py-2 px-6 bg-gray-950 rounded-2xl text-white hover:bg-white hover:text-black" onClick={()=>setGood(good+1)}>good</button>
                      
                </div>
               <div>
                       <button className="py-2 px-6 bg-gray-950  rounded-2xl text-white  hover:bg-white hover:text-black" onClick={()=>setBad(bad+1)}>bad</button>
               </div>
           
               <div>
                       <button className="py-2 px-6 bg-gray-950 rounded-2xl text-white  hover:bg-white hover:text-black" onClick={()=>setNeu(neu+1)}>neutral</button>
               </div>
            
               
            </div>
            <div  className="flex flex-row items-center gap-4">
                <div>
                    <img src={hand} className="w-[100px] h-[100px] object-contain"></img>
                    <p>good:{good}</p>
                </div>
                <div>
                     <img src={dislike} className="w-[70px] h-[70px] object-contain"></img>
                     <p>bad:{bad}</p>
                </div>
               <div>
                      <img src={mixed} className="w-[70px] h-[70px] object-contain"></img>
                      <p>neutral:{neu}</p>
               </div>
                <div>
                     <img src={total} className="w-[70px] h-[70px] object-contain"></img>
                       <p>total:{good + bad + neu}</p>
                </div>
               
            </div>
        </div>
    )
    

};
export default Feedback;