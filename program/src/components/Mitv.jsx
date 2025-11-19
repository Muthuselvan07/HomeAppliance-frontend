import {Link} from "react-router-dom"
import mi1 from '/assets/mitv2.jpg'
import user1 from '/assets/3.png'
import { useNavigate } from "react-router-dom";
import React ,{useState}from "react";




function Mitv() {
  const nav = useNavigate();
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
     <div className="md:hidden bg-blue-800 text-white flex items-center justify-between p-4">
           <h1 className="text-2xl font-bold">TELEVISION</h1>
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
    
       <div className="flex flex-col justify-start items-center w-full p-4 md:p-6">
  {/* Title */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mt-5">
    Redmi TV
  </h1>

  {/* Product Section */}
  <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-10 mt-6 w-full max-w-6xl">
    
    {/* Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <img
        src={mi1}
        alt="Redmi TV"
        className="max-w-full md:max-w-[80%] h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Details */}
    <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-4 md:space-y-6 px-2 md:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Xiaomi 138 cm (55 inch) X Ultra HD 4K Smart Google LED TV L55MB-AIN
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-semibold">3.5</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 33 33"
          className="w-6 h-6 text-yellow-500 fill-current"
        >
          <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 
                            9.553 20.362 0.99 12.335 12.532 10.758 
                            17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
        </svg>
      </div>

      {/* Price */}
      <span className="text-lg sm:text-xl text-white bg-red-600 p-2 rounded-2xl inline-block">
        &#8377;42,000
      </span>

      {/* Offers */}
      <div className="mt-3 space-y-2">
        <h3 className="text-xl sm:text-2xl font-semibold">Offer</h3>
        <div className="flex flex-col sm:flex-row gap-2 text-gray-700">
          <p>NO Cost EMI</p>
          <p>Easy Exchange</p>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 cursor-pointer transition-colors"
          onClick={() => nav('/OrderForm')}
        >
          Order
        </button>
      </div>
    </div>
  </div>


  <div className="mt-10 w-full max-w-6xl px-2 md:px-0">
    <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Reviews</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { name: "John", review: "The product is really nice!", img: user1 },
        { name: "Anita", review: "Loved the design and performance.", img: user1 },
        { name: "Raj", review: "Value for money!", img: user1 },
        { name: "Sara", review: "Fast delivery and great quality.", img: user1 },
        { name: "Kumar", review: "Amazing product and service.", img: user1 },
      ].map((user, index) => (
        <div
          key={index}
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
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
        
        
        </>

  );
}


export default Mitv;
