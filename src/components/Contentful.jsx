import { useState } from "react";
// import { createClient } from "contentful";
import useFetchData from "./FetchData";
import ReactPaginate from "react-paginate";
import ApiCard from "./ApiCard";
import BeatLoader from "react-spinners/BeatLoader";

// const client = createClient({
//   space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
//   accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
// });

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((entry) => {
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
    </>
  );
}

function Contentful({ itemsPerPage }) {
  // const [entries, setEntries] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   setIsLoading(true);
  //   client
  //     .getEntries()
  //     .then((response) => {
  //       setEntries(response.items);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
        <div className="flex flex-wrap gap-2">
          <p className="text-slate-300">
            Loading...
            <BeatLoader color="HotPink" thickness={50} size={10} />
          </p>
        </div>
      </div>
    );
  }

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = entries.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(entries.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % entries.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-12 min-h-screen bg-slate-600">
        <div className="flex flex-wrap mx-6 justify-normal gap-3">
          <Items currentItems={currentItems} className="flex flex-wrap gap-2" />
        </div>
        <footer className="sticky bottom-0">
          <div className="p-4">
            <div className="">
              <ReactPaginate
                className="flex flex-row p-4 gap-2 font-normal text-slate-300 dark:text-gray-400 bg-slate-500"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                breakLabel="..."
                nextLabel="next >"
                pageRangeDisplayed={3}
                previousLabel="< previous"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contentful;
