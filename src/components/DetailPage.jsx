import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
// import { darcula, darculaInit } from "@uiw/codemirror-theme-darcula";
// import { darcula } from "@uiw/codemirror-theme-darcula";

function DetailPage() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const { title } = useParams;
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <>
      <h2>{title}</h2>
      <CodeMirror
        value={value}
        height="200px"
        //   extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        //   theme={darcula}
      />
    </>
  );
}

export default DetailPage;
