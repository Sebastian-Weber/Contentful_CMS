function ApiCard({ id, title, url, alt, description }) {
  return (
    <div>
      <a
        href="#"
        class="block w-80  p-6 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
      >
        <div className="flex gap-3">
          <img className="h-10" src={url} alt={alt} />
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-300 ">
            {title}
          </h5>
        </div>
        <div className="border-t-2 mt-3">
          <p class="font-normal text-slate-300 dark:text-gray-400 h-20 overflow-hidden">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ApiCard;
