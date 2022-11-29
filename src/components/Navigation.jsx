import React from "react";

function Navigation() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-600 dark:text-white">
            CHRISTIAN
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-defualt">
          <ul className=" items-center flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Intro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Experience
              </a>
            </li>
            <li>
              <button
                type="button"
                className="text-white bg-gray-600 hover:bg-gray-400 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600"
              >
                Get in Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
