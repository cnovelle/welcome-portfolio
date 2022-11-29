import React from "react";

function Navigation() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-5 dark:bg-zinc-900 w-full z-20 top-0 left-0  border-zinc-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-zinc-600 dark:text-white">
            CHRISTIAN
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none dark:text-zinc-400 dark:hover:bg-zinc-700"
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
          <ul className=" items-center flex flex-col p-4 mt-4 border border-zinc-100 rounded-lg bg-zinc-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700">
            <li>
              <a
                href="#intro"
                className="block py-2 pl-3 pr-4 text-zinc-600 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-zinc-900 md:p-0 md:dark:hover:text-white dark:text-zinc-400 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700"
              >
                Intro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-zinc-600 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-zinc-900 md:p-0 md:dark:hover:text-white dark:text-zinc-400 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-zinc-600 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-zinc-900 md:p-0 md:dark:hover:text-white dark:text-zinc-400 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700"
              >
                Experience
              </a>
            </li>
            <li>
              <button
                type="button"
                className="text-white bg-zinc-600 hover:bg-zinc-400 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-600"
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
