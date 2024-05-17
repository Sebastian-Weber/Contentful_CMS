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

  // const handleFilterChange = useCallback(
  //   (newFilter) => {
  //     console.log(newFilter);
  //     const arr = [...newFilter];
  //     setFilter(arr);
  //   },
  //   [filter]
  // );

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
    // if (entriesAfterFilter.length > 0) {
    //   setFilteredEntries(entriesAfterFilter);
    // }
    // console.log(entriesAfterFilter);
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
        <div className="flex flex-wrap gap-2 h-screen flex items-center justify-center">
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
      <OffCanvas onChangeFilter={handleFilterChange} categories={filter} />
      <div className="flex flex-col items-center justify-center px-12 min-h-screen bg-slate-600">
        <div className="flex flex-wrap mx-6 justify-normal gap-3">
          <Items
            currentItems={currentItems}
            filter={filter}
            className="flex flex-wrap gap-2"
          />
        </div>
        <footer className="sticky bottom-0">
          <div className="p-4">
            <div className="">
              <ReactPaginate
                className="flex flex-row p-3 gap-3 font-normal text-slate-300 dark:text-gray-400 bg-slate-700"
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
