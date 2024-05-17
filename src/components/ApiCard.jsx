import { Link } from "react-router-dom";
import emojiHappy from "../assets/emoji-happy.svg";
import emojiUnhappy from "../assets/emoji-unhappy.svg";
import emojiNeutral from "../assets/emoji-neutral.svg";
import emojiNone from "../assets/emoji-none.svg";

function ApiCard({ id, title, url, alt, description, popularity, category }) {
  const colors = {
    eCommerce:
      "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300",
    Data: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-purple-900 dark:text-purple-300",
    Finance:
      "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300",
    Social:
      "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-green-300",
    Education:
      "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300",
    Entertainment:
      "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-pink-900 dark:text-pink-300",
    Music:
      "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300",
    AI: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-red-300",
    Weather:
      "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-cyan-400 bg-cyan-100",
  };

  function getEmoji() {
    if (popularity > 6.6) {
      return emojiHappy;
    } else if (popularity <= 6.6 && popularity >= 3.3) {
      return emojiNeutral;
    } else if (popularity <= 3.3) {
      return emojiUnhappy;
    } else {
      return emojiNone;
    }
  }

  function getTextColor() {
    if (popularity > 6.6) {
      return "green";
    } else if (popularity <= 6.6 && popularity >= 3.3) {
      return "yellow";
    } else if (popularity <= 3.3) {
      return "red";
    } else {
      return "gray";
    }
  }

  return (
    <div className="flex-wrap">
      <div className="block w-80 p-6 pb-2 bg-slate-700 border border-slate-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
        <div className="flex row items-end pt-0">
          <img className="h-10 pt-0" src={url} alt={alt} />
          <h6 className="pl-2 text-base leading-5 font-bold tracking-tight text-slate-300 ">
            {title}
          </h6>
        </div>

        <hr className="w-10rem h-0.5 mx-auto md:my-3 bg-gray-100 border-0 rounded dark:bg-gray-700" />
        <p className="font-normal text-slate-300 min-h-24 dark:text-gray-400 line-clamp-4">
          {description}
        </p>
        <Link to={`/API-details/${id}`}>
          <div className="flex flex-row justify-end pb-2">
            <div className="flex flex-row">
              <button
                id="toggle-btn"
                className="mt-4 text-sm text-blue-500 focus:outline-none"
              >
                Read More
              </button>
              <div className="pt-4 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#3b82f6"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex justify-between my-2">
          {popularity ? (
            <div className="flex px-2 justify-center">
              <img src={getEmoji()} alt="" />
              <p className={`font-normal text-gray-300 dark:text-gray-400`}>
                {popularity}
              </p>
            </div>
          ) : (
            <div className="flex gap-4 justify-center">
              <img className="w-" src={getEmoji()} alt="" />

              <p className="font-normal text-slate-300 dark:text-gray-400">-</p>
            </div>
          )}{" "}
          {category && <span className={colors[category]}>{category}</span>}
        </div>
      </div>
    </div>
  );
}

export default ApiCard;
