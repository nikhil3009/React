
import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">Hi this is H1 tag from JSX</h1>
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
const name = "Sainikhil"
const Title = () => (<h1>This is fc2</h1>);
const Heading = () => (
  <div>
    {name}
    <Title />
    <h1>This is funcitonal Component</h1>
    </div>);

root.render(<Heading />)
