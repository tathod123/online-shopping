//import React, { useState } from "react";
//import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "All Product" },
    { id: 2, text: "Category" },
    { id: 3, text: "Cart" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="bg-sky-600 flex justify-between items-center h-35 max-w-[1640px] mx-auto px-4 text-white">
      <div>
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] text-rose-800">
          OnlineShopping
          <FiShoppingCart />
        </h1>
        <div />
      </div>

      <div className="flex items-center">
        <div className="flex border border-purple-200 rounded-xl x">
          <input
            type="text"
            className="block w-full px-10 py-2 text-purple-700 rounded-xl focus:outline-none placeholder-current"
            placeholder="Search"
          />
          <button className="px-4 text-white bg-purple-600 border-l rounded-xl ">
            Search
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-2xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
