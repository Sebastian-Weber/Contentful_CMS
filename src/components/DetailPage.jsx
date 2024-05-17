import React from "react";
import { useState, useEffect } from "react";
import useFetchData from "./FetchData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { darcula } from "@uiw/codemirror-theme-darcula";

function DetailPage() {
  const { id } = useParams();
  console.log(id);
  const { entries } = useFetchData();
  const apiDetails = {};

  {
    entries.map((entry) => {
      if (entry.fields.id === Number(id)) {
        apiDetails.title = entry.fields.name;
        apiDetails.description = entry.fields.description;
        apiDetails.url = entry.fields.icon.fields.file.url;
        apiDetails.category = entry.fields.category;
        apiDetails.popularity = entry.fields.popularity;
        apiDetails.usage = entry.fields.usage;
        apiDetails.author = entry.fields.developer;
      }
      // console.log(entry);
    });
  }
  return (
    <>
      <div className="flex mx-auto justify-center m-5">
        <div className="block w-4/5 p-8  bg-slate-700 border border-slate-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-end pt-0 ">
            <img
              className="h-12 pt-0"
              src={apiDetails.url}
              alt={apiDetails.title}
            />
            <div className="grow">
              <h6 className="pl-2 text-base leading-5 font-bold tracking-tight text-slate-300">
                {apiDetails.title}
              </h6>
              <p className="pl-2 font-normal text-slate-300 dark:text-gray-400 ">
                by {apiDetails.author}
              </p>
            </div>
            <div className="grow pl-40">
              <p className="font-normal text-slate-300 dark:text-gray-400">
                category: {apiDetails.category}
              </p>
              <p className="font-normal text-slate-300 dark:text-gray-400">
                category: {apiDetails.popularity}
              </p>
            </div>
          </div>
          <hr className="w-10rem h-0.5 mx-auto md:my-3 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          <div className="flex p-10">
            <div className="flex grow">
              <p className="w-3/4 p-5 font-normal text-slate-300 dark:text-gray-400 text-lg">
                {apiDetails.description}
              </p>
            </div>
            <div className="grow">
              <p className="pb-2 font-normal text-slate-300 dark:text-gray-400">
                usage with axios:
              </p>
              <CodeMirror
                value={apiDetails.usage}
                extensions={[langs.jsx()]}
                theme={darcula}
              />
            </div>
          </div>
          <hr className="w-10rem h-0.5 mx-auto md:my-3 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          <div className="flex justify-end">
            <Link to={"/"}>
              <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
