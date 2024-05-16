import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
// import axios from "axios";
// import { javascript } from "@codemirror/lang-javascript";
// import { darcula, darculaInit } from "@uiw/codemirror-theme-darcula";
// import { darcula } from "@uiw/codemirror-theme-darcula";

function DetailPage() {
  const [api, setApi] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // axios
    //   .get(`htts://fakestoreapi.com/products/${id}`)
    //   .then((res) => setApi(res.data))
    //   .catch((err) => console.log(err));
  }, [id]);

  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    // console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <>
      <h2>Hallo {id}</h2>
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
