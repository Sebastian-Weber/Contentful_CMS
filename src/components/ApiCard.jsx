import emojiHappy from "../assets/emoji-happy.svg";
import emojiUnhappy from "../assets/emoji-unhappy.svg";
import emojiNeutral from "../assets/emoji-neutral.svg";
import emojiNone from "../assets/emoji-none.svg";

function ApiCard({ id, title, url, alt, description, popularity, category }) {
  const colors = {
    eCommerce:
      "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300",
    Data: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300",
    Finance:
      "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300",
    Social:
      "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300",
    Education:
      "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300",
    Entertainment:
      "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300",
    Music:
      "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300",
    AI: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300",
    Weather:
      "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300",
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

  return (
    <div>
      <div className="block w-80  p-6 bg-slate-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
        <div className="flex gap-3">
          <img className="h-10" src={url} alt={alt} />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-300 ">
            {title}
          </h5>
        </div>
        <div className="border-t-2 mt-3">
          <p className="font-normal text-slate-300 dark:text-gray-400 h-20 overflow-hidden">
            {description}
          </p>
          <button id="toggle-btn" class="mt-4 text-blue-500 focus:outline-none">
            Read More
          </button>
        </div>
        {/* <div className="font-normal text-slate-300 dark:text-gray-400">
          Read more
        </div> */}

        <div className="flex gap-20 justify-center mt-6">
          {popularity ? (
            <div className="flex gap-4 justify-center">
              <img src={getEmoji()} alt="" />

              <p className="font-normal text-slate-300 dark:text-gray-400">
                {popularity}
              </p>
            </div>
          ) : (
            <div className="flex gap-4 justify-center">
              <img src={getEmoji()} alt="" />

              <p className="font-normal text-slate-300 dark:text-gray-400">-</p>
            </div>
          )}{" "}
          {category && <span className={colors[category]}>{category}</span>}
          {/* <div className="font-normal text-slate-300 dark:text-gray-400">
            {category}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ApiCard;
