import React from "react";
import { useNavigate } from "react-router-dom";
function Signup(){

const navigate=useNavigate();
      

            
  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/home"); 
  }
    return (
  <>
    <div className="mt-10 w-full h-screen flex justify-center items-center bg-[url('/assets/signupbg.webp')] bg-cover bg-no-repeat relative">
      
  
      <div className=" absolute 
        flex flex-col justify-center items-center
        w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 
        p-6 rounded-xl 
        bg-black/40 backdrop-blur-md shadow-lg
        text-white
        bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2
        md:translate-x-0 md:translate-y-0 md:bottom-16 md:right-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full text-lg md:text-xl">
          <input type="text" placeholder="Username" className="mb-4 p-3 rounded text-white" />
          <input type="password" placeholder="Password" className="mb-6 p-3 rounded text-white" />
          <button
            type="submit" 
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>

    </div>
  </>
);

}
export default Signup;