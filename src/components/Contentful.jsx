import { useState, useEffect } from "react";
import { createClient } from "contentful";
import ReactPaginate from "react-paginate";
import ApiCard from "./ApiCard";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

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
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntries()
      .then((response) => {
        setEntries(response.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
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
      <div className="flex items-center justify-center min-h-screen container bg-slate-600">
        <div className="flex flex-wrap">
          <Items currentItems={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}

export default Contentful;
