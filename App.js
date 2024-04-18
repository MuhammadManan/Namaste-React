import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello World from the OP React!"
);

// create Element using JSX

const jsxHeading = <h1 id="heading">Element of React using JSX.</h1>;

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
