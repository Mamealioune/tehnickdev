import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      setIsMenuFixed(true);
    } else {
      setIsMenuFixed(false);
    }
  }, [isScrolled]);

  return (
    <div>
      <nav
        className={`fixed w-full z-50 ${
          isMenuFixed ? "bg-brand top-0" : ""
        } transition-all duration-300 `}
      >
        {/* Début Dimension de responsive */}
        <div className="flex fixed bg-slate-50 rounded-full">
          <span className="sm:hidden text-black text-4xl">XS</span>
          <span className="hidden sm:block md:hidden text-black text-4xl">
            SM
          </span>
          <span className="hidden md:block lg:hidden text-black text-4xl">
            MD
          </span>
          <span className="hidden lg:block xl:hidden text-black text-4xl">
            MD
          </span>
        </div>
        {/* Fin Dimension de responsive */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../Images/Logo Technik.png"
              className="h-20 w-30"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isScrolled && !isMenuFixed
                      ? "text-white"
                      : "text-white bg-blue-700"
                  } rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-2xl font-bold  md:dark:text-blue-600 font-titillium hover:text-white `}
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isScrolled && !isMenuFixed ? "text-white" : "text-white"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white text-2xl font-titillium  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Qui somme Nous ?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isScrolled && !isMenuFixed ? "text-white" : "text-white"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white text-2xl font-titillium md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Technik.dev suites
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isScrolled && !isMenuFixed ? "text-white" : "text-black"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white text-2xl font-titillium md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Catalogue
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isScrolled && !isMenuFixed ? "text-white" : "text-white"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white text-2xl font-titillium  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Contact
                </a>
              </li>
              <button
                type="button"
                class="focus:outline-none h-[50px] text-white bg-brand hover:bg-orange-800 font-titillium transition-all ease-in-out focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-900 dark:focus:ring-green-800"
              >
                Demande devis
              </button>
              <form
                action=""
                title="Cliquer pour rechercher..."
                className="relative w-max mx-auto duration-300 transition-all ease-in-out"
              >
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="relative z-10 bg-transparent w-12 h-12 cursor-pointer rounded-full border focus:w-full focus:border-lime-300 focus:cursor-text focus:pl-16 focus:pr-4 "
                />
                <GoSearch className="fill-white absolute inset-y-0 my-auto h-8 w-12 px-3.5 stroke-gray-200 border-r border-transparent peer-focus:border-lime-300 peer-focus:stroke-lime-500 duration-300 ease-in-out transition-all" />
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
