import React from "react";
import logo1 from "../images/logo1.png";
import title from "../images/title.png";
import tongue from "../images/tongue.png";
import { Link, to } from "react-router-dom";
import hen from "../images/hen.png";
export default function Navbar() {
  const ShowNav = () => {
    console.log("I am in the Show nav Function");
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var j = 0; j < menu.length; j++) {
        menu[j].classList.toggle("disappear");
      }
      document.getElementById("changeImg").classList.toggle("hidden");
      document.getElementById("titleImg").classList.toggle("hidden");
      setTimeout(() => {
        document.getElementById("changeImg").classList.toggle("rotate-270");
      }, 1);
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    // if (close.length) {
    //   for (var i = 0; i < close.length; i++) {
    //     close[i].addEventListener("click", function () {
    //       for (var j = 0; j < menu.length; j++) {
    //         menu[j].classList.toggle("hidden");
    //       }
    //     });
    //   }
    // }

    // if (backdrop.length) {
    //   for (var i = 0; i < backdrop.length; i++) {
    //     backdrop[i].addEventListener("click", function () {
    //       for (var j = 0; j < menu.length; j++) {
    //         menu[j].classList.toggle("hidden");
    //       }
    //     });
    //   }
    // }
  };
  // );
  // </script>
  return (
    <div className="h-16">
      <nav className="relative  bg-black px-4 py-4 flex justify-between items-center">
        <a className="text-3xl font-bold leading-none" href="/">
          <img
            id="titleImg"
            src={logo1}
            className="h-14 "
            alt="Venom.io"
            srcSet=""
          />
          <img
            id="changeImg"
            src={tongue}
            className="hidden  duration-300 z-50 top-0 -left-8 absolute h-32"
            alt="Venom.io"
          />
        </a>

        <div className="venomtheDeveloperpic ml-11 font-bold text-xl text-white">
          <img src={title} className="h-12" />
        </div>
        {/* <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm text-white font-bold  hover:text-gray-500"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                className="hidden"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-blue-600 font-bold" href="/">
              About Us
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                className="hidden"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-white font-bold hover:text-gray-500"
              href="/"
            >
              Services
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                className="hidden"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-white font-bold hover:text-gray-500"
              href="/"
            >
              Pricing
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                className="hidden"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-white font-bold hover:text-gray-500"
              href="/"
            >
              Contact
            </a>
          </li>
        </ul> */}
        <div className="flex">
          <div className="">
            <button
              className="navbar-burger flex items-center text-blue-600 p-3"
              onClick={() => {
                ShowNav();
              }}
            >
              <svg
                className="block h-4 w-4 fill-current text-pink-500"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* <div className=" transition-all duration-500 ease-in-out disappear relative z-50 "> */}
      <nav className=" navbar-menu w-56 overflow-hidden navbar-backdrop boxShadow transition-all duration-500 ease-in-out disappear relative z-10 top-8  items-center mb-8  min-h-fit left-4 bottom-0 flex flex-col max-w-sm py-6 rounded-lg px-6 bg-zinc-900 border-r overflow-y-auto">
        <div className="   inset-0  rotate-1   flex items-center justify-between mb-8">
          <a className=" text-3xl mr-9 font-bold leading-none" href="/">
            <img src={hen} className="h-10 mr-9" alt="Venom.io" srcSet="" />
          </a>
          <button
            className="navbar-close"
            onClick={() => {
              ShowNav();
            }}
          >
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1">
              <Link
                className="block  text-center p-4 text-sm navitems text-pink-500 hover:bg-pink-500 hover:text-white font-bold rounded px-20"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="block w-full p-4 text-sm  text-center  navitems  text-pink-500 hover:bg-pink-500 hover:text-white font-bold rounded"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="block w-full p-4 text-sm  navitems  text-center text-pink-500 hover:bg-pink-500 hover:text-white font-bold rounded"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="block p-4 w-full text-sm navitems  text-center text-pink-500 hover:bg-pink-500 hover:text-white font-bold rounded"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          {/* <div className="pt-6">
            <a
              className="block px-4 py-3 mb-3 text-[14px] text-center font-semibold  lg:hidden leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
              href="/"
            >
              Sign in
            </a>
            <a
              className="block px-4 text-[14px] py-1 mb-2 leading-loose  text-center lg:hidden text-white font-semibold bg-pink-500 hover:bg-white hover:text-pink-500  rounded-xl"
              href="/"
            >
              Login In
            </a>
          </div> */}
          <p className="my-4 text-xs text-center text-gray-400">
            <span>Copyright © 2021</span>
          </p>
        </div>
      </nav>
    </div>
  );
}
