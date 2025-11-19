import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ac1 from "/assets/ac1.webp";
import user1 from "/assets/3.png";

function whirlpoolAc() {
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
          <Link to="/appliance/washingmechine" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Washing Mechine</Link>
        </nav>


        <div className="flex flex-col justify-start items-center w-full p-4 md:p-6">
        

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
              Whirlpool 1.5 Ton 3 Star, Magicool Inverter Split AC (MAGICOOL 15T 3S INV CNV S5K2PP0, Copper, Convertible 4-in-1 Cooling Mode, HD Filter White)
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
              <li>
                Split AC with Intellisense inverter compressor: variable speed compressor which adjusts power depending on heat load. 4-in-1 Convertible with 4 cooling cooling modes through remote control to operate in different tonnages for different cooling needs
              </li>
              <li>
                Capacity: 1.5 Ton. Suitable for medium sized rooms (111 - 150 square feet) & Ambient Temperature: 52 degree Celsius with 2-way swing
              </li>
              <li>
                Energy Rating: 3 Star, ISEER Value: 3.95, Electricity Consumption 941.42 units per year
              </li>
              <li>
                In Box: Indoor Unit, 1 Outdoor Unit, 3 m Length Inter Connecting Copper Pipe, 1 Remote, 1 Manual.
              </li>
              <li>
                Key Feature : 6th sense technology, Dust Filter, Stabilizer free operation within (140 V ~ 280 V), Temperature Hidden display, Noise Level: IDU 42 dB
              </li>
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

export default whirlpoolAc;