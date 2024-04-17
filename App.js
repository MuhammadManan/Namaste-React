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
    React.createElement("h1", {}, " I'm an H1 tag!"),
    React.createElement("h2", {}, " I'm an H2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, " I'm an H3 tag!"),
    React.createElement("h4", {}, " I'm an H4 tag!"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
