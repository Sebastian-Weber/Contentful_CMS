import { useEffect, useState } from "react";

function NavbarTop({ onChangeFilter, categories }) {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   console.log(`categories ist `);
  //   console.log(categories);
  // }, [categories]);

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
      {/* top */}

      <div
        id="top-menu-box-wrapper"
        className="justify-center py-3 bg-slate-500"
      >
        <div id="top-bar-menu-box" className="flex flex-row justify-start">
          <div
            id="top-menu-box-title"
            className="px-4 mx-2 my-4 text-slate-300"
          >
            Tags
          </div>
          <ul className="flex flex-row items-center">
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
    </>
  );
}

export default NavbarTop;
