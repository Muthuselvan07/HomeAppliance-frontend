import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ac1 from "/assets/ac1.webp";
import user1 from "/assets/3.png";

function BlueStarAc() {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const reviews = [
    { name: "John", review: "The product is really nice!", img: user1 },
    { name: "Anita", review: "Loved the design and performance.", img: user1 },
    { name: "Raj", review: "Value for money!", img: user1 },
    { name: "Sara", review: "Fast delivery and great quality.", img: user1 },
    { name: "Kumar", review: "Amazing product and service.", img: user1 },
  ];

  return (
    <>
    
      <div className="md:hidden bg-blue-800 text-white flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">AIR CONDITIONER</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
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
        {/* Sidebar */}
        <nav
          className={`bg-blue-800 text-white flex flex-col items-start p-4 gap-4 text-xl fixed md:static h-screen md:h-auto w-56 transform md:transform-none transition-transform duration-300 z-50
          ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <h1 className="text-2xl font-bold mb-6 mt-6">Menu</h1>
          <Link to="/appliance/ac" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>AC</Link>
          <Link to="/appliance/tv" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>TV</Link>
          <Link to="/appliance/fridge" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Fridge</Link>
            <Link to="/appliance/fridge" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Fridge</Link>
        </nav>


        <div className="flex flex-col justify-start items-center w-full p-4 md:p-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mt-5">Blue Star AC</h1>


          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-6 w-full max-w-6xl">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={ac1}
                alt="Blue Star AC"
                className="max-w-full md:max-w-[80%] h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-4 px-2">
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                Blue Star 1.5 Ton 5 Star Wi-Fi Smart Inverter Split AC (Copper, Convertible 5 in 1 Cooling, AI Pro, DigiQ Sensors, 4 Way Swing, IC518ZNURS, White)
              </h2>

              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">3.5</span>
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

              <span className="text-lg bg-red-600 text-white px-3 py-1 rounded-2xl inline-block">
                ₹42,000
              </span>

              <div>
                <h3 className="text-xl font-semibold mt-4">Offer</h3>
                <p>NO Cost EMI | Easy Exchange</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-600 transition"
                  onClick={() => nav("/OrderForm")}
                >
                  Order
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="w-full max-w-6xl mt-10">
            <h1 className="text-3xl font-bold mb-6">About This Item</h1>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Powerful Cooling with Convertible 5-in-1 modes</li>
              <li>AI Pro Technology for smart temperature control</li>
              <li>Energy Rating: 5 Star | 60 Months Warranty</li>
              <li>Wi-Fi enabled for mobile control</li>
              <li>100% Copper Condenser Coil for better cooling</li>
            </ul>
          </div>

          {/* Reviews Section */}
          <div className="mt-10 w-full max-w-6xl">
            <h1 className="text-2xl font-semibold mb-6">Reviews</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((user, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
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

export default BlueStarAc;
