import { Link,Outlet} from "react-router-dom";
import Footer from './Footer.jsx'
import b1 from '/assets/samsung.png'
import b2 from '/assets/lg.png'
import b3 from '/assets/sony.png'
import b4 from '/assets/pana.png'
import b5 from '/assets/mi.webp'
import b6 from '/assets/hp.png'
import b7 from '/assets/apple.png'
import a1 from '/assets/ad1.webp'
import a2 from '/assets/ad2.jpg'
import a3 from '/assets/ps.webp'
import a4 from '/assets/phonead.jpg'
import a5 from '/assets/sad.jpg'
import a6 from '/assets/fad.jpg'
import React, { useState } from "react";
import haier from '/assets/haierwashing.jpg'
import sam from '/assets/samtvad.jpg'
import zeb from '/assets/zeblogo.webp'



function Gaget() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div className="md:hidden bg-blue-800 text-white flex items-center justify-between p-4">
           <h1 className="text-2xl font-bold">HOME APPLIANCE</h1>
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
    
      <div className="flex-1 p-6 space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-center text-black mb-6 my-20">Top Brands</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
              <img src={b1} alt="Samsung" className="w-[150px] h-[150px] object-contain hover:w-[550px]" />
              <img src={b2} alt="LG" className="w-[150px] h-[150px] object-contain hover:w-[550px]" />
              <img src={b3} alt="Sony" className="w-[150px] h-[150px] object-contain hover:w-[550px]" />
              <img src={b4} alt="Panasonic" className="w-[150px] h-[150px] object-contain hover:w-[550px]" />
              <img src={b5} alt="Mi" className="w-[150px] h-[150px] object-contain hover:w-[200px]" />
              <img src={b6} alt="HP" className="w-[150px] h-[100px] object-contain hover:w-[200px]" />
              <img src={b7} alt="Apple" className="w-[150px] h-[150px] object-contain hover:w-[200px]" />
               <img src={zeb} alt="Apple" className="w-[150px] h-[150px] object-contain hover:w-[200px]" />
              
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-6">Advertisements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  gap-2 justify-items-center items-start">
              <img src={a1} alt="Ad 1" className="w-[500px]  object-contain " />
              <img src={a2} alt="Ad 2" className="w-[500px]   object-contain" />
               <img src={a3} alt="Ad 2" className="w-[500px]   object-contain" />
                <img src={a4} alt="Ad 2" className=" w-[500px]  object-contain" />
                 <img src={a5} alt="Ad 2" className="w-[500px]  object-contain" />
                  <img src={a6} alt="Ad 2" className="w-[500px]  object-contain" />
                   <img src={haier} alt="Ad 2" className="w-[500px]  object-contain" />
                       <img src={sam} alt="Ad 2" className="w-[500px]  object-contain" />
            </div>
          </div>

          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gaget;
