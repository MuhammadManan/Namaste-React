import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1 id="heading">Element of React using JSX.</h1>;

// React Component
// - Class Based Component ( Old way )
// - Functional Component  ( New way )

// Functional Component : ( Normal JS function which return JSX code or reactElement)

const JsxHeading = () => <h1>Welcome to Namaste React....!</h1>;

// Component composition : Insert one component into another
const HeadingComponent = () => {
  return (
    <div id="Container">
      {jsxHeading}
      <JsxHeading />
      <h1>Hello World, Hope so enjoying to learn React.</h1>;
    </div>
  );
};

// console.log(HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
