import React from "react";
import user1 from '/assets/3.png'
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function About(){
  const navigate = useNavigate();

  return(
    <>
   
    <div className="bg-[url('/assets/servicebg.jpg')] w-full min-h-[500px] lg:h-[500px] bg-cover bg-center flex items-center p-6 lg:p-20">
  
  <div className="flex flex-col justify-center text-right items-end ml-auto w-full lg:w-1/2">
    <h1 className="text-5xl font-bold sm:text-4xl lg:text-5xl leading-tight">
      Fast and reliable repairs <br />For your appliances
    </h1>

    <h3 className="text-lg sm:text-xl lg:text-2xl mt-4">
      get more for less on selected brands
    </h3>

    <button className="bg-blue-800 w-40 sm:w-40 h-10 sm:h-12 text-lg sm:text-2xl text-white rounded-4xl mt-6">
      shop now
    </button>
  </div>

</div>
<div className="mt-10 w-full max-w-6xl px-2 md:px-0 justify-center items-center">
  <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Our Best Service Experts</h1>
  <div className=" mx-auto items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
    {[
  { name: "John", review: "thoothkudi", img: user1, rating: 5 },
  { name: "Anita", review: "Tirunelveli", img: user1, rating: 4 },
  { name: "Raj", review: "KannyaKumari", img: user1, rating: 4 },
  { name: "Sara", review: "Madurai", img: user1, rating: 5 },
  { name: "Kumar", review: "Chennai", img: user1, rating: 3 },
].map((user, index) => (
  <div key={index}
    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
  >
    <img
      src={user.img}
      alt={user.name}
      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
    />

    <div className="flex flex-col">
      <h2 className="text-lg sm:text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.review}</p>

     
      <div className="flex text-yellow-400 mt-1">
        {Array.from({ length: user.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
        {Array.from({ length: 5 - user.rating }).map((_, i) => (
          <span key={i} className="text-gray-300">★</span>
        ))}
      </div>

      <button
        className="mt-2 bg-blue-800 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
        onClick={() => navigate('/hire')}
      >
        Hire Me
      </button>
    </div>
  </div>
))}
</div>
</div>


     <Footer />
    </>
  );
}

export default About;
