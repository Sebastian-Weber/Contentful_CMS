import { useState, useEffect } from "react";
import { createClient } from "contentful";
import ApiCard from "./ApiCard";
import ReactPaginate from "react-paginate";
import BeatLoader from "react-spinners/BeatLoader";


const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

function Contentful() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setEntries(response.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return       <div class="flex flex-col items-center justify-center min-h-screen bg-slate-600">
    <div class="flex flex-wrap gap-2"><p class="text-slate-300">Loading...<BeatLoader color="HotPink" thickness={50} size={10}/></p></div></div>;

  
  }
  
  


  return (
    <>
      <div class="flex flex-col items-center justify-center min-h-screen bg-slate-600">
        <div class="flex flex-wrap gap-2"> 
          {entries.map((entry) => {
            return (
              <ApiCard
                key={entry.sys.id}
                title={entry.fields.name}
                url={entry.fields.icon.fields.file.url}
                alt={entry.fields.title}
                description={entry.fields.description}
              ></ApiCard>
            );
          })}
        </div>
      <footer className="sticky bottom-0">
        <div className="p-4">
          <div className="">
          <ReactPaginate className="flex flex-row font-normal text-slate-300 dark:text-gray-400"
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={10}
        marginPageDisplayed={2}
        pageRangeDisplayed={3}

        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link p-2 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link p-2 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link p-2 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}
        breakLinkClassName={'page-link p-2 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}
        />
        </div>
        </div>
      </footer>
      </div>
    </>
  );
}



export default Contentful;

// https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
