import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <>
      <nav className="bg-cyan-400 w-full z-50">
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
     
          <h1 className="text-2xl font-bold text-white">Home</h1>

   
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-white rounded-xl overflow-hidden shadow-sm"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 w-64 outline-none text-gray-700"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>

  
          <ul className="hidden md:flex gap-6 text-2xl text-white">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">Service</Link></li>
            <li><Link to="/appliance">Appliances</Link></li>
          </ul>

     
          <button
            aria-label="Open menu"
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}


        <div
          className={`fixed top-0 right-0 h-full w-64 bg-cyan-500 text-white text-xl p-6 transform transition-transform duration-300 ease-in-out z-50
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            aria-label="Close menu"
            className="text-3xl mb-6"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-xl overflow-hidden mb-4"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 w-full text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-2 hover:bg-blue-700"
            >
              🔍
            </button>
          </form>


          <ul className="flex flex-col gap-4">
            <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>Service</Link></li>
          
            <li><Link to="/appliance" onClick={() => setMenuOpen(false)}>Appliances</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

