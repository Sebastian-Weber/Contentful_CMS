import { useState } from "react";

function NavbarLeft() {
  const Navbar = () => {
    const [open, setOpen] = useState(true);

    return (
      <>
        {/* <!-- drawer init and show --> */}
        <div class="text-center">
          <button
            type="button"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Show navigation
          </button>
        </div>

        {/* <!-- drawer component --> */}
        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>

          {/* categories Content */}
          <div
            id="left-menu-box-wrapper"
            className="justify-center py-3 fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800 transform-none"
          >
            <div id="icon-container" className="flex flex-row justify-end">
              {/* menu icon */}
              <svg
                id="hamburger-menu"
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#5f6368"
                onClick={() => setOpen(!open)}
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </div>

            <div id="left-bar-menu-box" className="flex flex-col px-4 py-6">
              <div
                id="left-menu-box-title"
                className="px-4 mx-2 my-4 font-semibold text-slate-800"
              >
                Tags
              </div>
              <ul className="flex flex-col items-start justify-start">
                {/* --- Column --- */}
                <li className="my-1 px-2 ">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200 ">
                    <a href="" className=" text-sky-900 ">
                      Entertainment
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className="py-1 text-sky-900">
                      Data
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Music
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      AI
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Education
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Social
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Weather
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200 hover:bg-sky-700">
                    <a href="" className=" text-sky-900">
                      Finance
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      e-commerce
                    </a>
                  </div>
                </li>
              </ul>

              {/* --- Wrap --- */}
              <br></br>
              <br></br>

              <ul className="flex flex-wrap items-start justify-start">
                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Entertainment
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Data
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Music
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      AI
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Education
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Social
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Weather
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      Finance
                    </a>
                  </div>
                </li>

                <li className="my-1 px-2">
                  <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                    <a href="" className=" text-sky-900">
                      e-commerce
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
}
export default NavbarLeft;
