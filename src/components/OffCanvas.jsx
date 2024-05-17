import React, { useState } from "react";

function OffCanvas({ onChangeFilter, categories }) {
  const [show, setShow] = useState(true);
  function handleClick(event) {
    event.preventDefault();
    let a = categories;

    const result = categories.filter((category) => {
      return category === event.target.name;
    });

    //Filter ist noch nicht vorhanden muss also hinzugefügt werden
    if (result.length === 0) {
      console.log("push");
      a.push(event.target.name);
    } else {
      //Filter ist vorhanden muss also entfernt werden
      console.log("splice");
      a.splice(categories.indexOf(result[0]), 1);
    }
    console.log(a);
    // setCategories(a);
    onChangeFilter(a);
    //filter
  }

  return (
    <>
      {/* menu wrapper */}
      <div
        id="menu-wrapper"
        className="justify-center fixed transition-transform bg-slate-600 dark:bg-gray-800 transform-none"
      >
        {/* menu icon bar */}
        <div id="iconbar" className="flex flex-row justify-between">
          {/* Open menu icon */}
          <div className="p-6" onClick={() => setShow(!show)}>
            <svg
              id="opem-menu"
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#ffffff"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>

          {/* UseState = true */}
          {show ? (
            <div>
              {/* inner content wrapper */}
              <div
                id="inner-content-wrapper"
                className="p-6 -ml-20 bg-slate-500 w-72 dark:bg-gray-800"
              >
                <div className="pb-4 flex flex-row justify-start">
                  <div className="">
                    {/* Close icon */}
                    <svg
                      id="close-menu"
                      onClick={() => setShow(!show)}
                      xmlns="http://www.w3.org/2000/svg"
                      height="32px"
                      viewBox="0 -960 960 960"
                      width="32px"
                      fill="#ffffff"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                </div>
                <div
                  id="Subheading"
                  className="pl-2 pb-4 font-bold text-slate-100"
                >
                  Tags
                </div>

                {/* --- wrap list items --- */}
                <ul className="flex flex-wrap justify-start">
                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="Entertainment"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        Entertainment
                      </a>
                    </div>
                  </li>

                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="Data"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        Data
                      </a>
                    </div>
                  </li>

                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="Music"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        Music
                      </a>
                    </div>
                  </li>

                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="AI"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        AI
                      </a>
                    </div>
                  </li>

                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="Education"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        Education
                      </a>
                    </div>
                  </li>

                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="Social"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        Social
                      </a>
                    </div>
                  </li>

                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="Weather"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        Weather
                      </a>
                    </div>
                  </li>

                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="Finance"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        Finance
                      </a>
                    </div>
                  </li>

                  <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                      <a
                        href=""
                        name="eCommerce"
                        className=" text-sky-900"
                        onClick={handleClick}
                      >
                        eCommerce
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default OffCanvas;
