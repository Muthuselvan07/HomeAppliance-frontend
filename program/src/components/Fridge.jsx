import { Link } from "react-router-dom";
import f1 from "/assets/samfridge.webp"
import f2 from '/assets/bluefridge.webp'
import f3 from '/assets/wfridge.webp'
import f4 from '/assets/lgfridge.webp'

import f5 from '/assets/lgfridge.webp'
import { useNavigate } from "react-router-dom";
import {useState} from "react";

function Fridge(){
    const navigate=useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
          <div className="md:hidden bg-blue-800 text-white flex items-center justify-between p-4">
                 <h1 className="text-2xl font-bold">FRIDGE</h1>
                 <button
                   onClick={() => setMenuOpen(!menuOpen)}
                   className="focus:outline-none"
                 >
                   
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="w-8 h-8"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     {menuOpen ? (
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M6 18L18 6M6 6l12 12"
                       />
                     ) : (
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M4 6h16M4 12h16M4 18h16"
                       />
                     )}
                   </svg>
                 </button>
               </div>
                  <div className="flex">
             
                <nav
                         className={`bg-blue-800 text-white flex flex-col items-start p-4 gap-4 text-xl fixed md:static h-screen md:h-auto w-48 md:w-48 transform md:transform-none transition-transform duration-300 z-50
                         ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
                       >
                         <h1 className="text-2xl font-bold mb-6 mt-6">Menu</h1>
                         <Link to="/appliance/ac" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>AC</Link>
                         <Link to="/appliance/tv" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>TV</Link>
                         <Link to="/appliance/fridge" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Fridge</Link>
                         <Link to="/appliance/washingmechine" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Washing Mechine</Link>
                       </nav>
             
     <div className="flex-1 p-6">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center mt-14">
            <div className=" flex flex-col items-center text-center relative  bg-white px-2 py-1 rounded-lg shadow  hover:shadow-2xl shadow-black hover:translate-y-5 hover:scale-105 transition-transform duration-300">
                <img src={f1}  className="w-[300px] h-[200px] object-contain"/>
                <h2 className="font-bold text-2xl">Samsung</h2>
                <div className="flex  items-center absolute top-2 right-3">
                    <h1 className="text-3xl">4.0</h1>
                    <div className="flex">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 33 33"
                className="w-6 h-6 mx-auto mt-2 text-yellow-500 fill-current"
              >
                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 
                                  9.553 20.362 0.99 12.335 12.532 10.758 
                                  17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
              </svg>
              </div>
              </div>
            


                <h3 className="mb-3">price:3500</h3>
                <button className="bg-blue-800 w-[100px] h-[50px] text-white rounded-2xl p-3 mb-4" onClick={()=>navigate("/appliance/samsungfridge")}>view more</button>
            </div>
    
        <div className=" flex flex-col items-center text-center relative  bg-white px-2 py-1 rounded-lg shadow  hover:shadow-2xl shadow-black hover:translate-y-5 hover:scale-105 transition-transform duration-300">
                <img src={f2}  className="w-[250px] h-[180px] object-contain mx-auto mt-7"/>
                <h2 className="font-bold text-2xl">BlueStar</h2>
                <div className="flex  items-center absolute top-2 right-3">
                    <h1 className="text-3xl">3.5</h1>
                    <div className="flex">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 33 33"
                className="w-6 h-6 mx-auto mt-2 text-yellow-500 fill-current"
              >
                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 
                                  9.553 20.362 0.99 12.335 12.532 10.758 
                                  17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
              </svg>
              </div>
              </div>
            


                <h3 className="mb-3">price:3500</h3>
                <button className="bg-blue-800 w-[100px] h-[50px] text-white rounded-2xl p-3 mb-4" onClick={()=>navigate("/appliance/bluestarfridge")}>view more</button>
            </div>
            <div className=" flex flex-col items-center text-center relative  bg-white px-2 py-1 rounded-lg shadow  hover:shadow-2xl shadow-black hover:translate-y-5 hover:scale-105 transition-transform duration-300">
                <img src={f3}  className="w-[250px] h-[180px] object-contain mx-auto mt-7"/>
                <h2 className="font-bold text-2xl">whirlpool</h2>
                <div className="flex  items-center absolute top-2 right-3">
                    <h1 className="text-3xl">4.0</h1>
                    <div className="flex">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 33 33"
                className="w-6 h-6 mx-auto mt-2 text-yellow-500 fill-current"
              >
                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 
                                  9.553 20.362 0.99 12.335 12.532 10.758 
                                  17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
              </svg>
              </div>
              </div>
            


                <h3 className="mb-3">price:3500</h3>
                <button className="bg-blue-800 w-[100px] h-[50px] text-white rounded-2xl p-3 mb-4" onClick={()=>navigate("/appliance/whirlpoolfridge")}>view more</button>
            </div>
            <div className=" items-center flex flex-col text-center relative  bg-white px-2 py-1 rounded-lg shadow  hover:shadow-2xl shadow-black hover:translate-y-5 hover:scale-105 transition-transform duration-300">
                <img src={f4}  className="w-[250px] h-[180px] object-contain mx-auto mt-7"/>
                <h2 className="font-bold text-2xl">haier</h2>
                <div className="flex  items-center absolute top-2 right-3">
                    <h1 className="text-3xl">4.0</h1>
                    <div className="flex">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 33 33"
                className="w-6 h-6 mx-auto mt-2 text-yellow-500 fill-current"
              >
                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 
                                  9.553 20.362 0.99 12.335 12.532 10.758 
                                  17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
              </svg>
              </div>
              </div>
            


                <h3 className="mb-3">price:3500</h3>
                <button className="bg-blue-800 w-[100px] h-[50px] text-white rounded-2xl p-3 mb-4" onClick={()=>navigate("/appliance/haierfridge")}>view more</button>
            </div>
            <div className=" flex flex-col items-center text-center relative  bg-white px-2 py-1 rounded-lg shadow  hover:shadow-2xl shadow-black hover:translate-y-5 hover:scale-105 transition-transform duration-300">
                <img src={f5}  className="w-[250px] h-[180px] object-contain mx-auto mt-7"/>
                <h2 className="font-bold text-2xl">voltas</h2>
                <div className="flex  items-center absolute top-2 right-3">
                    <h1 className="text-3xl">4.0</h1>
                    <div className="flex">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.5 33 33"
                className="w-6 h-6 mx-auto mt-2 text-yellow-500 fill-current"
              >
                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 
                                  9.553 20.362 0.99 12.335 12.532 10.758 
                                  17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
              </svg>
              </div>
              </div>
                <h3 className="mb-3">price:3500</h3>
              
                <button className="bg-blue-800 w-[100px] h-[50px] text-white rounded-2xl p-3 mb-4" onClick={()=>navigate("/appliance/voltasfridge")}>view more</button>
            </div>
            
        </div>
      </div>
    </div>
      </>
    )
}
export default Fridge;