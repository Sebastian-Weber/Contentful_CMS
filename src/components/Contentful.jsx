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

  // useEffect(() => {

  //     const getEntries = async () => {
  //         const res = await fetch(
  //               'https://cdn.contentful.com/spaces/moq7l799ngye/environments/master/entries?access_token=bYEd4rlGVi9UX56HgZnWk5uu-umJOhW_JD0IrKQHeF4'
  //         );
  //         const data = await res.json();
  //         setItems(data);
  //       };   

  //     getEntries();

  // }, []);

  // console.log(items);

  // const handlePageClick = (data) => {
  //   console.log(data.selected);
  
  //   }


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
    return <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
    <div className="flex flex-wrap gap-2"><p className="text-slate-300">Loading...<BeatLoader color="HotPink" thickness={50} size={10}/></p></div></div>;


}
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
        <div className="flex flex-wrap gap-2"> 
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
          <ReactPaginate className="flex flex-row gap-2 font-normal text-slate-300 dark:text-gray-400"
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={8}
        marginPageDisplayed={6}
        pageRangeDisplayed={7}
        // onPageChange={handlePageClick}
        containerClassName={''}
        pageClassName={''}
        pageLinkClassName={'p-2 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}
        previousClassName={''}
        previousLinkClassName={'p-2 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}
        nextClassName={''}
        nextLinkClassName={'p-2 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}
        breakLinkClassName={'p-2 bg-slate-700 border border-gray-200 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'}
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
