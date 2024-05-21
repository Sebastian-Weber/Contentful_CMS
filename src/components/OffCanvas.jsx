import { useEffect, useState } from "react";

function OffCanvas({ onChangeFilter, categories }) {
  const [show, setShow] = useState(false);
  const [activeFilter, setActiveFilter] = useState([]);

  // const activeFiltersInit = {
  //   eCommerce: false,
  //   Data: false,
  //   Finance: false,
  //   Social: false,
  //   Education: false,
  //   Entertainment: false,
  //   Music: false,

  //   AI: false,
  //   Weather: false,
  // };
  useEffect(() => {
    setActiveFilter({
      eCommerce: false,
      Data: false,
      Finance: false,
      Social: false,
      Education: false,
      Entertainment: false,
      Music: false,

      AI: false,
      Weather: false,
    });
    // setActiveFilter({ ...activeFiltersInit, Education: true });
  }, []);

  useEffect(() => {
    console.log(activeFilter);
  }, [activeFilter]);

  const colors = {
    eCommerce:
      "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-gray-100",
    Data: "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-purple-400 bg-purple-100",
    Finance:
      "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-indigo-400 bg-indigo-100",
    Social:
      "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-green-400 bg-green-100",
    Education:
      "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-blue-400 bg-blue-100",
    Entertainment:
      "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-pink-400 bg-pink-100",
    Music:
      "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-yellow-400 bg-yellow-100",

    AI: "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-red-400 bg-red-100",
    Weather:
      "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-cyan-400 bg-cyan-100",
  };

  function handleClick(event) {
    event.preventDefault();

    let a = categories;
    console.log(event.target.parentNode);
    const result = categories.filter((category) => {
      return category === event.target.name;
    });

    //Filter ist noch nicht vorhanden muss also hinzugefügt werden
    if (result.length === 0) {
      console.log("push");
      a.push(event.target.name);
      // event.target.parentNode.className = colors[event.target.name];

      setActiveFilter({ ...activeFilter, [event.target.name]: true });
    } else {
      //Filter ist vorhanden muss also entfernt werden
      console.log("splice");
      a.splice(categories.indexOf(result[0]), 1);
      // event.target.parentNode.className =
      //   "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200";
      setActiveFilter({ ...activeFilter, [event.target.name]: false });
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
        className="justify-center fixed"
      >
        {/* menu icon bar */}
        <div id="iconbar" className="flex flex-row justify-between">
          {/* Open menu icon */}
          <div className="p-2" onClick={() => setShow(!show)}>
            <svg
              id="open-menu"
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
                className="-ml-12 pt-2 p-2 w-64 h-screen bg-slate-800 dark:bg-slate-800"
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
                  className="pl-2 pb-4 font-semibold text-slate-100"
                >
                  Tags
                </div>

                {/* --- wrap list items --- */}
                <ul className="flex flex-wrap justify-start">
                  <li className="my-1 px-2">
                    <div
                      className={
                        activeFilter.Entertainment
                          ? colors["Entertainment"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
                    <div
                      className={
                        activeFilter.Data
                          ? colors["Data"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
                    <div
                      className={
                        activeFilter.Music
                          ? colors["Music"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
                    <div
                      className={
                        activeFilter.AI
                          ? colors["AI"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
                    <div
                      className={
                        activeFilter.Education
                          ? colors["Education"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
                    <div
                      className={
                        activeFilter.Social
                          ? colors["Social"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
                    <div
                      className={
                        activeFilter.Weather
                          ? colors["Weather"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
                    <div
                      className={
                        activeFilter.Finance
                          ? colors["Finance"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
                    <div
                      className={
                        activeFilter.eCommerce
                          ? colors["eCommerce"]
                          : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200"
                      }
                    >
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
