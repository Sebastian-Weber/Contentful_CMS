import { useState, useEffect } from "react";
import { createClient } from "contentful";

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
    <div>
      {entries.map((entry) => {
        return (
          <div key={entry.fields.id}>
            <h2>{entry.fields.name}</h2>
            <img
              src={entry.fields.icon.fields.file.url}
              alt={entry.fields.title}
              width="10%"
            />
            <p>{entry.fields.description}</p>
            <div>{entry.fields.usage}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Contentful;

// https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
