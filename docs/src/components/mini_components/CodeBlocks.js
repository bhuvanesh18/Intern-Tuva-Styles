import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlocks = props => {
  let isnotempty = props.htmlcoderender ? "mb-2" : "";
  let isundefined = props.style ? props.style : "";
  const { htmlcoderender, codeline, lang, style } = props;
  let copy = "Copy";
  let iscodelinenotundefined = codeline ? (
    <div>
      {" "}
      <button
        className="btn btn-hover-blue float-right mr-3 mt-3"
        onClick={() => {
          navigator.clipboard.writeText(codeline[0]);
        }}
      >
        {copy}
      </button>
      <SyntaxHighlighter language={lang} style={docco}>
        {codeline}
      </SyntaxHighlighter>
    </div>
  ) : (
    ""
  );
  return (
    <div className="border p-2 mt-2">
      <div className={`${isnotempty} ${isundefined}`}>{htmlcoderender}</div>
      {iscodelinenotundefined}
    </div>
  );
};

export default CodeBlocks;
