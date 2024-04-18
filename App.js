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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, " You're learning an React!"),
    React.createElement("h2", {}, " It's an amazing journey!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, " I'm an H3 tag!"),
    React.createElement("h4", {}, " I'm an H4 tag!"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
