import React from "react";
import { useState } from "react";

import { close, menu, notifi, search, cart, chat } from "../assets";
import { navLinks } from "../constants";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="w-full flex h-16 sm:h-20 justify-between items-center navbar">
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-white fixed top-16 right-0 w-[100%] h-[92vh] sidebar`}
          >
            <ul className=" flex-1 gap-9 list-none flex flex-col items-start pt-20 px-10">
              {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[20px] text-black 
                }`}
              >
                <Link to={`${nav.link}`}>{nav.title}</Link>
              </li>
            ))} */}
              <li
                className={`font-poppins font-normal cursor-pointer text-[20px] text-black 
                }`}
              >
                 Home 
              </li>
              <li
                className={`font-poppins font-normal cursor-pointer text-[20px] text-black 
                }`}
              >
                 <NavLink to="/" >Marketplace</NavLink> 
              </li>
            </ul>

            {/* <ul className=" flex-1 gap-9 list-none flex flex-col items-start pt-20 px-10">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[20px] text-black 
                }`}
              >
                <a href={`#${nav.link}`}>{nav.title}</a>
              </li>
            ))}
          </ul> */}

            <div className="absolute flex items-center justify-center p-4 bg-[#3341C1] rounded-full right-[32px] bottom-10">
              <img src={chat} alt="" className="w-[24px]" />
            </div>
          </div>
        </div>

        <h1 className="font-bold sm:text-[32px] text-[28px] font-poppins text-black">
          ARTSY.
        </h1>

        {/* <ul className="list-none sm:flex hidden items-center gap-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-black}`}
          >
            <a href={`#${nav.link}`}>{nav.title}</a>
          </li>
        ))}
      </ul> */}

        <ul className="list-none sm:flex hidden items-center gap-10">
          {/* {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-black}`}
            >
              <Link to={`${nav.link}`}>{nav.title}</Link>
            </li>
          ))} */}
          <li
                className={`font-poppins font-normal cursor-pointer text-[20px] text-black 
                }`}
              >
                 Home 
              </li>
              <li
                className={`font-poppins font-normal cursor-pointer text-[20px] text-black 
                }`}
              >
                 Marketplace 
              </li>
        </ul>

        <div className=" flex items-center gap-8">
          {/* <Navbtn /> */}
          <img src={search} alt="search" className="w-[20px] cursor-pointer" />
          <img src={cart} alt="cart" className="w-[20px] cursor-pointer" />
          <img
            src={notifi}
            alt="notifi"
            className="w-[20px] cursor-pointer sm:block hidden"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
