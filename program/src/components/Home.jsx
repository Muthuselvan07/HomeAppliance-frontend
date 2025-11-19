import React from "react";
import Footer from './Footer.jsx'
import phone from '/assets/iphone.png'
import laptop from '/assets/laptop.jpg'
import ac from '/assets/ac.png'
import wash from '/assets/wash.webp'
import iphone from '/assets/iphone.webp'
import {useState,useEffect} from "react"
import tele from '/assets/tv.webp'
import { useNavigate } from "react-router-dom";
import f4 from '/assets/lgfridge.webp'
import tv1 from '/assets/samtv.jpg';


      

function Home(){
 
  const navigate=useNavigate();
      
 function HeroSection() {
  const phoneImages = [iphone,ac,tele,wash];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phoneImages.length);
    }, 2000);
    return () => clearInterval(interval);
     }, []);
  return(
<>
    <div className="bg-[url('/assets/bg2.jpg')] w-full min-h-[500px] lg:h-[500px] bg-cover bg-center flex flex-col lg:flex-row items-center justify-between p-6 lg:p-20">
   
    <div className=" flex flex-col justify-center text-left   lg:mt-0 mt-10 lg:ms-0 ms-0 lg:w-1/2 w-full">
      <h1 className="text-5xl font-bold sm:text-4xl lg:text-5xl  leading-tight">Incredible Prices <br />On all Your <br />Favorite items</h1>
      <h3 className="text-lg sm:text-xl lg:text-2xl mt-4">get more for less on selected brands</h3>
      <button className="bg-blue-800 w-40  sm:w-40 h-10 sm:h-12 text-lg sm:text-2xl text-white rounded-4xl mt-6" >shop now</button>
    </div>
     <div className="mt-10 lg:mt-0 lg:w-1/2 w-full flex justify-center  hover:shadow-2xl shadow-black ">
      <img src={phoneImages[index]} className="object-contain w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] h-auto" />
    </div>
     </div>
    
     <div className="flex  flex-col justify-center items-center mx-auto gap-6 ">
      <h1 className="text-center text-3xl sm:text-3xl font-semibold pt-6">Deals of the day</h1>
      <div className="w-[200px] h-3 sm:w-[200px] bg-amber-400 mb-3 "></div>
      </div>
    <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
  
    
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black  bg-gradient-to-t from-white to-indigo-800 p-6 rounded-lg hover:translate-y-5 hover:scale-105 transition-transform duration-300">
      <img src={ac} alt="Washing Machine" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Voltas AC</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2 rounded-2xl hover:bg-white hover:text-black" onClick={()=>navigate("/appliance/voltasac")}>View Details</button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black  bg-gradient-to-t from-white to-indigo-800 p-6 rounded-lg hover:translate-y-5 hover:scale-105 transition-transform duration-300">
      <img src={ac} alt="Washing Machine" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Hitachi AC</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2 rounded-2xl hover:bg-white hover:text-black" onClick={()=>navigate("/appliance/washingmechine/samsung")}>View Details</button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black  bg-gradient-to-t from-white to-indigo-800 p-6 rounded-lg hover:translate-y-5 hover:scale-105 transition-transform duration-300">
      <img src={wash} alt="Washing Machine" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Washing Machine</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2 rounded-2xl hover:bg-white hover:text-black">View Details</button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black bg-gradient-to-t from-white to-indigo-800 p-6 rounded-lg hover:translate-y-5 hover:scale-105 transition-transform duration-300">
      <img src={iphone} alt="Washing Machine" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">iphone</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2 mb-4 rounded-2xl hover:bg-white hover:text-black">View Details</button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black  bg-gradient-to-t from-white to-indigo-800 p-6 rounded-lg hover:translate-y-5 hover:scale-105 transition-transform duration-300">
      <img src={tv1} alt="Washing Machine" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Samsung TV</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2 rounded-2xl hover:bg-white hover:text-black">View Details</button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black    bg-gradient-to-t from-white to-indigo-800 p-6 rounded-lg hover:translate-y-5 hover:scale-105 transition-transform duration-300">
      <img src={f4} alt="Washing Machine" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">lg fridge</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2 rounded-2xl hover:bg-white hover:text-black">View Details</button>
    </div>
  </div>
</div>
<div className="grid grid-cols-3 justify-items-center items-center mt-16 gap-6">
  <div className="text-center text-3xl">
    <p>easy EMI & low cost EMI</p>
  </div>
  <div className="text-center text-3xl">
    <p>Exchange Offers</p>
  </div>
  <div className="text-center text-3xl">
    <p>fast delevery</p>
  </div>
</div>




<Footer />
     
    </>       
  )
}
  return <HeroSection />
}
export default Home; 