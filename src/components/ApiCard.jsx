function ApiCard({ id, title, url, alt, description }) {
  return (
    <div className="flex-wrap">
      <a
        href="#"
        className="block w-80 p-6 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex gap-3">
          <div className="flex row items-end pt-0">
            <img className="h-10 pt-0" src={url} alt={alt} />
            <h6 className="pl-2 text-base leading-5 font-bold tracking-tight text-slate-300 ">
              {title}
            </h6>
          </div>
        </div>
        <hr className="w-10rem h-0.5 mx-auto md:my-3 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
          <p className="font-normal text-slate-300 dark:text-gray-400 h-20 overflow-hidden">
            {description}
          </p>
      </a>
    </div>
  );
}

export default ApiCard;
