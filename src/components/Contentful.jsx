import { useState, useEffect } from "react";
import { createClient } from "contentful";
import ApiCard from "./ApiCard";

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
    return <p>Loading...</p>;
  }

  return (
    <>

      <div class="flex items-center justify-center min-h-screen bg-slate-600">
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
      </div>
    </>
  );
}

export default Contentful;

// https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
