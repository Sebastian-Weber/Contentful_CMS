import React from "react";
import { useState, useEffect } from "react";
import useFetchData from "./FetchData";
import ApiCard from "./ApiCard";
import { useParams } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";

// import { javascript } from "@codemirror/lang-javascript";
// import { darcula, darculaInit } from "@uiw/codemirror-theme-darcula";
// import { darcula } from "@uiw/codemirror-theme-darcula";

function DetailPage() {
  const { id } = useParams();
  console.log(id);
  const { entries } = useFetchData();
  const apiDetails = {};
  // const [value, setValue] = useState("console.log('hello world!');");
  {
    entries.map((entry) => {
      if (entry.fields.id === Number(id)) {
        apiDetails.title = entry.fields.name;
        apiDetails.description = entry.fields.description;
        apiDetails.url = entry.fields.icon.fields.file.url;
        apiDetails.category = entry.fields.category;
        apiDetails.popularity = entry.fields.popularity;
        apiDetails.usage = entry.fields.usage;
      }
      console.log(entry);
    });
  }

  // const onChange = React.useCallback((val, viewUpdate) => {
  //   // console.log("val:", val);
  //   setValue(val);
  // }, []);
  return (
    <>
      <ApiCard
        width={"50rem"}
        title={apiDetails.title}
        url={apiDetails.url}
        alt={apiDetails.title}
        description={apiDetails.description}
        popularity={apiDetails.popularity}
        category={apiDetails.category}
      />

      <CodeMirror
        value={apiDetails.usage}
        height="200px"
        //   extensions={[javascript({ jsx: true })]}

        //   theme={darcula}
      />
    </>
  );
}

export default DetailPage;
