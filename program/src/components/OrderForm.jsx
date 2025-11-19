import React from 'react';
import mi1 from '/assets/mitv2.jpg';

function OrderForm() {
  return (
    <>
      {/* <div className="mt-6 px-4 sm:px-6 lg:px-10">
     
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">Product Details</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    
          <img
            src={mi1}
            alt="Xiaomi TV"
            className="w-full sm:w-[400px] md:w-[500px] h-auto rounded-xl shadow-lg"
          />

       
          <div className="flex flex-col items-start gap-3 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold">Xiaomi TV</h2>
            <p className="text-xl sm:text-2xl">Price: $400</p>
            <p className="text-xl sm:text-2xl">Description: 4K Smart TV</p>
          </div>
        </div>
      </div> */}

 
      <div className="flex justify-center items-center py-10 px-4">
        <form className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6">Place Your Order</h2>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
            <div className="w-full">
              <label className="block mb-1 text-gray-700 font-medium">First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-gray-700 font-medium">Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

     
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

     
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

      
          <div className="mb-4">
            <h1 className="text-2xl font-semibold mb-2 text-gray-800">Mode of Payment</h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                  required
                />
                Credit Card
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="debitCard"
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                  required
                />
                Debit Card
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                  required
                />
                UPI ID
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                  required
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Address:</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

      
          <div className="flex justify-center">
            <button
              type="submit"
              className="p-3 px-6 bg-blue-700 text-white rounded-2xl text-lg hover:bg-white hover:text-blue-700 hover:border-2 hover:border-blue-700 transition-all duration-300"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderForm;
