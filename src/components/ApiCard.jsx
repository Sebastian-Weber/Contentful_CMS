function ApiCard({ id, title, url, alt, description }) {
  return (
    <div className="flex-wrap">
      <a
        href="#"
        className="block w-80  p-6 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
      >
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
        </div>
      </a>
    </div>
  );
}

export default ApiCard;
