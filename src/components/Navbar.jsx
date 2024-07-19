import { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeBtn from "../assets/images/icon-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between md:px-32 px-8 cursor-pointer">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div
          className="md:hidden block"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img src={hamburger} alt="" />
        </div>
        {isOpen ? (
          <div className="md:flex md:items-center md:w-auto ">
            <nav>
              <ul
                className="flex flex-col absolute  bg-Black left-0 top-0 w-full  h-screen   
                gap-14 text-White font-sans font-light  text-2xl px-4 z-10"
              >
                <div className="flex justify-between items-center pt-12 md:pt-16 md:hidden">
                  <div>
                    <img src={logo} alt="logo" />
                  </div>
                  <div
                    className=" block"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                  >
                    <img src={closeBtn} alt="" />
                  </div>
                </div>
                <li>
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:underline">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <ul
            className="hidden md:flex md:relative md:flex-row 
            gap-10 text-White md:font-alata  md:text-sm 
               "
          >
            <li>
              <a href="#" className=" hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Support
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
