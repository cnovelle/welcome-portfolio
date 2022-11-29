import React from "react";

function Intro() {
  return (
    <section id="intro">
      <div className="container flex py-10 divide-x-2 mx-auto w-1/2">
        <div className="flex flex-col justify-around w-1/6 pr-5 mr-0">
          <span className="sr-only">Social Media Links</span>
          <a
            href="https://www.linkedin.com/in/christian-g-5509a013a/"
            target="_blank"
            className="flex justify-center"
          >
            <span class="sr-only ">LinkedIn link</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
            </svg>
          </a>
          <a
            href="https://github.com/cnovelle"
            target="_blank"
            className="flex justify-center"
          >
            <span className="sr-only ">Personal Github link</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
            </svg>
          </a>
          <a
            href="https://github.com/christiang2"
            target="_blank"
            className="flex justify-center"
          >
            <span className="sr-only ">Past Work Github link</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
            </svg>
          </a>
        </div>
        <div className="w-5/6 flex flex-col pl-5 ">
          <div className="pb-1 text-zinc-700 font-medium">
            WELCOME TO MY WEBSITE
          </div>
          <hr className="w-5"></hr>
          <div className="pt-1 text-zinc-700">
            I'm a front-end developer obsessed with giving users the absolute
            best experience navigating an interface. Here you can see some of
            the projects I have had the pleasure of working on as well as my
            past experiences. I hope this shows the skills and dedication I have
            put into creating these works.
          </div>
          <button
            type="button"
            className="text-white w-40 bg-zinc-600 hover:bg-zinc-400 focus:outline-none my-2 font-medium text-xs px-1 py-2 text-center dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-600"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
