import { useEffect, useState, useCallback } from "react";
import useFetchData from "./FetchData";
import ReactPaginate from "react-paginate";
import ApiCard from "./ApiCard";
import BeatLoader from "react-spinners/BeatLoader";
import NavbarTop from "./NavbarTop";
import OffCanvas from "./OffCanvas";

function Items({ currentItems, filter }) {
  // console.log(currentItems);
  return (
    <>
      {currentItems &&
        currentItems.map((entry) => {
          if (filter.length > 0) {
            const result = filter.filter((value) => {
              return value === entry.fields.category;
            });
            // console.log(result);
            if (result.length > 0) {
              return (
                <ApiCard
                  key={entry.sys.id}
                  id={entry.fields.id}
                  title={entry.fields.name}
                  url={entry.fields.icon.fields.file.url}
                  alt={entry.fields.title}
                  description={entry.fields.description}
                  popularity={entry.fields.popularity}
                  category={entry.fields.category}
                ></ApiCard>
              );
            }
          } else {
            return (
              <ApiCard
                key={entry.sys.id}
                id={entry.fields.id}
                title={entry.fields.name}
                url={entry.fields.icon.fields.file.url}
                alt={entry.fields.title}
                description={entry.fields.description}
                popularity={entry.fields.popularity}
                category={entry.fields.category}
              ></ApiCard>
            );
          }
        })}
    </>
  );
}

function Contentful({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [filter, setFilter] = useState([]);
  const { entries, isLoading } = useFetchData();

  function handleFilterChange(newFilter) {
    console.log(newFilter);
    const arr = [...newFilter];
    setFilter(arr);
  }

  useEffect(() => {
    console.log("filter ist");
    console.log(filter);
    return () => {
      // cleanup function
    };
  }, [filter]);

  function getFilteredEntries() {
    const entriesAfterFilter = [];
    entries.map((entry) => {
      if (filter.length > 0) {
        const result = filter.filter((value) => {
          return value === entry.fields.category;
        });
        // console.log(result);
        if (result.length > 0) {
          entriesAfterFilter.push(entry);
        }
      }
    });

    return entriesAfterFilter;
  }

  function getCurrentItems() {
    const filteredEntries = getFilteredEntries();
    if (!(filteredEntries.length > 0)) {
      return entries.slice(itemOffset, endOffset);
    } else {
      return filteredEntries.slice(itemOffset, endOffset);
    }
  }

  function getNewOffset(event) {
    const filteredEntries = getFilteredEntries();
    if (!(filteredEntries.length > 0)) {
      return (event.selected * itemsPerPage) % entries.length;
    } else {
      return (event.selected * itemsPerPage) % filteredEntries.length;
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center bg-slate-600">
        <div className="flex flex-wrap gap-2 h-screen items-center justify-center">
          <p className="text-slate-300">
            Loading...
            <BeatLoader color="HotPink" thickness={50} size={10} />
          </p>
        </div>
      </div>
    );
  }

  function getPageCount() {
    const filteredEntries = getFilteredEntries();
    if (!(filteredEntries.length > 0)) {
      return Math.ceil(entries.length / itemsPerPage);
    } else {
      return Math.ceil(filteredEntries.length / itemsPerPage);
    }
  }

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = getCurrentItems();

  const pageCount = getPageCount();

  const handlePageClick = (event) => {
    const newOffset = getNewOffset(event);
    console.log(newOffset);

    // const newOffset = (event.selected * itemsPerPage) % entries.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <NavbarTop onChangeFilter={handleFilterChange} categories={filter} /> */}
      <div className="flex  bg-slate-600 mb-10">
        <OffCanvas onChangeFilter={handleFilterChange} categories={filter} />
        <form className="mx-auto">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-96">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-800 rounded-lg bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for API..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col w-3/5 mx-auto items-center justify-center px-12">
        <div className="flex flex-wrap mx-6 justify-normal gap-3">
          <Items
            currentItems={currentItems}
            filter={filter}
            className="flex flex-wrap gap-2"
          />
        </div>
        <footer className="sticky bottom-0">
          <div className="p-4">

              <ReactPaginate 
                containerClassName=""
                className="flex flex-row"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                pageRangeDisplayed={3}
                pageClassName={"w-10 h-10 mx-1 pl-4 pt-2 text-slate-300 font-semibold bg-slate-800"}
                activeClassName="text-slate-400 bg-slate-300"
                breakLabel="..."

                previousLabel={
                  <div className="w-10 h-10 mx-1 pl-4 pt-3 bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e2e8f0">
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                  </div>
                }
                nextLabel={
                  <div className="w-10 h-10 mx-1 pl-3 pt-3 text-semibold bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e2e8f0">
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                  </div>
                }

              />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contentful;
